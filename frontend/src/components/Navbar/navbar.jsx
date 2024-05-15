import React from 'react'
import './Navbar.css'
import logo from '../../assets/logonew.png'
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import Headroom from 'react-headroom';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className='container'>
            <Link to={'/'}>
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <ul>
                <li><Link to={'./home'}>Home</Link></li>
                <li><Link to={'./events'}>Events</Link></li>
                <li><Link to={'/donation'}>Donation</Link></li>
                <li>About Us</li>
                {
                    user ? <li><button className='btn' onClick={handleLogout}>Log out</button></li> : <li><Link to={'/login'}><button className='btn'>Log in</button></Link></li>
                }
            </ul>
        </nav>
    )
}

export default Navbar