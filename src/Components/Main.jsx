import React from 'react';
import LeftNav from './MainComponents/LeftNav';
import News from './MainComponents/News';
import RightPart from './MainComponents/RightPart';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto mt-6 md:grid gap-4 md:grid-cols-12'>
            <LeftNav/>
            <News/>
            <RightPart/>
        </div>
    );
};

export default Main;