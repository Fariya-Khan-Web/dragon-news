import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {loginWithEmailPass , setUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email);

        loginWithEmailPass(email, password)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
            navigate('/')

        })
        .catch(error => {console.log(error);})
    }

    return (
        <div className='p-40'>
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl rounded-none mx-auto">
                <form onSubmit={handleSubmit} className="card-body">

                    <h1 className='text-3xl font-bold mx-auto my-4'>Login your account</h1>
                    <hr className='my-4' />


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input rounded-sm input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input rounded-sm input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-sm bg-[#403F3F]">Login</button>
                    </div>
                </form>
                <p className='text-center text-lg mt-[-20px] mb-8'>Don't have an account?<Link to='/auth/signin' className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;