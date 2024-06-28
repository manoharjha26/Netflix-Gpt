// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5JCvzwPs7fgsJt-awBUTGB5-VaWz2ySc",
    authDomain: "netflixgpt-c14c8.firebaseapp.com",
    projectId: "netflixgpt-c14c8",
    storageBucket: "netflixgpt-c14c8.appspot.com",
    messagingSenderId: "1012518534985",
    appId: "1:1012518534985:web:e1baa1f02be0de65f62498",
    measurementId: "G-W2YWE2BBQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();