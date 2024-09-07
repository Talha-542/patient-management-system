import React from 'react';
import { useParams } from 'react-router-dom';
const PatientDetails = ({ patients }) => {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === parseInt(id));
  if (!patient) {
    return <div>Patient not found</div>;
  }
  return (
    <div>
      <h2>Patient Details</h2>
      <p>Name: {patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>Diagnosis: {patient.diagnosis}</p>
    </div>
  );
};
export default PatientDetails;









