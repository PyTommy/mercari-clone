import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProduct, deleteProduct} from '../../actions/product';
import imageConverter from '../../utils/imageConverter';

import styles from './SingleProduct.module.scss';
import PictureRadius from '../UI/Pictures/PictureRadius/PictureRadius';
import Comments from './Comments/Comments';
import {IoIosHeartEmpty, IoIosHeart} from 'react-icons/io';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';

const Product = ({
    loading, 
    product, 
    getProduct,
    history,
    match,
    deleteProduct,
    auth
}) => {
    useEffect(() => {
        getProduct(match.params.id);
    },[getProduct, match.params.id]);
    const isLiked = true;

    if (loading) return <Spinner/>;

    let content;
    if (!product) {
        content = <p>Not found!</p>
    } else {
        
        const image = imageConverter(product.productImage.data);
        let avatar;
        if (product.avatar) {
            avatar = `data:image/jpg;base64,${imageConverter(product.avatar.data)}`;
        } else {
            avatar = require("../../assets/default.png");
        }

        content = (<div className={styles.Product}>
            <div className={styles.TopBar}>
                <div  
                    className={styles.GoBack}
                    onClick={e => history.goBack()}
                    >{"< "}Back</div>
                { auth.isAuthenticated && auth.user._id === product.user &&(
                    <Fragment>
                        <Button btnType="color-orange size-sm">Edit</Button>
                        <Button btnType="color-danger size-sm" onClick={(e) => deleteProduct(match.params.id)}>Delete</Button>
                    </Fragment>)
                 }
                {
                    isLiked ? <IoIosHeart className={styles.Like} /> : <IoIosHeartEmpty className={styles.Unlike}/> 
                }
            </div>
            <div className={styles.BottomBar}>
                <div className={styles.BottomBarText}>{product.price} yen</div>
                <Button btnType="color-primary size-lg">Buy</Button>
            </div>

            {/* Main Picture*/}
            <img alt="pic" className={styles.Image} src={`data:image/jpg;base64,${image}`}/>
            <div className={styles.Container}>
                {/* Texts */}
                <h2 className={styles.Main}>{product.title}</h2>    
                <ul className={styles.ItemList}>
                    <li>Category: {product.category}</li>
                    <li>Meetup Place: {product.meetupAt}</li>
                </ul>     
                {/* USER INFO*/}
                <div className={styles.User}>
                    <div className={styles.UserName}>{product.name}</div>
                    <PictureRadius 
                        alt="Profile Picture"
                        src={avatar}
                        size="3rem"
                        className={styles.UserPicture}
                    />
                </div>
                <h3>Description</h3>
                <div>{product.description}</div>
                <Comments />
            </div>
        </div>);
    }

    return content;
};

Product.propTypes = {
    product: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    getProduct: PropTypes.func.isRequired,
    deleteProduct:PropTypes.func.isRequired,
    auth: PropTypes.object,
};

const mapStateToProps = state => ({
    product: state.product.product,
    loading: state.product.loading,
    auth: state.auth
});

export default connect(mapStateToProps,{getProduct, deleteProduct})(Product);