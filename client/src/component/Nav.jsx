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
    // Add more conditions here
  ];

  const handleDropdownClick = (condition) => {
    setIsDropdownOpen(false);
    navigate(`/singlePage`, { state: condition });
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
