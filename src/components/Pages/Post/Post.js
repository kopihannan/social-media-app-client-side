import React from 'react';
import photo from '../../../assets/images/image (1).png'
import video from '../../../assets/images/videos.png'
import event from '../../../assets/images/event-time.png'
import emoji from '../../../assets/images/emoji (1).png'
import dots from '../../../assets/images/dots.png'
import PostModal from '../PostModal/PostModal';

const Post = () => {
    return (
        <div className='bg-slate-50 rounded shadow px-5 py-8'>
            <PostModal></PostModal>
            <div className="flex items-center">
                <div className='mr-2'>
                    <img className='w-11 rounded-full' src="https://placeimg.com/192/192/people" alt='' />
                </div>
                <label htmlFor="my-modal-3"  className='w-full'>
                    <label htmlFor="my-modal-3" id="message" className="block py-3 w-full text-sm textarea font-medium text-gray-600">Share your mind...</label>

                </label>
                
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='lg:flex md:flex '>
                    <label className="flex cursor-pointer rounded-md mr-3 bg-slate-100 items-center px-3 py-1 shadow-sm">
                        <img className='w-5 mr-2' src={photo} alt="" />
                        <span className="text-[12px] font-semibold text-gray-600">Photo</span>
                        <input type='file' className="hidden" />
                    </label>
                    <label className="shadow-sm flex cursor-pointer rounded-md mr-3 bg-slate-100 items-center px-3 py-1">
                        <img className='w-5 mr-2' src={video} alt="" />
                        <span className="text-[12px] font-semibold text-gray-600">Video</span>
                        <input type='file' className="hidden" />
                    </label>
                    <label className="shadow-sm flex cursor-pointer rounded-md mr-3 bg-slate-100 items-center  px-3 py-1">
                        <img className='w-5 mr-2' src={event} alt="" />
                        <span className="text-[12px] font-semibold text-gray-600">Event</span>
                        <input type='file' className="hidden" />
                    </label>
                    <label className="shadow-sm flex cursor-pointer rounded-md bg-slate-100 items-center  px-3 py-1">
                        <img className='w-5 mr-2' src={emoji} alt="" />
                        <span className="text-[12px] font-semibold text-gray-600">Feeling/Activity</span>
                        <input type='file' className="hidden" />
                    </label>
                    <div>
                    </div>
                </div>
                <div className="shadow-sm cursor-pointer rounded-md bg-slate-100 items-center ">
                    <div className='flex justify-center w-full items-center text-center  px-3 py-1'>
                        <img className='w-5 ' src={dots} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;