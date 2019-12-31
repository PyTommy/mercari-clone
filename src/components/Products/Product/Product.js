import React from 'react';
import {withRouter} from 'react-router-dom';

import styles from './Product.module.scss';
import PictureRadius from '../../UI/Pictures/PictureRadius/PictureRadius';

const product = (props) => {

    return (
        <div className={styles.Product} onClick={(e) => {props.history.push('/products/id')}}>
            {/* USER INFO*/}
            <div className={styles.User}>
                <PictureRadius 
                    alt="Hiroki Tominaga"
                    src={require("../../../assets/profile-pic.JPG")}
                    size="3rem"
                    className={styles.UserPicture}
                />
                <div className={styles.UserName}>Hiroki Tominaga</div>
            </div>

            {/* Main Picture*/}
            <img alt="pic" className={styles.Image} src={require('../../../assets/demo.jpg')}/>

            {/* Texts */}
            <div className={styles.TextBox}>
                <div className={styles.Main}>iPhone</div>
                <div className={styles.Subs}>
                    <div>3000 yen</div>
                    <div>On Campus</div>
                </div>
            </div>

            {/* Bottom bar*/}
            <div className={styles.BottomBar}>
                <div>
                    1 Likes
                </div>
                <div>3 Comments</div>
            </div>
        </div>
    );
};

export default withRouter(product);