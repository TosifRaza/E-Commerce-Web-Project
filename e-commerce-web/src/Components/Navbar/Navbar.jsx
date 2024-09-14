import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from "react-router-dom"
const Navbar=()=>{
   const [value,setvalue]=useState("Shop")
   return (
      <div className="navbar" >
         <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shoper</p>
         </div>
         <ul className="nav-menu">
               <li onClick={()=>{setvalue("Shop")}}><Link  style={{textDecoration:'none'}}  to='/'  >Shop</Link>{value==="Shop"?<hr/>:<></>}</li> 
               <li onClick={()=>{setvalue("Man")}}><Link style={{textDecoration:'none'}} to='/Man'>Man</Link>{value==="Man"?<hr/>:<></>}</li> 
               <li onClick={()=>{setvalue("Woman")}}><Link style={{textDecoration:'none'}}  to='/Woman'  >Woman</Link>{value==="Woman"?<hr/>:<></>}</li> 
               <li onClick={()=>{setvalue("Kids")}}><Link  style={{textDecoration:'none'}}  to='/Kids'  >Kids</Link>{value==="Kids"?<hr/>:<></>}</li> 
            </ul>
            <div className="nav-login-cart">
               <Link><button>login</button></Link>
               <Link> <img src={cart_icon} alt="" /></Link>
               <Link><div className="nav-cart-count">0</div></Link>
            </div>
         </div>
   )
}
export default Navbar;
