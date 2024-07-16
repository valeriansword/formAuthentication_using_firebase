import React, { useState } from 'react'
import "./Form.css";
import {auth} from "../Config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {Link } from "react-router-dom";
import {toast} from "react-toastify";
function Form() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const signIn=async (e)=>{
      e.preventDefault();
       try{
        await signInWithEmailAndPassword(auth,email,password);
        console.log("user Loggin successfully");
        toast.success("User logged in succesfully",{position:"top-center"});
        window.location.href="/formAuthentication_using_firebase/profile";
        
       } 
       catch (err){
        console.log(err)
        toast.error(err.message,{position:"bottom-center"});
       }
       
    }
  return (
    <div className='d-flex  vh-100 bg-light justify-content-center align-items-center'>
      
      <div className='p-3 shadow-lg w-25   border rounded'>
      <h3>Login</h3>
      <div className='form-floating '>
         
           <input  type="email" id="floatingInput"  className='form-control' placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
           <label for="floatingInput">Email address</label>
        </div>
         <div className='form-floating mb-3'>
            
            <input type="password" id="floatingPassword" placeholder='password' className='form-control' onChange={(e)=>{setPassword(e.target.value)}}/>
            <label for="floatingPassword" placeholderPassword>password</label>
        
        </div>
        <button  onClick={signIn}className='btn btn-primary w-100'>Login</button>
        <p>don't have an account?<Link to="/formAuthentication_using_firebase/">Signup</Link></p>

      </div>
       
     
    </div>
  )
}

export default Form
