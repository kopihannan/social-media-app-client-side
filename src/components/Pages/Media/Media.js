import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import MediaCard from './MediaCard';

const Media = () => {

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
        <div>

            {
                posts.map(post => <MediaCard post={post} key={post._id} refetch={refetch}></MediaCard>)
            }

        </div>
    );
};

export default Media;