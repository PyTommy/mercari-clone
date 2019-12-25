import React from 'react';
import {connect} from 'react-redux';

import {logout} from '../../actions/auth';


const MyPage = (props) => {
    const logoutHandler = () => {
        props.dispatch(logout());
        props.history.push('/home');
    };
    return (
        <div>
            <h1>MyPage</h1>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default connect()(MyPage);