import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/Admin_Assets/nav-logo.svg"
import navProfile from "../../assets/Admin_Assets/nav-profile.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo}alt="" className="nevlogo" />
      <img  src={navProfile} alt="" className='navprofile' />
    </div>
  )
}

export default Navbar