import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyA_-ir7gVnBac5-bYLp26RfhKKL2dqnJII",
  authDomain: "managershirt-5a83b.firebaseapp.com",
  projectId: "managershirt-5a83b",
  storageBucket: "managershirt-5a83b.appspot.com",
  messagingSenderId: "1067465310611",
  appId: "1:1067465310611:web:5495275409e0fb4e0a6866",
  measurementId: "G-LJEPQM7P24"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app.name)