import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'
// import './Layout.css'
import '../../styles/index.css'

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => setIsOpen((prev) => !prev)
    console.log("layout is here loaded hello")
    return (
        <div className="app-container">

            <Sidebar />
            {/* <div className="main-content"></div> */}
            <Header />


            <div className="main-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
