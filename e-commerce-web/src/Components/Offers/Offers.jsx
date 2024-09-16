import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'

 const Offers = () => {
  return (
    <div className="offers">
      <div className="offers_left">
         <h2>Exclusive</h2>
         <h2>Offers For You</h2>
         <p>ONLY OF SOME TIME</p>
         <button>Check Now</button>
      </div>
      <div className="offers_right">
         <div>
            <img src={exclusive_image} alt="" />
         </div>
      </div>
    </div>
  )
}
export default Offers
