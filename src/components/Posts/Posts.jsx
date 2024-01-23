import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import PostSkeleton from './Post/PostSkeleton';
import NoPostAvail from './NoPostAvail';
const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts.posts);
    const isLoading = useSelector((state) => state.posts.isLoading);

    return (
        <section className='mx-auto xl:ml-[30%] mt-[1%]'>
            {isLoading ? (
                <PostSkeleton />
            ) : (
                <>
                    {posts.length === 0 ? (
                        <section className='mx-2'>
                            <NoPostAvail />
                        </section>
                    ) : (
                        <ul className='flex gap-6 flex-wrap justify-center items-center'>
                            {posts.map((post) => (
                                <li key={post._id}>
                                    <Post setCurrentId={setCurrentId} post={post} />
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </section>
    );
};

export default Posts;

