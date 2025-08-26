import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAqnh71USBR3oK1YS6kkAfPWjOJ4FyAlCQ",
  authDomain: "chatapp-dc100.firebaseapp.com",
  databaseURL: "https://chatapp-dc100-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-dc100",
  storageBucket: "chatapp-dc100.firebasestorage.app",
  messagingSenderId: "508241498178",
  appId: "1:508241498178:web:5c4c6a3252615e3fab5ddb",
  measurementId: "G-5KKDNM8L0M"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
