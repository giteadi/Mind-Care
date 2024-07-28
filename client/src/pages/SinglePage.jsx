import React from 'react';
import { useLocation } from 'react-router-dom';

const SinglePage = () => {
  const location = useLocation();
  const condition = location.state;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{condition.name}</h1>
      <p className="mb-4">{condition.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Symptoms</h2>
      <ul className="list-disc list-inside mb-4">
        {condition.symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Cures</h2>
      <ul className="list-disc list-inside">
        {condition.cures.map((cure, index) => (
          <li key={index}>{cure}</li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePage;
