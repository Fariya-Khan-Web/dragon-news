import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div className='bg-slate-100 min-h-screen' >
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Auth;