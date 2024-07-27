import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is an online mental health assessment test?',
    answer: 'An online mental health assessment test is a digital tool designed to evaluate an individual\'s mental health status. These tests typically consist of questionnaires or quizzes that assess various aspects of mental health, such as mood, anxiety, and stress levels.',
  },
  {
    question: 'How accurate are online mental health assessment tests?',
    answer: 'While online mental health assessment tests can provide useful insights and initial screenings, they are not a substitute for a professional diagnosis. The accuracy can vary depending on the test\'s design and the honesty of the responses.',
  },
  {
    question: 'Can I trust the results of an online mental health assessment test?',
    answer: 'You can trust online assessments as a preliminary step to understand your mental health, but they should not be the sole basis for diagnosing or treating mental health conditions. Always consult with a mental health professional for an accurate diagnosis.',
  },
  {
    question: 'What should I do if my online assessment indicates a mental health concern?',
    answer: 'If an online assessment indicates a potential mental health concern, it is important to seek professional help. Contact a licensed mental health professional, such as a psychologist or psychiatrist, for a thorough evaluation and appropriate guidance.',
  },
  {
    question: 'What are the benefits of taking an online mental health assessment test?',
    answer: 'The benefits include increased awareness of your mental health, a better understanding of your symptoms, and guidance on whether you should seek professional help. They are also convenient and accessible from anywhere.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-xl mx-auto rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4  border-b border-gray-300">
          <button 
            onClick={() => toggleDropdown(index)}
            className="flex items-center justify-between w-full py-2 text-left text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <span className="text-md pl-3 font-semibold">{item.question}</span>
            {openIndex === index ? (
              <FaChevronUp className="transition-transform transform mr-3" />
            ) : (
              <FaChevronDown className="transition-transform transform mr-3" />
            )}
          </button>
          {openIndex === index && (
            <div className="mt-2 p-4 bg-white rounded-lg border border-gray-300">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
