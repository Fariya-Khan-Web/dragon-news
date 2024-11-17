import React, { useContext } from 'react';
import { AuthContext } from '../Components/provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading ,setLoading} = useContext(AuthContext)

    if(loading){
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <span className="loading loading-spinner loading-lg mx-auto"></span>
            </div>
        )
    }
    if(user){
       setLoading(false)
       return children
    }
    return (
        <Navigate to='/auth'></Navigate>
    );
};

export default PrivateRoute;