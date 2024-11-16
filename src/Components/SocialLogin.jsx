import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold text-xl'>Login With</h2>
            <button className='btn w-full bg-white border border-black rounded-md p-2 my-2 '><FaGoogle className='text-xl' />Login with google</button>
            <button className='btn w-full bg-white border border-black rounded-md p-2 my-2'><FaGithub className='text-xl' />Login with github</button>
        </div>
    );
};

export default SocialLogin;