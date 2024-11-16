import React from 'react';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';

const Home = () => {
    return (
        <div className='font-poppins'>
            <Header/>
            <Latest/>
            <Navbar/>
            <Main/>
        </div>
    );
};

export default Home;