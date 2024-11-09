// Do not Store Config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY2LdEUNXmUsfU69ibYq1zlhNr_b1JnXU",
  authDomain: "simple-firebase-explore.firebaseapp.com",
  projectId: "simple-firebase-explore",
  storageBucket: "simple-firebase-explore.firebasestorage.app",
  messagingSenderId: "745107452896",
  appId: "1:745107452896:web:a46e2b9b5482c7b895b185",
  measurementId: "G-8NWYG73DCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;