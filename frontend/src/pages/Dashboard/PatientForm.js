import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PatientForm.module.css'; 

const PatientForm = ({ addPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      id: Date.now(),
      name,
      age: parseInt(age),
      diagnosis
    };
    addPatient(newPatient);
    navigate('/'); 
  };

  return (
    <div className={styles.patientForm}>
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="diagnosis">Diagnosis:</label>
          <input
            type="text"
            id="diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>Add Patient</button>
      </form>
    </div>
  );
};

export default PatientForm;
