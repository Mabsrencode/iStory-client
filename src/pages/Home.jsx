import React from 'react'
import "../styles/home.css"
import Posts from '../components/Posts/Posts'
const Home = ({ currentId, setCurrentId }) => {
    return (
        <main>
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
        </main>
    )
}

export default Home