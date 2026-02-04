// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGVzzWJlnVSN4uIg4EqItKCp3et66kAq4",
  authDomain: "netflixgpt-13c94.firebaseapp.com",
  projectId: "netflixgpt-13c94",
  storageBucket: "netflixgpt-13c94.firebasestorage.app",
  messagingSenderId: "323708860809",
  appId: "1:323708860809:web:7a409f40083a6846ccc958",
  measurementId: "G-BE88M73XD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();