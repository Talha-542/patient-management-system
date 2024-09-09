import React, { useState } from 'react';
import { Link, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import PatientList from './PatientList';
import PatientForm from './PatientForm';
import styles from './dashboard.module.css'; // Assuming CSS modules

const Dashboard = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 30, diagnosis: 'Flu' },
    { id: 2, name: 'Jane Smith', age: 25, diagnosis: 'Cough' }
  ]);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const location = useLocation();
  const isAddPatientRoute = location.pathname.endsWith('/add-patient');

  return (
    <div className={styles.dashboard}>
      <h1>Doctor Dashboard</h1>
      {!isAddPatientRoute && (
        <Link to="add-patient">
          <button className={styles.addButton}>Add New Patient</button>
        </Link>
      )}

      <Routes>
        <Route path="/" element={<PatientList patients={patients} />} />
        <Route path="add-patient" element={<PatientForm addPatient={addPatient} />} />
      </Routes>

      <Outlet /> 
    </div>
  );
};

export default Dashboard;
