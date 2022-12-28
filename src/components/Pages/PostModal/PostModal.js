import React from 'react';
import photo from '../../../assets/images/image (1).png'
import video from '../../../assets/images/videos.png'
import event from '../../../assets/images/event-time.png'
import emoji from '../../../assets/images/emoji (1).png'
import imageUpload from '../../ImageHook/ImageHook';

const PostModal = ({refetch}) => {

    const handlePost = (e) => {
        e.preventDefault()
        const form = e.target;
        const postMessage = form.postMessage.value;
        const image = form.image.files[0];

        imageUpload(image).then(rss => {
            const image = rss.data.display_url;
            post(postMessage, image);
        })

    }
    
    const post = (postMessage, image) => {
        const post = { postMessage, image }
        fetch('http://localhost:5000/post', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.acknowledge) {
                refetch()
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handlePost} className="modal-box relative">
                    <div className=''>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-3">✕</label>
                        <h3 className="text-lg font-bold text-center pb-4">Create Post</h3>
                    </div>
                    <div className=' my-3'>
                        <label className='w-full'>
                            <textarea name='postMessage' id="message" rows="3" className="block p-2.5 w-full text-sm textarea textarea-bordered " placeholder="Share your mind..."></textarea>
                        </label>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <div className='lg:flex md:flex justify-center'>
                            <label className="flex cursor-pointer rounded-md mr-3 bg-slate-100 items-center px-3 py-1 shadow-sm">
                                <img className='w-5 mr-2' src={photo} alt="" />
                                <span className="text-[12px] font-semibold text-gray-600">Photo</span>
                                <input name='image' type='file' className="hidden" />
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
                    </div>
                    <button type='submit' className="modal-action w-full">
                        <label htmlFor="my-modal-3" className="btn w-full bg-purple-500 border-none hover:bg-purple-700">Post</label>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostModal;