import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login.gif'
import google from '../../assets/images/google.png'
import github from '../../assets/images/github (1).png'
import facebook from '../../assets/images/facebook.png'

const Login = () => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <div className="hero min-h-screen">
                <div className="hero-content items-center flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Wellcome to our community</h1>
                        <p className="py-6 text-orange-900">let's get started</p>
                        <div className=''>
                            <img className='w-[350px]' src={login} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex justify-evenly pt-2'>
                                <span>Do you have no account?</span>
                                <Link to='/register' className=' text-[#8ee7fd] hover:text-[#11cfff]'>Register Now</Link>
                            </div>
                            <div className="divider">OR</div>
                            <div className='flex justify-center'>
                                <div className='hover:bg-slate-200 rounded-full p-3'>
                                    <img className='w-6 cursor-pointer' src={google} alt="" />
                                </div>
                                <div className='hover:bg-slate-200 rounded-full p-3'>
                                    <img className='w-6 cursor-pointer' src={github} alt="" />
                                </div>
                                <div className='hover:bg-slate-200 rounded-full p-3'>
                                    <img className='w-6 cursor-pointer' src={facebook} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;