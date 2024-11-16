import React, { useEffect, useState } from "react"
import './NewCollection.css'
import Item from "../Item/Item"
// import new_collections from "../Assets/Frontend_Assets/new_collections"
function NewCollection(){
   const [new_collections,setNew_collection]=useState([]);

   useEffect(()=>{
      fetch('http://localhost:4000/newcollections')
      .then((res)=>res.json())
      .then((data)=>setNew_collection(data));
   },[])

   return(
      <div className="new_collections">
         <h1>New Collection </h1>
         <hr />
         <div className="collections">
            { new_collections.map((item,i)=>{
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
               })

            }
         </div>
      </div>
   )
  }

export default NewCollection