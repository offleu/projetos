import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDABxRv7TeJCvrJqJxpdK-WAvqElPb8Ex0",
  authDomain: "site-maria-julia.firebaseapp.com",
  projectId: "site-maria-julia",
  storageBucket: "site-maria-julia.appspot.com",
  messagingSenderId: "641579312371",
  appId: "1:641579312371:web:3e7abda6a092df4db58386",
  measurementId: "G-5WEYPJSCS3"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);