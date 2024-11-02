import React, { useContext, useState,useRef} from "react";
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/Frontend_Assets/nav_dropdown.png"



const Navbar=()=>{
   const [value,setvalue]=useState("Shop")
   const {getTotalCartItem}=useContext(ShopContext);
   const menuRef = useRef();


const dropdown_toggle = (e)=>{
   menuRef.current.classList.toggle("nav-menu-visible");
   e.target.classList.toggle('open');
}

   return (
      <div className="navbar" >
         <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shoper</p>
         </div>
         <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
         <ul ref={menuRef} className="nav-menu">
               <li onClick={()=>{setvalue("Shop")}}><Link  style={{textDecoration:'none'}}  to='/'  >Shop</Link>{value==="Shop"?<hr/>:<></>}</li> 
               <li onClick={()=>{setvalue("Man")}}><Link style={{textDecoration:'none'}} to='/Man'>Man</Link>{value==="Man"?<hr/>:<></>}</li> 
               <li onClick={()=>{setvalue("Woman")}}><Link style={{textDecoration:'none'}}  to='/Woman'  >Woman</Link>{value==="Woman"?<hr/>:<></>}</li> 
               <li onClick={()=>{setvalue("Kids")}}><Link  style={{textDecoration:'none'}}  to='/Kids'  >Kids</Link>{value==="Kids"?<hr/>:<></>}</li> 
            </ul>
            <div className="nav-login-cart">
               <Link to='/login'><button >login</button></Link>
               <Link to={"/cart"} > <img src={cart_icon} alt="" /></Link>
               <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
         </div>
   )
}
export default Navbar;
