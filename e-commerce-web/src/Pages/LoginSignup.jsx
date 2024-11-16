import React, { useState } from "react"
import "./Css/LoginSignup.css"
function LoginSignup(){

   const[state,setState]=useState("Login");
   const [formData,setFormData]= useState({
      username:"",
      password:"",
      email:"",
   })


   const changeHandler =(e)=>{
      setFormData({
         ...formData,[e.target.name]:e.target.value
      })
   }
   const login = async()=>{
      console.log("Login Function Excucatedd",formData)

      let responseData;
      await fetch('http://localhost:4000/login',{
         method:'Post',
         headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
         },
         body: JSON.stringify(formData),
      }).then((res)=>res.json()).then ((data)=>responseData=data)
      if (responseData.success) {
         localStorage.setItem('auth-token',responseData.token);
         window.location.replace("/")
      }
      else{
         alert(responseData.errors)
      }



   }
   const signup = async()=>{
      console.log("SugnUp Function Excucatedd",formData)

      let responseData;
      await fetch('http://localhost:4000/signup',{
         method:'Post',
         headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
         },
         body: JSON.stringify(formData),
      }).then((res)=>res.json()).then ((data)=>responseData=data)
      if (responseData.success) {
         localStorage.setItem('auth-token',responseData.token);
         window.location.replace("/")
      }
      else{
         alert(responseData.errors)
      }

   }


   return(
      <div className="loginsignup">
         <div className="loginsignup_container">
            <h1>{state}</h1>
            <div className="loginsignup_fields">



               {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}



               <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address"/>



               <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
            </div>


            <button onClick={()=>{
               state==="Login"?login():signup()
            }}>Continue</button>


            {state==="Sign Up"?<p className="loginsignup_login">Already have an account ? <span onClick={()=>{
               setState("Login")
            }}>Login here</span></p>:<p className="loginsignup_login">Create an assount? <span onClick={()=>{
               setState("Sign Up")
            }}>Click here</span></p>}
            

            
            <div className="loginsignup_agree">
               <input type="checkbox" name="" id="" />
               <p>By continuing i agree to the terms of use & privacy policy</p>
            </div>
         </div>

      </div>
   )
}
export default LoginSignup
