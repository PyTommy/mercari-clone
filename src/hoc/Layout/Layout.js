import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Layout.module.scss';

const layout = (props) => (
    <React.Fragment>
        <Navigation />
        <main className={styles.main}>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;

