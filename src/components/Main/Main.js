import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Leftside from '../Leftside/Leftside';
import Rightside from '../Rightside/Rightside';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4 gap-8 bg-red-100 rounded-sm py-6'>
                <Leftside></Leftside>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
                <Rightside></Rightside>
            </div>
        </div>
    );
};

export default Main;