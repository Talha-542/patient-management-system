import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import styles from './AboutBanner.module.css';
import image from '../Assests/about.jpg'; // Ensure the image path is correct

export default function AboutUs() {
  return (
    <>
      <div className={styles.typingContainer}>
        <h2>What we provide...</h2>
        <div className={styles.typed}>
          <Typed
            strings={['Healthcare', 'Preventive Care', 'Treatment Plans', 'Support']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <p>
            Welcome to Medical Mind, where we are dedicated to providing exceptional healthcare solutions that make a difference in the lives of our patients. Our mission is to bring quality medical care and innovative treatments within reach for everyone, ensuring a healthier and brighter future for all.<br />
            With a team of highly skilled doctors, compassionate healthcare professionals, and state-of-the-art facilities, we are committed to delivering personalized care tailored to each patient’s unique needs. Our approach combines medical expertise with cutting-edge technology, ensuring that every patient receives the highest standard of care possible.<br />
            At Medical Mind, we believe in not only treating illnesses but also in promoting overall well-being. Our services range from preventive care to specialized treatments, all delivered in a compassionate and patient-centric environment. We strive to make healthcare accessible, affordable, and centered around the trust and confidence of our patients.<br />
            We look forward to being your trusted partner in health, supporting you and your family every step of the way. Together, let's build a healthier tomorrow.
          </p>
        </div>

        <div className={styles.descriptionImages}>
          <img src={image} alt='Healthcare' className={styles.descriptionImage} />
          <img src={image} alt='Support' className={styles.descriptionImage} />
        </div>
      </div>
    </>
  );
}
