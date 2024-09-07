import React from "react";
import styles from "./Footer.module.css"; // Importing CSS module
import { assets } from "../Assests/assets"; // Adjust the path to your assets

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentLeft}>
          <h3>Medical Mind</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            molestiae, et dolor odit soluta non, atque ducimus corrupti
            reiciendis inventore est fugiat nobis nesciunt neque id. Quasi
            dignissimos facilis quisquam.
          </p>
          <div className={styles.footerSocialIcons}>
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className={styles.footerContentCenter}>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.footerContentRight}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0300-VIGO-911</li>
            <li>CristianoRonaldo@suiiii.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={styles.footerCopyright}> 
        Copyright 2024 @ Medical Mind.com - All Right Reserved 
      </p>
    </div>
  );
}
