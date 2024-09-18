import React from "react"
import './NewCollection.css'
import Item from "../Item/Item"
import new_collections from "../Assets/Frontend_Assets/new_collections"
function NewCollection(){
   return(
      <div className="new_collections">
         <h1>POPULAR IN WOMAN</h1>
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