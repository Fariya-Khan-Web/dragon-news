import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='w-11/12 mx-auto text-xl bg-gray-200 p-2 flex gap-2 my-6'>
            <div className='bg-[#D72050] text-white p-2'>Latest</div>
            <div className='p-2'>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta facere accusamus enim nobis nulla ullam, fugit dolorum sed excepturi repudiandae voluptates rem maxime corrupti voluptatibus obcaecati, alias autem, ex nihil.</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default Latest;