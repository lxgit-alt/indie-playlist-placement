// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsGnMvEf7Bkf7_7WAz7Z6PJpfpPMUINUA",
  authDomain: "indie-playlist-placement.firebaseapp.com",
  projectId: "indie-playlist-placement",
  storageBucket: "indie-playlist-placement.firebasestorage.app",
  messagingSenderId: "210414308700",
  appId: "1:210414308700:web:b44d41cbb97cb7f5824599",
  measurementId: "G-Z1N5E7F707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// For debugging, log the app and auth objects:
console.log("Firebase app initialized:", app);
console.log("Firebase auth instance:", auth);

export { auth };
