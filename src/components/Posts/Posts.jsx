import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return (
        <section>
            {!posts.length ? <div></div> : <></>}
        </section>
    )
}

export default Posts