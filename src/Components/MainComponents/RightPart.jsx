import React from 'react';
import SocialLogin from '../SocialLogin';
import Socials from '../Socials';

const RightPart = () => {
    return (
        <div className='col-span-3'>
            <SocialLogin/>
            <Socials/>
        </div>
    );
};

export default RightPart;