import React, {Fragment} from 'react'
import styles from './Comments.module.scss';
import Comment from './Comment/Comment';

const Comments = () => {
    return (
        <Fragment>
            <h3 className={styles.Header}>Comments</h3>
            <div className={styles.Comments}>
                <Comment />
            </div>
        </Fragment>
    )
}

export default Comments;
