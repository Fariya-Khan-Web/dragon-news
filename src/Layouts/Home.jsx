import React from 'react';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftNav from '../Components/MainComponents/LeftNav';
import { Outlet } from 'react-router-dom';
import RightPart from '../Components/MainComponents/RightPart';

const Home = () => {
    return (
        <div className='font-poppins'>
            <Header />
            <Latest />
            <Navbar />
            <div className='w-11/12 mx-auto mt-6 md:grid gap-4 md:grid-cols-12'>
                <LeftNav />
                <div className='col-span-6'>
                    <Outlet />
                </div>
                <RightPart />
            </div>
        </div>
    );
};

export default Home;