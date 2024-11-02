import React, { useContext } from "react"
import "./Css/ShopCategory.css" 
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from "../Components/Assets/Frontend_Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) =>{
  const {all_product} = useContext(ShopContext);
  return(
      <div className="shop_category">
        <img className="shopcategory_banner" src={props.banner} alt="" />
        <div className="shopcategory_indexShot">
          <p>
            <span> Showing 1-12  </span> out of 36 products
          </p>
          <div className="shopcategory_sort">
            sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
      <div className="shopcategory_products">
        {
          all_product.map((item,i)=>{
            // console.log("this is props:-",props , "this is item:-",item)
            if(props.category===item.category){

              console.log("Map Is Working ","this is props:-",props , "this is item:-",item)
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            }else{
              return null;
            }
          })}
      </div>
      <div className="shopcategory_loadmore">
        Explore More
      </div>
    </div>
  )
}
export default ShopCategory
