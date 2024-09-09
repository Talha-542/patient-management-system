import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [staffCount, setStaffCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);

  useEffect(() => {
    const intervalStaff = setInterval(() => setStaffCount(prev => (prev < 50 ? prev + 1 : 50)), 50);
    const intervalDoctors = setInterval(() => setDoctorCount(prev => (prev < 50 ? prev + 1 : 50)), 50);
    const intervalExperience = setInterval(() => setExperienceCount(prev => (prev < 15 ? prev + 1 : 15)), 100);
    const intervalPatients = setInterval(() => setPatientCount(prev => (prev < 10000 ? prev + 50 : 10000)), 10);

    return () => {
      clearInterval(intervalStaff);
      clearInterval(intervalDoctors);
      clearInterval(intervalExperience);
      clearInterval(intervalPatients);
    };
  }, []);

  return (
    <div className={styles.counter}>
      <div className={styles.counters}>
        <div className={styles.staff}>
          <h1 className={styles.number}>{staffCount}+</h1>
          <p className={styles.content}>Staff</p>
        </div>
        <div className={styles.doctors}>
          <h1 className={styles.number}>{doctorCount}+</h1>
          <p className={styles.content}>Doctors</p>
        </div>
        <div className={styles.yearsOfExperience}>
          <h1 className={styles.number}>{experienceCount}+</h1>
          <p className={styles.content}>Years of Experience</p>
        </div>
        <div className={styles.patientsRegistered}>
          <h1 className={styles.number}>{patientCount.toLocaleString()}+</h1>
          <p className={styles.content}>Patients Registered</p>
        </div>
      </div>
    </div>
  );
}
