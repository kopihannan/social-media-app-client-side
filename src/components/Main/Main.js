import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import Header from '../Header/Header';
import LoginHeader from '../Header/LoginHeader';
import Leftside from '../Leftside/Leftside';
import Rightside from '../Rightside/Rightside';


const Main = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {
                user? <div>
                <Header></Header>
                <div className='grid grid-cols-4 gap-8 bg-red-100 rounded-sm py-6'>
                    <Leftside></Leftside>
                    <div className='col-span-2'>
                        <Outlet></Outlet>
                    </div>
                    <Rightside></Rightside>
                </div>
            </div> : <div>
                <LoginHeader></LoginHeader>
                <Outlet></Outlet>
            </div>
            }
        </div>
    );
};

export default Main;