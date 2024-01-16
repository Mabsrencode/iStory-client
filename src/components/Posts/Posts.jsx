import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return (
        <section className='mx-auto xl:ml-[30%] mt-[1%]'>
            {!posts.length ? <div>no post</div> : <>
                <div>
                    <ul className='flex gap-6 flex-wrap justify-center items-center'>
                        {posts.map((post) => (
                            <li key={post._id}>
                                <Post post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </>}
        </section>
    )
}

export default Posts