import React from 'react';


import Product from './Product/Product';
import classes from './Products.module.scss';

const products = (props) => {
    const productsData = [1, 2, 3, 4, 5, 6, 7, 8,9,10, 11];

    const productList = productsData.map((data)=> {
        return <Product key={data} clicked={props.productClicked}/>
    }) ;

    return (
        <div className={classes.Products}>
            {productList}
        </div>
    );
};

export default products;