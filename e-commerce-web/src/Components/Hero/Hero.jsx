import React from "react"
import './Hero.css'
import handicon from '../Assets/Frontend_Assets/hand_icon.png'
import arrowicon from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'

const Hero=()=>{
   return (
     <div className="hero">
         <div className="hero_left">
            <h2>New Arrivels Only</h2>
            <div>
               <div className="hand_icon">
                  <p>New</p>
                  <img src={handicon} alt="" />
               </div>
               <p>Collection</p>
               <p>For Everyone</p>
            </div>
            <div className="hero_letest_button">
               <div>Letest Collevtion</div>
               <img src={arrowicon} alt="" />
            </div>
         </div>
         <div className="hero_right">
            { <img src={hero_image} alt="" /> 
            }

         </div>
     </div>
   )
}

export default Hero