import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {Link } from "react-router-dom"
import {auth,db} from "../Config/firebase";
import {setDoc,doc} from "firebase/firestore";
import { toast } from 'react-toastify';
import SignInUsingPopup from './SignInUsingPopup';
function Register() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            const user=auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    name:name,
                    email:user.email,
                    photo:""
                })
            }
            console.log("user registered succesfully");
            toast.success("User registered succesfully",{position:"top-center"});
        }catch (err){
            console.log(err.message);
            toast.error(err.message,{position:"bottom-center"});


        }

    }

  return (
    
    <div className='d-flex  vh-100 bg-light justify-content-center align-items-center'>
      
      <div className='p-3 shadow-lg w-25   border rounded' >
      <h3>Register</h3>
      <div className='form-floating '>
         
         <input  type="text" id="floatingInput"  className='form-control' placeholder="Enter your name here" onChange={(e)=>{setName(e.target.value)}}/><br/>
         <label for="floatingInput">UserName</label>
      </div>
      <div className='form-floating '>
         
           <input  type="email" id="floatingInput"  className='form-control' placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
           <label for="floatingInput">Email address</label>
        </div>
         <div className='form-floating mb-3'>
            
            <input type="password" id="formPassword" placeholder='password' className='form-control' onChange={(e)=>{setPassword(e.target.value)}}/>
            <label for="formPassword" placeholderPassword>password</label>
        
        </div>
        <button onClick={handleSubmit} className='btn btn-primary w-100 rounded-0'>Sign up</button>
        <p>already have an account?<Link to="/formAuthentication_using_firebase/login">Login</Link></p>
          <SignInUsingPopup />
      </div>
       
     
    </div>

  )
}

export default Register
