import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = (props) => {

    const loginHandler = () => {
        props.dispatch(login());
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

export default connect()(AuthPage);
