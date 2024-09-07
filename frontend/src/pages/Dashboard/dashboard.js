import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PatientList from './PatientList';
const Dashboard = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 30, diagnosis: 'Flu' },
    { id: 2, name: 'Jane Smith', age: 25, diagnosis: 'Cough' }
  ]);
  const addpatient = (newPatient) =>{
      setPatients([...patients, newPatient]);
  };
  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <Link to="/add-patient">
        <button>Add New Patient</button>
      </Link>
      <PatientList patients={patients} />
    </div>
  );
};
export default Dashboard;