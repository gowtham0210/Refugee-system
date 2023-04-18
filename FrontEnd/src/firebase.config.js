// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoVT-g99podD1qqwNc9VwxB3IUQ1UvX-8",
  authDomain: "refugee-system-cac57.firebaseapp.com",
  projectId: "refugee-system-cac57",
  storageBucket: "refugee-system-cac57.appspot.com",
  messagingSenderId: "586172016058",
  appId: "1:586172016058:web:f12a6eb521c63b231ca983",
  measurementId: "G-Z91EQLS2BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
