import React from 'react'
import styles from './Comment.module.scss';
import PictureRadius from '../../../UI/Pictures/PictureRadius/PictureRadius';

const Comment = () => {
    return (
        <div className={styles.Comment}>
            <div className={styles.User}>
                <PictureRadius
                    alt="UserProfile"
                    src={require("../../../../assets/profile-pic.JPG")}
                    size="3rem"
                    className={styles.UserPicture}
                    />
                <div>Hiroki TOMINAGA</div>
            </div>
            <div>
                Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.
            </div>
        </div>
    )
}

export default Comment;
