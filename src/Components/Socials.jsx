import React from 'react';
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";

const Socials = () => {
    return (
        <div className='mt-6'>
            <h2 className='font-bold text-xl'>Find Us On</h2>
            <div className="*:bg-white join join-vertical w-full my-4 text-xl">
                <button className="btn join-item justify-start"><LiaFacebook className='text-2xl text-blue-700' />Facebook</button>
                <button className="btn join-item justify-start"><FaInstagram className='text-xl text-pink-600'/>Instagram</button>
                <button className="btn join-item justify-start"><TfiTwitter className='text-xl text-blue-800' />Twitter</button>
            </div>
        </div>
    );
};

export default Socials;