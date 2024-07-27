// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlicer';
import logo from '../assets/LOGO/mindcarelogo.png';
import toast from 'react-hot-toast';

export default function Nav() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  };

  return (
    <div className="bg-blue-500 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white flex gap-3 items-center">
          {/* logo */}
          <img src={logo} alt="logo" className="w-sm h-sm" />
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
            Home
          </Link>
          <Link to="/issue" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
            Mental Health Issues
          </Link>
          <Link to="/resources" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
            Resources
          </Link>
          <Link to="/about-us" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
            About Us
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
                Register
              </Link>
              <Link to="/login" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
