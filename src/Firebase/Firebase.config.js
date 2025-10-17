// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqW_haDXIQ0_fPoiQ0vKNhD3Lx5hutbPc",
  authDomain: "react-firebase-auth-e1df9.firebaseapp.com",
  projectId: "react-firebase-auth-e1df9",
  storageBucket: "react-firebase-auth-e1df9.firebasestorage.app",
  messagingSenderId: "317115843629",
  appId: "1:317115843629:web:2288c20c176d843fde64a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

