import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import {auth,db} from "../Config/firebase.js";
import {setDoc,doc} from "firebase/firestore";

function SignInUsingPopup() {
    const SignInPopup=()=>{
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider).
        then(async (result)=>{
            console.log(result);
            const user=result.user;
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                })
            }

        }).catch(err=>{console.log(err.message)})
    }
  return (
    <div>
      <p className='text-center'>--or continue with Google---</p>
      <div onClick={SignInPopup} className=' d-flex  justify-content-center  ' style={{cursor:"pointer"}}>
        <FcGoogle size="30" className='bg-white border ' />
        <p className='border pt-1 bg-primary text-white'>Sign in with Google</p>
      </div>
    </div>
  )
}

export default SignInUsingPopup
