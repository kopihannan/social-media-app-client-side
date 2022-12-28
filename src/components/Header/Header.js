import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/telechat.png'
import message from '../../assets/images/message.png'
import notification from '../../assets/images/notification.png'


const Header = () => {
    return (
        <div className='py-2 px-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <div className="w-12 mb-3 mx-auto mt-3">
                                <img className='w-11  rounded-lg' src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                            <div className='bg-slate-100 p-3 rounded-lg w-12 mx-auto mb-3'>
                                <img className='w-5' src={message} alt="" />
                            </div>
                            <div className='bg-slate-100 p-3 rounded-lg w-12 mx-auto mb-3'>
                                <img className='w-5 ' src={notification} alt="" />
                            </div>
                            <li className=' mx-auto mb-3'><Link to='/media'>Media</Link></li>
                            <li className=' mx-auto mb-3'><Link >About</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="mr-4"><img className='w-10' src={logo} alt="" /></Link>
                    <div className='lg:visible invisible'>
                        <input type="text" placeholder="Type here" className="input bg-slate-100 h-10 w-full max-w-xs" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        <li className=' mr-4'><Link to='/'>Home</Link></li>
                        <li className=' mr-4'><Link >About</Link></li>
                        <li className=' mr-4'><Link to='/media'>Media</Link></li>


                        <div className='bg-slate-100 p-3 rounded-lg w-12 mr-4'>
                            <img className='w-5' src={message} alt="" />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg w-12 mr-4'>
                            <img className='w-5 ' src={notification} alt="" />
                        </div>
                        <div className="w-12">
                            <img className='w-11  rounded-lg' src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;