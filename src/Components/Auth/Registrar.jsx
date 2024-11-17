import React from 'react';
import { Link } from 'react-router-dom';

const Registrar = () => {
    return (
        <div className='p-20'>
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl rounded-none mx-auto">
                <form className="card-body">
                    <h1 className='text-3xl font-bold mx-auto my-4'>Register your account</h1>
                    <hr className='my-4' />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input rounded-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URl</span>
                        </label>
                        <input type="text" placeholder="Enter your photo" className="input rounded-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input rounded-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input rounded-sm input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label justify-start cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <span className="label-text ml-2">Accept Term & Conditions</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-sm bg-[#403F3F]">Login</button>
                    </div>
                </form>
                <p className='text-center text-lg mt-[-20px] mb-8'>Already have an account? <Link to='/auth' className='text-red-500'>Login</Link></p>
            </div>
        </div>
    );
};

export default Registrar;