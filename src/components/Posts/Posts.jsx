import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts.posts);
    const isLoading = useSelector((state) => state.posts.isLoading);

    return (
        <section className='mx-auto xl:ml-[30%] mt-[1%]'>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {posts.length === 0 ? (
                        <div>No posts available.</div>
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

