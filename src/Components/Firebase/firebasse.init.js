// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWjCM-wIRkdNefK8dVC9zXikWBags_rsU",
  authDomain: "dragon-news-3a17b.firebaseapp.com",
  projectId: "dragon-news-3a17b",
  storageBucket: "dragon-news-3a17b.firebasestorage.app",
  messagingSenderId: "158931863415",
  appId: "1:158931863415:web:63c0e25e3618d90a9c0372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

export default app;