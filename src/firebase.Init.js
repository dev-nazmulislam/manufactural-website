// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2TJSpLSKa2mlA6ofx86ZWzFr1khC3gxc",
  authDomain: "nr-computers.firebaseapp.com",
  projectId: "nr-computers",
  storageBucket: "nr-computers.appspot.com",
  messagingSenderId: "474623307784",
  appId: "1:474623307784:web:9dfb7f1ff953e7f7f1e1bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
