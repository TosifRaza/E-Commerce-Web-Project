import React, { useState } from 'react'
import "./AddProduct.css"
import upload_area from "../../assets/Admin_Assets/upload_area.svg"
const AddProduct = () => {

      const[image,setImage]= useState(false);
      const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
      })

      const imageHandler=(e)=>{
                        setImage(e.target.files[0]);
      }

      const changeHandler =(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
      }

      const Add_Product=async()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;

        let formData=new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
          method:'POST',
          headers:{
            Accept:'application/json',

          },
          body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if (responseData.success) {
          product.image=responseData.image_url;
          console.log(product)
          await fetch('http://localhost:4000/addproduct',{
            method:'POST',
            headers:{
              Accept:'application/json',
              "Content-Type":'application/json'

            },
            body:JSON.stringify(product),
          }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("Product Added"):alert("failed")
          })
        }
      }


      // const Add_Product = async () => {
      //   if (!productDetails.name || !productDetails.old_price || !productDetails.new_price || !image) {
      //     alert("Please fill all the details and upload an image.");
      //     return;
      //   }
    
      //   try {
      //     let formData = new FormData();
      //     formData.append("productImage", image); // Assuming "productImage" is the key for the file on the backend
    
      //     // Upload image
      //     let response = await fetch('http://localhost:4000/upload', {
      //       method: 'POST',
      //       headers: {
      //         Accept: 'application/json',
      //       },
      //       body: formData,
      //     });
    
      //     if (!response.ok) {
      //       throw new Error('Image upload failed');
      //     }
    
      //     let responseData = await response.json();
    
      //     if (responseData.success) {
      //       const uploadedImageUrl = responseData.image_url;
            
      //       // Add the image URL to the product details
      //       const newProduct = {
      //         ...productDetails,
      //         image: uploadedImageUrl,
      //       };
    
      //       // Here you can proceed to save the product to the database or display a success message
      //       console.log(newProduct);
      //       alert("Product added successfully!");
      //     } else {
      //       alert("Image upload failed. Please try again.");
      //     }
      //   } catch (error) {
      //     console.error("Error during product upload:", error);
      //     alert("Something went wrong. Please try again.");
      //   }
      // };

  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here'/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>

        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" value={productDetails.category} onChange={changeHandler} className='add-product-selector' id="">
          <option value="women">Women</option>
          <option value="man">Man</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img' />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={()=>{Add_Product( )}} className='addproduct-btn'>BTN</button>
    </div>
  )
}

export default AddProduct