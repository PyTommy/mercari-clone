import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from '../../actions/product';

import Product from './Product/Product';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Products.module.scss';

const Products = ({ getProducts, product: {products, loading}}) => {
    useEffect(() => {
        if (products.length === 0) getProducts();
    },[]);
    
    const productList = products.length <= 0 ? 
        <p>No products!!</p>
    : 
        products.map((product)=> {
            return <Product key={product._id} product={product} />;
        });

    if (loading) {
        return <Spinner/>;
    }

    return (
        <div className={classes.Products}>
            {productList}
        </div>
    );
};

Products.propTypes = {
    product: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { getProducts })(Products);