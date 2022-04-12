// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8iJHgGLEL0ooib5IWdAjZgDnN3Bo4wZk",
  authDomain: "fir-router-integration-78683.firebaseapp.com",
  projectId: "fir-router-integration-78683",
  storageBucket: "fir-router-integration-78683.appspot.com",
  messagingSenderId: "1082134055371",
  appId: "1:1082134055371:web:18083fbd719af8248f8e4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
