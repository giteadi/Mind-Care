import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlicer';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/LOGO/mindcarelogo.png';
import toast from 'react-hot-toast';

export default function Nav() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const conditions = [
  {
    name: 'Anxiety',
    description: 'Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome. It can be accompanied by physical symptoms such as increased heart rate and sweating.',
    symptoms: ['Increased heart rate', 'Sweating', 'Restlessness', 'Trembling', 'Difficulty concentrating'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., SSRIs)', 'Relaxation techniques', 'Exercise', 'Mindfulness practices']
  },
  {
    name: 'Depression',
    description: 'Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. It can affect daily functioning and overall well-being.',
    symptoms: ['Persistent sadness', 'Loss of interest in activities', 'Fatigue', 'Changes in appetite', 'Sleep disturbances'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Exercise', 'Healthy diet', 'Social support']
  },
  {
    name: 'Social Anxiety',
    description: 'Social anxiety involves an intense fear of social situations where one might be judged or scrutinized by others. It can lead to avoidance of social interactions and significant distress.',
    symptoms: ['Intense fear of social situations', 'Avoidance of social events', 'Physical symptoms like sweating or shaking', 'Excessive worry about being judged', 'Difficulty speaking in public'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., SSRIs)', 'Social skills training', 'Gradual exposure therapy', 'Mindfulness practices']
  },
  {
    name: 'Panic Disorder',
    description: 'Panic disorder is marked by recurrent and unexpected panic attacks, which are sudden periods of intense fear or discomfort. Symptoms may include palpitations, sweating, and trembling.',
    symptoms: ['Sudden intense fear', 'Palpitations', 'Sweating', 'Trembling', 'Shortness of breath'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Breathing exercises', 'Relaxation techniques', 'Gradual exposure therapy']
  },
  {
    name: 'Bipolar Disorder',
    description: 'Bipolar disorder involves extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). These mood swings can affect energy levels, behavior, and daily functioning.',
    symptoms: ['Manic episodes with increased energy', 'Depressive episodes with low mood', 'Rapid mood swings', 'Impulsivity', 'Sleep disturbances'],
    cures: ['Medication (e.g., mood stabilizers)', 'Therapy (e.g., CBT)', 'Regular routine', 'Healthy lifestyle', 'Support groups']
  },
  {
    name: 'Borderline Personality Disorder',
    description: 'Borderline personality disorder is characterized by unstable moods, behavior, and relationships. Individuals may experience intense episodes of anger, depression, and anxiety.',
    symptoms: ['Unstable relationships', 'Intense emotions', 'Fear of abandonment', 'Impulsive behavior', 'Chronic feelings of emptiness'],
    cures: ['Therapy (e.g., DBT)', 'Medication (e.g., mood stabilizers)', 'Healthy coping strategies', 'Support groups', 'Regular therapy sessions']
  },
  {
    name: 'Postpartum Depression',
    description: 'Postpartum depression is a type of depression that occurs after childbirth. It can involve severe mood swings, feelings of inadequacy, and difficulty bonding with the baby.',
    symptoms: ['Severe mood swings', 'Feelings of inadequacy', 'Difficulty bonding with baby', 'Extreme fatigue', 'Changes in appetite'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Support from family and friends', 'Self-care practices', 'Joining support groups for new mothers']
  },
  {
    name: 'Insomnia',
    description: 'Insomnia is a sleep disorder where individuals have trouble falling asleep, staying asleep, or waking up too early. It can lead to daytime fatigue and difficulties in concentration.',
    symptoms: ['Difficulty falling asleep', 'Waking up frequently during the night', 'Waking up too early', 'Daytime fatigue', 'Difficulty concentrating'],
    cures: ['Sleep hygiene practices', 'Cognitive Behavioral Therapy for Insomnia (CBT-I)', 'Medication (e.g., sleep aids)', 'Relaxation techniques', 'Regular sleep schedule']
  },
  {
    name: 'Obsessive-Compulsive Disorder (OCD)',
    description: 'OCD is characterized by persistent, unwanted thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce the anxiety caused by these thoughts.',
    symptoms: ['Unwanted, intrusive thoughts', 'Compulsive behaviors', 'High levels of anxiety', 'Repetitive rituals', 'Interference with daily life'],
    cures: ['Therapy (e.g., ERP)', 'Medication (e.g., SSRIs)', 'Support groups', 'Healthy coping mechanisms', 'Mindfulness techniques']
  },
  {
    name: 'Eating Disorder',
    description: 'Eating disorders involve abnormal or disturbed eating habits. Common types include anorexia nervosa, bulimia nervosa, and binge-eating disorder. They can impact physical health and emotional well-being.',
    symptoms: ['Preoccupation with weight and body image', 'Abnormal eating habits', 'Severe weight changes', 'Emotional distress related to eating', 'Guilt or shame about eating behaviors'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Nutritional counseling', 'Support groups', 'Regular medical monitoring']
  }
];

const handleDropdownClick = (condition) => {
  setIsDropdownOpen(false);
  navigate('/singlePage', { state: condition });
};


  return (
    <div className="bg-green-200 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-6 relative">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-15 h-15" />
          <span className="ml-2 text-2xl font-bold text-white mt-1">Because we care</span>
        </div>

        {/* Hamburger Menu Icon - Top Right Corner */}
        <div className="sm:hidden absolute top-0 right-0 mt-4 mr-4">
          {!isMenuOpen ? (
            <button onClick={toggleMenu} className="text-black">
              <AiOutlineMenu className="w-6 h-6" />
            </button>
          ) : (
            <button onClick={toggleMenu} className="text-black">
              <AiOutlineClose className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Menu Links */}
        <div className={`sm:flex space-x-4 mt-4 sm:mt-0 ${isMenuOpen ? 'block bg-green-200 w-full' : 'hidden sm:flex'}`}>
          <Link to="/" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block">
            Home
          </Link>
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block w-full text-left"
            >
              Mental Health Issues
            </button>
            <div className={`absolute z-10 mt-2 bg-green-300 rounded-md shadow-lg w-full ${isDropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
              {conditions.map((condition, index) => (
                <button
                  key={index}
                  onClick={() => handleDropdownClick(condition)}
                  className="block px-4 py-2 text-white hover:bg-green-500 w-full text-left"
                >
                  {condition.name}
                </button>
              ))}
            </div>
          </div>
          <Link to="/resources" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block">
            Resources
          </Link>
          <Link to="/about" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block">
            About Us
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block">
                Register
              </Link>
              <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
