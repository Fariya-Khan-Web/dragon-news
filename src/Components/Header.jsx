import React from 'react';
import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt='Loading'/>
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;