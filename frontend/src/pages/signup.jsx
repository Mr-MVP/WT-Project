import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import srcimg from "../assets/orphans2.jpg";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { signup, isLoading, error } = useSignup();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(username, email, password);
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    const redirectToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="bg-white flex justify-center items-center h-screen">
            <div className="w-full lg:w-1/2 p-10">
                <h1 className="text-3xl font-semibold mb-10 text-center">Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mb-4">Signup</button>
                </form>
                {error && <p className='text-red-600 text-center mb-4'>{error}</p>}
                <p className="text-center">Already have an account? <button onClick={redirectToLogin} className="text-blue-500 hover:underline">Login</button></p>
            </div>
            <div className='w-1/2 h-screen hidden lg:block'>
                <img src={srcimg} alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
        </div>
    );
};

export default Signup;
