// AboutUs.js

import React from 'react';
import doctor from '../assets/DOCTORS IMAGES/DOCTOR 1.jpg'; // Import Dr. Gourav Gupta's image

const AboutUs = () => {
  return (
    <div className="about-us-container max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">About Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At Mental Care, our mission is to deliver exceptional mental health services that enhance the well-being of individuals and communities. We are committed to providing compassionate care and innovative treatments that support mental health and promote resilience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-600">
          Our vision is to transform the landscape of mental health care through excellence and innovation. We aim to create a world where mental health is prioritized and accessible, fostering a supportive environment where everyone can thrive.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Integrity:</strong> We maintain the highest ethical standards in all our practices and interactions.</li>
          <li><strong>Empathy:</strong> We approach every situation with compassion and understanding, prioritizing the needs of our clients.</li>
          <li><strong>Innovation:</strong> We embrace cutting-edge techniques and research to provide the best care possible.</li>
          <li><strong>Collaboration:</strong> We work together with patients and professionals to achieve the best outcomes.</li>
          <li><strong>Respect:</strong> We respect each individual's journey and treat everyone with dignity and consideration.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <p className="text-gray-600 mb-6">
          Our team is composed of dedicated professionals led by Dr. Gourav Gupta, a leading expert in mental health. We are committed to providing exceptional care and support to our patients. Meet some of the key members of our team:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="team-member p-4 border border-gray-200 rounded-md shadow-md">
            <img src={doctor} alt="Dr. Gourav Gupta" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Dr. Gourav Gupta</h3>
            <p className="text-gray-600">Founder & Chief Psychologist</p>
          </div>
          {/* Add other team members similarly */}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our History</h2>
        <p className="text-gray-600">
          Founded in 2021, Mental Care has been at the forefront of mental health care, providing top-notch services and support to individuals in need. Our journey began with a vision to improve mental health care accessibility, and we have since grown to become a trusted name in the industry. Key milestones include [mention significant achievements or events].
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
