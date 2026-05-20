import React, { useState } from 'react'
import '../../styles/header.css'
const Header = () => {
    const [open, setOpen] = useState(false);

  // Example logged-in user (later replace with API/auth context)
  const user = {
    name: "Sunita Bohara",
    role: "Admin"
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };  
    console.log("header loaded mbefk")
  return (
    <div className='header-content'>
      {/* User Section */}
              <div className="left"></div>

        <div className="right">

      <div className="user-menu right" onMouseEnter={}>

        <div className="user-icon" onClick={toggleDropdown}>
          <i className="fa-solid fa-user"></i>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="dropdown">

            <p><strong>{user.name}</strong></p>
            <p>{user.role}</p>

            <hr />

            <button className="logout-btn">
              Logout
            </button>

          </div>
        )}

      </div>
      </div>
    </div>
  )
}

export default Header

