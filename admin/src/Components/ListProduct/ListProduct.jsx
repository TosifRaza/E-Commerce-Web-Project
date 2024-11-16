import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from  '../../assets/Admin_Assets/cross_icon.png'
const ListProduct = () => {

  const[allproducts,setAllProducts]=useState([]);

  const fetchInfo=async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((resp)=>resp.json())
    .then((data)=>{setAllProducts(data)});
  }


  useEffect(()=>{
    fetchInfo();
  },[])


  const remove_Product=async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='listproduct'>
      <h1>ALL Product List</h1>
      <div className="listproduct_format_main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct_allproduct">
        <hr />
        {allproducts.map((product,i)=>{
          return <>
          <div key={i} className="listproduct_format_main listproduct_format">
            <img src={product.image} alt="" className="listproduct_product_icon" />
            <p>{product.name}</p>
            <p> ${product.old_price} </p>
            <p> ${product.new_price} </p>
            <p>{product.category} </p>
            <img onClick={()=>{
              remove_Product(product.id)
            }} src={cross_icon} alt="" className="listproduct_remove_icon" />

          </div>
          <hr />
          </>
        })}

      </div>
    </div>
  )
}

export default ListProduct