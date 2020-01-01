import React from 'react';

import styles from './SingleProduct.module.scss';
import PictureRadius from '../UI/Pictures/PictureRadius/PictureRadius';
import Comments from './Comments/Comments';
import {IoIosHeartEmpty, IoIosHeart} from 'react-icons/io';
import Button from '../UI/Button/Button';

const product = (props) => {
    const isLiked = true;

    return (
        <div className={styles.Product}>

            {/* Main Picture*/}
            <div className={styles.TopBar}>
                <div  
                    className={styles.GoBack}
                    onClick={e => props.history.goBack()}
                    >{"< "}Back</div>
                <Button btnType="color-orange size-sm">Edit</Button>
                <Button btnType="color-danger size-sm">Delete</Button>
                {
                    isLiked ? <IoIosHeart className={styles.Like} /> : <IoIosHeartEmpty className={styles.Unlike}/> 
                }
            </div>
            <div className={styles.BottomBar}>
                <div className={styles.BottomBarText}>3000 yen</div>
                <Button btnType="color-primary size-lg">Buy</Button>
            </div>

            <img alt="pic" className={styles.Image} src={require('../../assets/demo.jpg')}/>
            <div className={styles.Container}>
                {/* Texts */}
                <h2 className={styles.Main}>iPhone</h2>    
                <ul className={styles.ItemList}>
                    <li>Category: Bike</li>
                    <li>Meetup Place: On Campus</li>
                    <li>Price3000 yen</li>
                </ul>     
                {/* USER INFO*/}
                <div className={styles.User}>
                    <div className={styles.UserName}>Hiroki Tominaga</div>
                    <PictureRadius 
                        alt="Hiroki Tominaga"
                        src={require("../../assets/profile-pic.JPG")}
                        size="3rem"
                        className={styles.UserPicture}
                    />
                </div>
                <h3>Description</h3>
                <div>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</div>
                <Comments />
            </div>
        </div>
    );
};

export default product;