import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from "./Components/Form";
import "bootstrap/dist/css/bootstrap.min.css"
import Register from "./Components/Register";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Profile from './Components/Profile';
import {auth} from "./Config/firebase";
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
    <Route path="/" element={user?<Navigate to="/profile" />:<Register />}></Route>
    <Route path="/login" element={<Form />}></Route>
    <Route path="/profile" element={<Profile />} ></Route>
  </Routes>
  </BrowserRouter>
    
  </>
}
export default App
