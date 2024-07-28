import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlicer';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importing icons
import logo from '../assets/LOGO/mindcarelogo.png';
import toast from 'react-hot-toast';

export default function Nav() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-green-200 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-6 relative">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-15 h-15" />
          <span className="ml-2 text-2xl font-bold text-white">Your Brand</span>
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
          <Link to="/issue" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md border-2 border-green-700 transition duration-300 block">
            Mental Health Issues
          </Link>
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
