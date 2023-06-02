import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5bMt48GG5nn3oec6TKVM6W1LFFGHvn5w",
  authDomain: "echoswift-3e21c.firebaseapp.com",
  projectId: "echoswift-3e21c",
  storageBucket: "echoswift-3e21c.appspot.com",
  messagingSenderId: "60003020251",
  appId: "1:60003020251:web:28cecf0c2671023563cbfe",
  measurementId: "G-ZRFG694YXD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
