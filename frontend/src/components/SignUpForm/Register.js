import React from 'react'
import SignUpPageImg from '../Assests/signupPage.png'
import { Link } from 'react-router-dom';

import styles from './Register.module.css'
export default function Register() {
    return (
        <>
            <div className={styles.loginForm}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={SignUpPageImg} className={styles.loginImg} alt="" />
                    </div>
                    <div className={styles.inputs}>
                        <h2 className={styles.login}>Sign Up</h2>
                        <form >
                            <input
                                type="text"
                                placeholder="Name"
                                className={styles.email}
                                name="name"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.email}
                                name="email"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.password}
                                name="password"
                                required
                            />
                            <div className={styles.Btns}>
                                <button type="submit" className={styles.loginBtn}>Sign Up</button>
                                <span>Already Have Accout <Link to='/sign-in' className={styles.signUpBtn}><b>Sign In</b></Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
