import React, {Component} from 'react';

import styles from './AuthForm.module.scss';


class AuthForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",

        isSignup: false
    }

    formTypeChange = (boolean) => {
        this.setState(()=> ({isSignup: boolean}));
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({username}));
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email}));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.loginHandler();
    } 

    render() {
        const signupButtonClass = [styles.onSignupChange];
        const loginButtonClass = [styles.onLoginChange];

        if (this.state.isSignup) {
            signupButtonClass.push(styles.active);
        } else {
            loginButtonClass.push(styles.active);
        }

        return (
            <div className={styles.AuthForm}>
                <div className={styles.isSignupContainer}>
                    <button 
                        className={signupButtonClass.join(" ")}
                        onClick={() => this.formTypeChange(true)}
                        >Signup
                    </button>
                    <button 
                        className={loginButtonClass.join(" ")}
                        onClick={() => this.formTypeChange(false)}
                        >Login
                    </button>
                </div>
                <form onSubmit={this.onSubmit}>
                    {this.state.isSignup && (
                        <input 
                            type="text" 
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <button className={styles.submit}>{this.state.isSignup ? "Signup" : "Login"}</button>
                </form>
            </div>
        );
    }
};


export default AuthForm;