import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SideBar from '../components/Sidebar/SideBar'
const Layout = () => {
    return (
        <>
            <Header />
            <SideBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout