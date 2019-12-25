import React from 'react';

import classes from './Product.module.scss';

const product = (props) => {

    return (
        <div className={classes.Product} onClick={props.clicked}>
            <img className={classes.Image} src={require("../../../assets/demo.jpg")} alt="demo" />
            <div className={classes.Place}>Tokyo</div>
            <div className={classes.Date}>2020 Jan 1</div>
            <div className={classes.Title}>Exciting event at beautiful place!!</div>
            <div className={classes.Price}>$3000</div>
        </div>
    );
};

export default product;