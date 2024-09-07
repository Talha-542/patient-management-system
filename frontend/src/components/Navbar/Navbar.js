import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom'; 
import styles from './Navbar.module.css';

export default function Navbar() {
    const [menu, setMenu] = useState("home");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    return (
        <div className={styles.navbar}>
            <h1 className={styles.logo}>Medical Mind</h1>
            <ul className={styles.navbarMenu}>
                <li
                    className={menu === 'home' ? 'active' : ''}
                    onClick={() => handleMenuClick('home')}
                >
                    Home
                </li>
                <li
                    className={menu === 'about us' ? 'active' : ''}
                    onClick={() => handleMenuClick('about us')}
                >
                    About Us
                </li>
                <li
                    className={menu === 'contact Us' ? 'active' : ''}
                    onClick={() => handleMenuClick('contact Us')}
                >
                    Contact Us
                </li>
            </ul>
            <div className="navbar-right">

                {/* <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
                <div className="navbar-search-icon">
                    <Link className="nav-cart" to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link> */}
                {/* <div className="dot"></div> */}
                {/* </div> */}
                <button className={styles.signIn} onClick={() => console.log('Sign In Clicked')}>Sign In</button>
            </div>
        </div>
    );
}
