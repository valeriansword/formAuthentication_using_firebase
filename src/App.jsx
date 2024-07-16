import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from "./Components/Form";
import "bootstrap/dist/css/bootstrap.min.css"
import Register from "./Components/Register";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Profile from './Components/Profile';
import {auth} from "./Config/firebase";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [user,setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    });
  });

  return<>
  <BrowserRouter>
  
  <Routes>
  
    <Route path="/formAuthentication_using_firebase" element={user?<Navigate to="/formAuthentication_using_firebase/profile" />:<Register />}></Route>
    <Route path="/formAuthentication_using_firebase/login" element={<Form />}></Route>
    <Route path="/formAuthentication_using_firebase/profile" element={<Profile />} ></Route>
  </Routes>
  <ToastContainer />
  </BrowserRouter>
    
  </>
}
export default App
