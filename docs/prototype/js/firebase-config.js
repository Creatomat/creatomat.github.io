// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyWk5keT4FtLtFTSwvbjpqP8UKw3qw1f8",
  authDomain: "sheperdstrings.firebaseapp.com",
  projectId: "sheperdstrings",
  storageBucket: "sheperdstrings.firebasestorage.app",
  messagingSenderId: "826317327101",
  appId: "1:826317327101:web:240b533a1c644ab472cc94",
  measurementId: "G-6HW6MDYZ80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
