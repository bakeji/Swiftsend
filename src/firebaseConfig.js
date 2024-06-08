// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const apiKey= import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "swiftsend-2efeb.firebaseapp.com",
  projectId: "swiftsend-2efeb",
  storageBucket: "swiftsend-2efeb.appspot.com",
  messagingSenderId: "138989095318",
  appId: "1:138989095318:web:50fcdce47d517ca53af5b7",
  measurementId: "G-LERSKFDH59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);