import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// FAQItem Component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item mb-4 border-b border-gray-300">
    <button
      onClick={onClick}
      className="w-full text-left py-3 px-4 font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
    >
      <span>{question}</span>
      <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
    </button>
    {isOpen && (
      <div className="faq-answer px-4 py-2 bg-gray-50">
        <p className="text-gray-600">{answer}</p>
      </div>
    )}
  </div>
);

// Main FAQ Component
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Data
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

  return (
    <div className="faq-container max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
