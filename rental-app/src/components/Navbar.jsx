import React from 'react';
import logo from '../images/logo1.png'


function Navbar() {
  return (
    <nav>
        <a href="#" className='logo'>
            <img src={logo} alt="logo" />
        </a>
    </nav>
  )
}

export default Navbar;