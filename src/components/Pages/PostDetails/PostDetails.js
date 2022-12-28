import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const data = useLoaderData()
    const {postMessage, image} = data;
    return (
        <div>
            <div className='bg-slate-50 rounded shadow my-5 px-5 py-5'>
                <p className='pb-6'>{postMessage}</p>
                <div className='flex justify-center pb-5'>
                    <img className='w-11/12 rounded-md p-5' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PostDetails;