import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from './provider/AuthProvider';

const SocialLogin = () => {

    const { loginWithGoogle, setUser } = useContext(AuthContext)

    const handleGoogle = () => {
        setUser(null)
        loginWithGoogle()
            .then(result => { 
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => { console.log(error); })
    }

    const handleGithub = () => {
        setUser(null)

    }

    return (
        <div>
            <h2 className='font-bold text-xl'>Login With</h2>
            <button onClick={handleGoogle} className='btn w-full bg-white border border-black rounded-md p-2 my-2 '><FaGoogle className='text-xl' />Login with google</button>
            <button onClick={handleGithub} className='btn w-full bg-white border border-black rounded-md p-2 my-2'><FaGithub className='text-xl' />Login with github</button>
        </div>
    );
};

export default SocialLogin;