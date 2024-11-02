import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/Frontend_Assets/cart_cross_icon.png"
const CartItems = () => {
   const {getTotalCartItem,getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
   // console.log(cartItems)
  return (
    <div className='cartitems'>
      <div className="cartitem_format_main">
         <p>Products</p>
         <p>Title</p>
         <p>price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
      </div>
      <hr />
         {
          all_product.map((e )=>{
            // console.log(cartItems[e.id])
            if ( cartItems[e.id]>0) {

               return <div>
                     <div className="cartitems_format cartitem_format_main">
                        <img src={e.image} alt="" className='carticon_product_icon'/>
                        
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className='cartitems_quantity'>
                           { cartItems[e.id]}
                           {/* {console.log(cartItems[e.id])} */}
                        </button>

                        <p>${e.new_price*cartItems[e.id]}</p>

                        <img className='cartitems_remove_icons' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                     </div>
               <hr />
            </div>
               
            }
            return null;

          })}
          <div className="cartitems_down">
            <div className="cartitems_total">
               <h1>cart Totals</h1>
               <div>
                  <div className="cartitems_total_item">
                     <p>Subtotal</p>
                     <p>${getTotalCartAmount()}</p>
                  </div>

                  <hr />

                  <div className="cartitems_total_item">
                     <p>Shipping free</p>
                     <p>Free</p>
                  </div>

                   <hr />

                  <div className="cartitems_total_item">
                     <h3>Total</h3>
                     <h3>${getTotalCartAmount()}</h3>
                  </div>

               </div>
               <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems_promocode">
               <p>If You have a promo code ,Enter here</p>
               <div className="cartitem_promobox">
                  <input type="text" placeholder='promo code' />
                  <button>Submit</button>
               </div>
            </div>
          </div>
   
    </div>
  )
}

export default CartItems