import React, { useState } from 'react'
import '../../styles/sidebar.css'
import { NavLink } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  console.log("Sidebar loaded mbefk")
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  const location = useLocation();

  const navItems = [
    { href: '/', icon: 'fa-solid fa-house', label: 'Home' },
    { href: '/dashboard', icon: 'fa-solid fa-user', label: 'Dashboard' },
    { href: '/profile', icon: 'fa-solid fa-gear', label: 'Profile' },
    { href: '/about-us', icon: 'fa-solid fa-image', label: 'About Us' },
    { href: '#', icon: 'fa-solid fa-envelope', label: 'Contact' },
  ]
  return (
    <><button className="menu-btn" id="menuBtn" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
    <div className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
      
      <h2>Dashboard</h2>
      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href}>
              <i className={item.icon}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

       
    </div>
    </>
  )
}

export default Sidebar
