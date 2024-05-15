import React from 'react';
import './Navbar.css';
import logo from '../../assets/logonew.png';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className='navbar fixed top-0 w-full bg-blue-900 text-white px-10 py-2 z-50'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to={'/'}>
                    {/* Decrease logo size by adjusting the width */}
                    <img src={logo} alt="Logo" className='logo w-40' />
                </Link>
                <ul className="flex">
                    <li><Link to={'./home'} className="nav-link">Home</Link></li>
                    <li><Link to={'./events'} className="nav-link">Events</Link></li>
                    <li><Link to={'/donation'} className="nav-link">Donation</Link></li>
                    <li>About Us</li>
                    {
                        user ? <li><button className='btn' onClick={handleLogout}>Log out</button></li> : <li><Link to={'/login'}><button className='btn'>Log in</button></Link></li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
