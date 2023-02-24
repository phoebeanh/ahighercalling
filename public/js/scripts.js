/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnI9CAy1waYNwJB0q4WZeCWeu-MkcDkSk",
  authDomain: "ahighercallingpnw-22f5f.firebaseapp.com",
  projectId: "ahighercallingpnw-22f5f",
  storageBucket: "ahighercallingpnw-22f5f.appspot.com",
  messagingSenderId: "568582223992",
  appId: "1:568582223992:web:bca754c8843d90c76b958d",
  measurementId: "G-VLB7S56QK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);