import React from 'react'
import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'


const NavBar = () => (
    <div className={styles.nav}>
        <span className={styles.links}>
            <ul>
                <li>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                </li>
                <li>
                    <a href="https://github.com/features">Features</a>
                </li>
                <li>
                    <a href="https://github.com/business">Business</a>
                </li>
                <li>
                    < a href="https://github.com/explore">Explore</a>
                </li>
                <li>
                    <a href="https://github.com/marketplace">Marketplace</a>
                </li>
                <li>
                    <a href="https://github.com/pricing">Pricing</a>
                </li>
                <li>
                    <input className={styles.inputBox} type="text" placeholder="Search GitHub" />
                </li>
                <li>
                    <a href="https://github.com/marketplace">Sign in</a>
                </li>
                <li>
                    <a className={styles.signup} href="https://github.com/pricing">Sign up</a>
                </li>
            </ul>
        </span>
    </div>
)

export default NavBar;
