import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">BrandName</h2>
                        <p className="mb-4">Your trusted source for mental health resources and support.</p>
                        <p className="mb-4">1234 Elm Street, Suite 567<br />City, State, 12345</p>
                        <p>Email: <a href="mailto:support@brandname.com" className="text-blue-400 hover:underline">support@brandname.com</a></p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link to="/mental-health-issues" className="hover:text-blue-400">Mental Health Issues</Link></li>
                            <li><Link to="/resources" className="hover:text-blue-400">Resources</Link></li>
                            <li><Link to="/about-us" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link to="/register" className="hover:text-blue-400">Register</Link></li>
                            <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
                        </ul>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <form>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-4"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
