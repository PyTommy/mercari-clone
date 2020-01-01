import React, {Fragment} from 'react'
import styles from './Comments.module.scss';
import Comment from './Comment/Comment';
import Button from '@material-ui/core/Button';

const Comments = () => {
    return (
        <Fragment>
            <h3 className={styles.Header}>Comments</h3>
            <div className={styles.Comments}>
                <Comment />
            <textarea
                className={styles.Textarea}
                placeholder="New comment here"
            ></textarea>  
            <Button
                variant="contained"
                color="primary"
                className={styles.button}
                >Send
            </Button>        
            </div>
        </Fragment>
    )
}

export default Comments;
