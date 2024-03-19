// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb7pgdO0cxtNwttwjJwkhQCnWatGxlZfA",
  authDomain: "blog-management-a49e2.firebaseapp.com",
  projectId: "blog-management-a49e2",
  storageBucket: "blog-management-a49e2.appspot.com",
  messagingSenderId: "814678298704",
  appId: "1:814678298704:web:9a075246a72a9d7fc40155",
  measurementId: "G-2EY4E6ZW60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
