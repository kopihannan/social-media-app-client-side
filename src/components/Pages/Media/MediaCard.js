import React from 'react';
import like from '../../../assets/images/like.png'
import commentlogo from '../../../assets/images/comment.png'
import send from '../../../assets/images/send.png'
import { Link } from 'react-router-dom';

const MediaCard = ({ post, refetch }) => {
    const { postMessage, image, _id, likes , comment} = post;


    const handleLikeClick = () => {

        let num = parseFloat(likes + 1);

        const allLikes = parseInt(num);
        console.log(allLikes);

        const like = {
            likes: parseInt(allLikes)
        }


        fetch(`http://localhost:5000/post/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(like)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                }
                else {
                    console.log("failed");
                }

            })

    };

    const handleComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        form.reset()

        const comments = {
            comment,
        }

        fetch(`http://localhost:5000/posts/${_id}`, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.acknowledge) {
                refetch()
            }
        })

    };





    return (
        <div className='bg-slate-50 rounded shadow my-5 px-5 py-5'>
            <p className='pb-6'>{postMessage}</p>
            <div className='flex justify-center pb-5'>
                <img className='w-11/12 rounded-md p-5' src={image} alt="" />
            </div>
            <div>
                <span className='py-2 font-semibold text-sm'>{likes} likes</span>
            </div>
            <hr />
            <div className='flex justify-around py-2'>
                <button onClick={handleLikeClick} className=''>
                    <img className='w-5 hover:bg-slate-200 cursor-pointer rounded' src={like} alt="" />
                </button>

                <img className=' hover:bg-slate-200 cursor-pointer rounded' src={commentlogo} alt="" />


                <Link to={`/details/${_id}`} className='bg-purple-500 text-white font-medium px-3 py-1 hover:bg-purple-600 rounded-md'>Details</Link>
            </div>
            <hr />
            <div className='flex justify-center items-center py-3'>
                <form onSubmit={handleComment} className='flex'>
                    <input name='comment' type="text" placeholder="write a comment" className="input w-full max-w-xs" />
                    <button type='submit' className=''>
                        <img className='hover:bg-slate-200 px-3 py-1 rounded-md w-16' src={send} alt="" />
                    </button>
                </form>
            </div>
            <hr />
            <dir>
                {
                    comment ? <p className='font-medium text-sm bg-slate-200 rounded-md w-full p-3'>{comment}</p> : ""
                }
            </dir>
        </div>
    );
};


export default MediaCard;