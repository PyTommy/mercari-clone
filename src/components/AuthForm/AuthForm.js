import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './AuthForm.module.scss';
import { setAlert } from '../../actions/alert';

class AuthForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",

        isSignup: true
    }
    formTypeChange = (boolean) => {
        if (boolean !== this.state.isSignup) {
            this.setState(()=> ({
                name: "",
                email: "",
                password: "",
                password2: "",
                isSignup: boolean
            }));
        } 
    }

    onChange = (e) => {
        e.preventDefault();
        e.persist();

        this.setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        
        if (this.state.isSignup) { // SignUp
            const { name, email, password, password2 } = this.state;
            if ( password !== password2 ) {
                this.props.setAlert("password do not much", "danger");
            } else {
                console.log("Success");
            }
            
        } else { // Login
            this.props.loginHandler();
        }
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
                            value={this.state.name}
                            onChange={e => this.onChange(e)}
                            name="name"
                            required
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                        required
                    />
                    { this.state.isSignup &&
                        <input 
                            type="password" 
                            placeholder="Comfirm Password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            name="password2"
                            required
                        />
                    }
                    <button className={styles.submit}>{this.state.isSignup ? "Signup" : "Login"}</button>
                </form>
            </div>
        );
    }
};



export default connect(null, {setAlert})(AuthForm);