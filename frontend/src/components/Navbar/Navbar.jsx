import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Donation</li>
            <li>About Us</li>
            <li><button className='btn'>Log in</button></li>
        </ul>
    </nav>
  )
}

export default Navbar