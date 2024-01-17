import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SideBar from '../components/Sidebar/SideBar'
const Layout = ({ currentId, setCurrentId }) => {
    return (
        <>
            <Header />
            <SideBar currentId={currentId} setCurrentId={setCurrentId} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout