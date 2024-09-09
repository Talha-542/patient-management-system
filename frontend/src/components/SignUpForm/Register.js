import React from 'react';
import styles from './Register.module.css'; // Ensure the correct CSS module is imported
import SignUpPageImg from '../Assests/signupPage.png'; // Update image path if needed
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className={styles.loginForm}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={SignUpPageImg} className={styles.loginImg} alt="Sign Up Page" />
                </div>

                <div className={styles.inputs}>
                    <h2 className={styles.login}>Sign Up</h2>

                    <form className={styles.inputFields}>
                        <label htmlFor="name" className={styles.visuallyHidden}>Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            className={styles.email} 
                            name="name"
                            required
                        />
                        <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className={styles.email}
                            name="email"
                            required
                        />
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
                            <button type="submit" className={styles.loginBtn}>Sign Up</button><br/>
                            <span className={styles.signUpText}>Already have an account? <Link to='/sign-in' className={styles.signUpBtn}><b>Sign In</b></Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
