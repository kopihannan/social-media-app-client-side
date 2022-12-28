import React from 'react';
import like from '../../assets/images/like.png'
import comment from '../../assets/images/comment.png'

const ShowPostCard = ({ post, refetch }) => {
    const { postMessage, image, _id, likes } = post;


    const handleLikeClick = () => {

      let num =  parseFloat(likes + 1);
        
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
                <button  onClick={handleLikeClick} className='cursor-pointer rounded py-1 px-10 hover:bg-slate-200'>
                    <img src={like} alt="" />
                </button>

                <img className='cursor-pointer rounded py-1 px-10 hover:bg-slate-200' src={comment} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default ShowPostCard;