import React from 'react'
import styles from './Counter.module.css'
export default function Counter() {
  return (
    <>
     <div className={styles.counter}>
        <div className={styles.counters}>
            <div className={styles.staff}>
                <h1 className={styles.number}>50+</h1>
                <p className={styles.content}>Staff</p>
            </div>
            <div className={styles.doctors}>
                <h1 className={styles.number}>50+</h1>
                <p className={styles.content}>Doctors</p>
            </div>
            <div className={styles.yearsOfExperience}>
                <h1 className={styles.number}>15+</h1>
                <p className={styles.content}>Years of Experience</p>
            </div>
            <div className={styles.patientsRegistered}>
                <h1 className={styles.number}>10,000+</h1>
                <p className={styles.content}>Patients Registered</p>
            </div>
        </div>
    </div> 
    </>
  )
}
