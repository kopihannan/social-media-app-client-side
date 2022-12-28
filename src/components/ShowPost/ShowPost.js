import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Loading/Loading';
import PostModal from '../Pages/PostModal/PostModal';
import ShowPostCard from './ShowPostCard';

const ShowPost = () => {

    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/post');
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            {
                posts.map(post => <ShowPostCard post={post} key={post._id} refetch={refetch}></ShowPostCard>)
            }
            <PostModal refetch={refetch}></PostModal>
        </div>
    );
};

export default ShowPost;