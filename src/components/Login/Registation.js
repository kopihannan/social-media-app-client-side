import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.gif'
import google from '../../assets/images/google.png'
import github from '../../assets/images/github (1).png'
import facebook from '../../assets/images/facebook.png'
import photo from '../../assets/images/image (1).png'
import { AuthContext } from '../../Authentication/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import imageUpload from '../ImageHook/ImageHook';


const Registation = () => {
    const { registerForm, updateProfileUser, googleProvider, user, setLoading  } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.files[0];
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        imageUpload(photoURL).then(rss => {
            const photoURLS = rss.data.display_url;


            registerForm(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    updateProfileUser(name, photoURLS)
                        .then(rel => rel.json())
                        .then(data => {
                            navigate('/')
                            toast.success('Successfully Create Account');
                            if (user) {
                                <Navigate to="/" replace={true} />
                                navigate('/')
                            }
                            else {

                            }
                        })
                })
                .catch(error => {
                    console.error(error)
                    toast.error(error.message)
                })
                .finally(() => {
                    setLoading(false)
                })

        })



    }

    const handleProviderGoogle = () => {
        googleProvider(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("successfull create an accout");
                navigate('/')
            }).catch((error) => {
                console.error(error)
            });
    }


    return (
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            {
                user && (
                    <Navigate to="/" replace={true} />
                )
            }
            <div className="hero min-h-screen ">
                <div className="hero-content items-center flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Wellcome to our community</h1>
                        <p className="py-6 text-orange-900">let's get started</p>
                        <img className='w-[350px]' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="card-body">
                            <form onSubmit={handleRegister} action="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Your name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Upload</span>
                                    </label>
                                    <label className="flex cursor-pointer rounded-md  bg-slate-100 items-center px-3 py-3 shadow-sm">
                                        <img className='w-5 mr-2' src={photo} alt="" />
                                        <span className="text-[12px] font-semibold text-gray-600">Photo</span>
                                        <input name='photoURL' type='file' className="hidden" />
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <div className='flex justify-evenly pt-2'>
                                <span>Have an account?</span>
                                <Link to='/login' className=' text-[#8ee7fd] hover:text-[#11cfff]'>Login</Link>
                            </div>
                            <div className="divider">OR</div>
                            <div className='flex justify-center'>
                                <div onClick={handleProviderGoogle} className='hover:bg-slate-200 rounded-full p-3'>
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

export default Registation;