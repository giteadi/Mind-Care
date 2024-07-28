import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlicer'; // Adjust the import based on your actual file path
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (!email || !password) {
            toast.error('All fields are required');
            return;
        }

        // Dispatch login action
        dispatch(loginUser({ email, password }))
            .unwrap()
            .then(() => {
                toast.success('Login successful');
                navigate('/'); // Redirect to homepage or desired page after login
            })
            .catch(() => {
                // Error handling is done in the thunk
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-green-500 mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
                    <p className="mt-4 text-center text-gray-600 text-sm">
                        Don't have an account? <a href="/register" className="text-green-500 hover:underline">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
