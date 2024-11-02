// import React, { createContext, useState } from 'react'
// import all_product from "../Components/Assets/Frontend_Assets/all_product";
// // import CartItems from '../Components/CartItems/CartItems';

// export const ShopContext =createContext(null);


// const getDefaultCart = ()=>{
//    let cart = {};
//    for(let i=0; i<all_product.length+1;i++){
//       cart[i]=0;
//    }
//    return cart;
// }


// const ShopContextProvider=(props)=>{

//       const [cartItems,setCartItems]=useState(getDefaultCart());


      
//        const addToCart = (itemId)=>{
//          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
//          // console.log(cartItems.itemId);
//       }


      
//       const removeFromCart=(itemId)=>{
//          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
//       }

//       let totalAmount=0;
//       const getTotalCartAmount=()=>{
         
//          for (const item in cartItems){
//             if (cartItems[item]>0){
//                console.log(cartItems[item]);
//                let itemInfo=all_product.find((product)=>product.id===Number(item));
//                totalAmount  += itemInfo.new_price * cartItems[item];
//                console.log("This is Total Number of amount", totalAmount)
               
//             }
            
//             return totalAmount;
//          }
//       }

//       const contextValue = { getTotalCartAmount,all_product , cartItems , addToCart , removeFromCart};

   
//    return (
//       <ShopContext.Provider value={contextValue}>
//          {props.children}
//       </ShopContext.Provider>
//    )
// }
// export default ShopContextProvider;



import React, { createContext, useState } from 'react';
import all_product from "../Components/Assets/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(prev[itemId] - 1, 0), // Prevent negative counts
        }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0; // Move this inside the function to reset on each call

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        console.log("Total amount:", totalAmount);
        return totalAmount; // Move this outside the loop
    }


    const getTotalCartItem=()=>{
      let totalItem=0;
      for(const item in cartItems){
         if(cartItems[item] > 0){
            totalItem+=cartItems[item];
         }
      }
      return totalItem;
    }

    const contextValue = { getTotalCartItem,getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
