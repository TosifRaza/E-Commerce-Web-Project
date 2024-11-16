import React, { useEffect, useState } from "react"
import './Popular.css'
// import data_product from "../Assets/Frontend_Assets/data"
import Item from "../Item/Item"
const Popular=()=>{
   const [popular_products,setPopular_Products]=useState([]);
   useEffect(()=>{
      fetch('http://localhost:4000/popularinwomen')
      .then((res)=>res.json())
      .then((data)=>setPopular_Products(data));
   },[])
   return(
      <div className="popular">
         <h1>POPULAR IN WOMAN</h1>
         <hr />
         <div className="popular_item">
            { popular_products.map((item,i)=>{
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
               })

            }
         </div>
      </div>
   )
}
export default Popular