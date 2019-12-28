import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';

// action creators
import {login} from '../../actions/auth';

const AuthPage = (props) => {
    const loginHandler = () => {
        props.login();
        props.history.push('/home');
    };
    console.log(props);

    return (
        <React.Fragment>
            <AuthForm 
                loginHandler={loginHandler}
                // singupHandler 
            />
        </React.Fragment>
    );
};

export default connect(null, {login})(AuthPage);
