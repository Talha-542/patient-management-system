import React from 'react';
import { Link } from 'react-router-dom';
const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Patients List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/patient/${patient.id}`}>
              {patient.name} - {patient.age} years old - {patient.diagnosis}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PatientList;