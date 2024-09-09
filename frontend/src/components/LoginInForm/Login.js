import React from 'react';
import styles from './Login.module.css';
import LoginPageImg from '../Assests/loginpage.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={styles.loginForm}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={LoginPageImg} className={styles.loginImg} alt="Login Page" />
                </div>

                
                <div className={styles.inputs}>
                    <h2 className={styles.login}>Sign In</h2>

                    <form className={styles.inputFields}>
                        <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className={styles.email}
                            name="email"
                            required
                        />

                        {/* Password Input */}
                        <label htmlFor="password" className={styles.visuallyHidden}>Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className={styles.password}
                            name="password"
                            required
                        />
                        <div className={styles.Btns}>
                            <button type="submit" className={styles.loginBtn}>Sign In</button><br/>
                            <span>Don’t have an account? <Link to='/sign-up' className={styles.signUpBtn}><b>Sign Up</b></Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
