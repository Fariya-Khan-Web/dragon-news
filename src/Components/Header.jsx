import React from 'react';
import logo from '../assets/img/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center flex flex-col gap-2 justify-center items-center my-4'>
            <img className='w-[400px]' src={logo} alt='Loading'/>
            <p className='text-xl text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-gray-500'>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;