import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
const Navbar=()=>{
   const [value,setvalue]=useState("Shop")
   return (
      <div className="navbar" >
         <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shoper</p>
         </div>
         <ul className="nav-menu">
               <li onClick={()=>{setvalue("Shop")}}>Shop{value==="Shop"?<hr/>:<></>}</li>
               <li onClick={()=>{setvalue("Man")}}>Man{value==="Man"?<hr/>:<></>}</li>
               <li onClick={()=>{setvalue("Woman")}}>Woman{value==="Woman"?<hr/>:<></>}</li>
               <li onClick={()=>{setvalue("Kids")}}>Kids{value==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <button>login</button>
               <img src={cart_icon} alt="" />
               <div className="nav-cart-count">0</div>
            </div>
         </div>
   )
}
export default Navbar;
