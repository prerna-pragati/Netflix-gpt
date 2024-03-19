// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4aFE8BHJ48l3XP0vusBRA-q18ehWkCHs",
  authDomain: "netflixgpt-74257.firebaseapp.com",
  projectId: "netflixgpt-74257",
  storageBucket: "netflixgpt-74257.appspot.com",
  messagingSenderId: "641554514347",
  appId: "1:641554514347:web:8038ea84e628c07aa912ee",
  measurementId: "G-092F1T2DHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
