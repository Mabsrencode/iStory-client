import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <section className='mx-auto xl:ml-[30%] mt-[1%]'>
            {!posts.length ? (
                <div>fetching data please wait</div>
            ) : (
                <div>
                    <ul className='flex gap-6 flex-wrap justify-center items-center'>
                        {posts.map((post) => (
                            <li key={post._id}>
                                <Post setCurrentId={setCurrentId} post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Posts;