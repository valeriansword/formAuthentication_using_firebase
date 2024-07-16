// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArfpZIIUOxOedNtQPkfeZPSFwP1LUunlQ",
  authDomain: "learnfirebase-1eb09.firebaseapp.com",
  projectId: "learnfirebase-1eb09",
  storageBucket: "learnfirebase-1eb09.appspot.com",
  messagingSenderId: "1048429277452",
  appId: "1:1048429277452:web:347095273c3cbbaad25929",
  measurementId: "G-RHCSMJ45YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
// const analytics = getAnalytics(app);
export const db=getFirestore(app);
export  default  app;