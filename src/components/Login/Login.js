import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.gif'
import google from '../../assets/images/google.png'
import github from '../../assets/images/github (1).png'
import facebook from '../../assets/images/facebook.png'
import { AuthContext } from '../../Authentication/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast'

const Login = () => {

    const { loginForm, googleProvider, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const provider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        loginForm(email, password)
            .then((result) => {

                if (result.user) {
                    navigate(from, { replace: true });
                    setLoading(false);
                }
                toast.success("Login Successfull")
            })
            .catch((error) => {
                toast.error('failed login!')
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogle = () => {
        googleProvider(provider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success("Login Successfull")
                console.log(user);
            })
            .catch(error => {
                toast.error('failed login!')
            })
    }

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
                            <form action="" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className='flex justify-evenly pt-2'>
                                <span>Do you have no account?</span>
                                <Link to='/register' className=' text-[#8ee7fd] hover:text-[#11cfff]'>Register Now</Link>
                            </div>
                            <div className="divider">OR</div>
                            <div className='flex justify-center'>
                                <div onClick={handleGoogle} className='hover:bg-slate-200 rounded-full p-3'>
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