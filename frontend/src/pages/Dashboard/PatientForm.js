import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated from useHistory to useNavigate
const PatientForm = ({ addPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient({ id: Date.now(), name, age, diagnosis });
    navigate('/'); // use navigate instead of history.push
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Patient</h2>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        value={diagnosis}
        placeholder="Diagnosis"
        onChange={(e) => setDiagnosis(e.target.value)}
        required
      />
      <button type="submit">Add Patient</button>
    </form>
  );
};
export default PatientForm;