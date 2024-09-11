import React from "react";
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
const Navbar=()=>{
   return (
      <div className="navbar" >
         <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shoper</p>
         </div>
         <ul className="nav-menu">
               <li>Shop <hr/> </li>
               <li>Man</li>
               <li>Woman</li>
               <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
               <button>login</button>
               <img src={cart_icon} alt="" />
            </div>
         </div>
   )
}
export default Navbar;
