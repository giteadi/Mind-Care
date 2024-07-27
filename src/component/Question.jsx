import React from 'react';

const Question = ({ questionId, question, options, onAnswerChange }) => {
  return (
    <div className="mb-4">
      <p className="font-semibold mb-2">{question}</p>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="radio"
            id={`${questionId}-${index}`}
            name={`question-${questionId}`}
            value={index}
            onChange={(e) => onAnswerChange(questionId, e.target.value)}
            className="mr-2"
          />
          <label htmlFor={`${questionId}-${index}`} className="cursor-pointer">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
