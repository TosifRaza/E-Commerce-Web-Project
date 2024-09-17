import React from "react"
import './NewCollection.css'
import Item from "../Item/Item"
import new_collections from "../Assets/Frontend_Assets/new_collections"
function NewCollection(props){
    return (
      <div className="NewCollection">
         <h2>New Collection</h2>
         <div className="new_CollectionProduct">
            {new_collections.map((item,i)=>{
               return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
         </div>

      </div>
    )
  }

export default NewCollection