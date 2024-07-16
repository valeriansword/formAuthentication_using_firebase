import React,{useEffect, useState} from 'react'
import {auth,db} from "../Config/firebase";
import {getDoc,doc} from "firebase/firestore";
function Profile() {
    const [userDetails,setUserDetails]=useState(null)
    const fetchUserData=async()=>{
        auth.onAuthStateChanged(async (user)=>{
            console.log(user);
            const docRef=doc(db,"Users",user.uid);
            const docSnap=await getDoc(docRef);
            if(docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            }else{
                console.log("user is not logged in");
            }
        })
    }
    useEffect(()=>{
        fetchUserData()
    },[]);
    const logOut=async ()=>{
        try{await auth.signOut();
        window.location.href="/formAuthentication_using_firebase"
        console.log("user loggout");
    }catch(err){
        console.log(err)
    }

}
  return (
    <>{
        userDetails ?
        
        (<div className='d-flex vh-100 justify-content-center align-items-center bg-light'>
        <div className='shadow w-25  border rounded p-3 '>
            <p className='h4 text-center'>Bonjour!</p>
            <div className="d-flex">
                <p className='text-primary h6'>Name:</p><p className='text-dark h6'>{userDetails.name}</p>
            </div>
            <div className="d-flex">
                <p className='text-primary h6'>Email:</p><p className='text-dark h6'>{userDetails.email}</p>
            </div>
            <button onClick={logOut} className='btn btn-primary w-100 rounded-0'>log out</button>
        </div>
      
    </div>):(<div className='d-flex vh-100 justify-content-center align-items-center bg-light'>
        <div className='shadow w-25 border rounded p-3 '>
            Loading...

        </div>
      
    </div>)
    }</>
    
  )
}

export default Profile
