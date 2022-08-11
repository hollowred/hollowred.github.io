// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG_tXHDMkTDmRotg7HeDrxRqhgDFBnoQE",
  authDomain: "salemportfolio-dashboard.firebaseapp.com",
  projectId: "salemportfolio-dashboard",
  storageBucket: "salemportfolio-dashboard.appspot.com",
  messagingSenderId: "613470984296",
  appId: "1:613470984296:web:f7b27a65196f27c3a083dd",
  measurementId: "G-JEQKN2F760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);