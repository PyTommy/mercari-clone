import React from 'react';
import {connect} from 'react-redux';

// action creators
import {logout} from '../../actions/auth';


const MyPage = (props) => {
    const logoutHandler = () => {
        props.logout();
        props.history.push('/home');
    };
    return (
        <div>
            <h1>MyPage</h1>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default connect(null, {logout})(MyPage);