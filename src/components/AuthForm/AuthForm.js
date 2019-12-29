import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './AuthForm.module.scss';
import { setAlert } from '../../actions/alert';
import { register, login } from '../../actions/auth';

const AuthForm = (props) => {
    // State
    const [formData, setFormData]  = useState({
        name: "tommy",
        email: "test@apu.ac.jp",
        password: "testtest",
        password2: "testtest"
    });
    const [isSignup, setIsSignup] = useState(true);

    // Functions
    const formTypeChange = (boolean) => {
        if (boolean !== isSignup) {
            setFormData(()=> ({
                name: "",
                email: "",
                password: "",
                password2: "",
            }));
            setIsSignup(boolean);
        } 
    }

    const onChange = (e) => {
        e.preventDefault();
        e.persist();

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };


    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, password2 } = formData;
        
        if (isSignup) { // SignUp
            if ( password !== password2 ) {
                props.setAlert("password do not much", "danger");
            } else {
                props.register({name, email, password});
            }            
        } else { // Login
            props.login({email, password});
        }
    } 

    // Styles for Signup/Login buttons
    const signupButtonClass = [styles.onSignupChange];
    const loginButtonClass = [styles.onLoginChange];
    if (isSignup) {
        signupButtonClass.push(styles.active);
    } else {
        loginButtonClass.push(styles.active);
    }

    if (props.auth.isAuthenticated) {
        return <Redirect to="/" />;
    };

    return (
        <div className={styles.AuthForm}>
            <div className={styles.isSignupContainer}>
                <button 
                    className={signupButtonClass.join(" ")}
                    onClick={() => formTypeChange(true)}
                    >Signup
                </button>
                <button 
                    className={loginButtonClass.join(" ")}
                    onClick={() => formTypeChange(false)}
                    >Login
                </button>
            </div>
            <form onSubmit={onSubmit}>
                {isSignup && (
                    <input 
                        type="text" 
                        placeholder="Username"
                        value={formData.name}
                        onChange={e => onChange(e)}
                        name="name"
                        required
                    />
                )}
                <input 
                    type="email" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={onChange}
                    name="email"
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={formData.password}
                    onChange={onChange}
                    name="password"
                    required
                />
                { isSignup &&
                    <input 
                        type="password" 
                        placeholder="Comfirm Password"
                        value={formData.password2}
                        onChange={onChange}
                        name="password2"
                        required
                    />
                }
                <button className={styles.submit}>{isSignup ? "Signup" : "Login"}</button>
            </form>
        </div>
    );
};

AuthForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {setAlert, register, login})(AuthForm);