import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PatientList.module.css'; // Assuming CSS modules

const PatientList = ({ patients }) => {
  return (
    <div className={styles.patientList}>
      <h2>Patients List</h2>
      <div className={styles.cardContainer}>
        {patients.map((patient) => (
          <div className={styles.patientCard} key={patient.id}>
            <h3>{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Diagnosis: {patient.diagnosis}</p>
            <Link to={`/patient/${patient.id}`} className={styles.detailsLink}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
