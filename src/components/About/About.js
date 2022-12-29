import React from 'react';
import AboutModal from './AboutModal';

const About = () => {
    // const {user}= useContext(AuthContext)
    return (
        <div className='flex justify-center pt-10 min-h-screen'>
            <div className='w-7/12 rounded'>
                <div className='flex justify-end mb-5'>
                <label htmlFor="my-modal-3" className="btn btn-sm mb-5">Edit</label>
                </div>
                <div className='mt-5'>
                    <h5 className='mb-3'>Name:</h5>
                    <h5 className='mb-3'>Email: </h5>
                </div>
                <div className=''>
                    <h5 className='mb-3'>Unversity: </h5>
                    <h5 className='mb-3'>Address: </h5>
                </div>
                <div className=''>
                    <h5 className='mb-3'>Phone: </h5>
                    <h5 className='mb-3'>Skills: </h5>
                </div>
            </div>
            <AboutModal></AboutModal>
        </div>
    );
};

export default About;