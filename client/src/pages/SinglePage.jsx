import React from 'react';
import { useLocation } from 'react-router-dom';

const SinglePage = () => {
  const location = useLocation();
  const condition = location.state;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-green-200 to-blue-200 shadow-lg rounded-lg mt-10">
      <div className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">
          {condition.name}
        </h1>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          {condition.description}
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 005.656 0m0 0a4 4 0 005.656-5.656L12 3m0 0L3.172 11.172a4 4 0 005.656 5.656z"></path></svg>
            Symptoms
          </h2>
          <ul className="list-disc list-inside mb-4 text-lg text-gray-800">
            {condition.symptoms.map((symptom, index) => (
              <li key={index} className="mb-2">
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-red-600 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2v7a2 2 0 11-4 0v-7a2 2 0 012-2zM9 7a2 2 0 012 2v7a2 2 0 11-4 0v-7a2 2 0 012-2z"></path></svg>
            Cures
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-800">
            {condition.cures.map((cure, index) => (
              <li key={index} className="mb-2">
                {cure}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
