import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-9c9a0.firebaseapp.com",
  projectId: "loginonecart-9c9a0",
  storageBucket: "loginonecart-9c9a0.firebasestorage.app",
  messagingSenderId: "16271881220",
  appId: "1:16271881220:web:66544c351dcbf36e427151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}