import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import srcimg from "../assets/orphans.jpg";

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { login, isLoading, error } = useLogin();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);

        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    const redirectToSignup = () => {
        navigate('/signup');
    };

    return (
        <div className='bg-white flex justify-center items-center h-screen'>
            <div className='w-1/2 h-screen hidden lg:block'>
                <img src={srcimg} alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
            <div className='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2'>
                <h1 className="text-3xl font-semibold mb-10 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mb-4">Login</button>
                </form>
                {error && <p>{error}</p>}
                <p>Already have an account? <button onClick={redirectToSignup} className="text-blue-500 hover:underline">Signup</button></p>
            </div>
        </div>
    );
};

export default Login;
