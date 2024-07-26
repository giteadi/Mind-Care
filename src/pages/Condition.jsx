import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const conditionData = {
  'anxiety': {
    title: 'Anxiety',
    description: 'Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome. It can affect your daily life, making it difficult to relax and concentrate.',
    resources: ['Resource 1', 'Resource 2', 'Resource 3']
  },
  'depression': {
    title: 'Depression',
    description: 'Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It affects how you feel, think, and handle daily activities.',
    resources: ['Resource 1', 'Resource 2', 'Resource 3']
  },
  // Add more conditions here...
};

export default function Condition() {
  const { condition } = useParams();
  const navigate = useNavigate();
  const conditionDetail = conditionData[condition];

  if (!conditionDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <h2 className="text-2xl font-bold">Condition not found</h2>
      </div>
    );
  }

  return (
    <div className="relative max-w-full bg-white overflow-hidden font-sans">
      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] text-center text-white bg-blue-600 p-6 md:p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{conditionDetail.title}</h1>
      </div>

      {/* Content Section */}
      <div className="relative z-10 px-4 py-8 md:px-8 md:py-12 bg-white text-black max-w-4xl mx-auto rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{conditionDetail.title}</h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          {conditionDetail.description}
        </p>
        <h3 className="text-2xl font-semibold mb-4">Resources</h3>
        <ul className="list-disc list-inside text-base md:text-lg leading-relaxed">
          {conditionDetail.resources.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
        <button
          onClick={() => navigate(-1)}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
}
