import React from 'react'
import styles from './Comment.module.scss';
import PictureRadius from '../../../UI/Pictures/PictureRadius/PictureRadius';

const Comment = ({comment}) => {
    return (
        <div className={styles.Comment}>
            <div className={styles.User}>
                <PictureRadius
                    alt="UserProfile"
                    src={require("../../../../assets/default.png")}
                    size="3rem"
                    className={styles.UserPicture}
                    />
                <div>{comment.name}</div>
            </div>
            <div className={styles.Text}>
                {comment.text}
            </div>
        </div>
    )
}

export default Comment;
