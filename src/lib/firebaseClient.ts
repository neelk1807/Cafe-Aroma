import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAqnh71USBR3oK1YS6kkAfPWjOJ4FyAlCQ",
  authDomain: "chatapp-dc100.firebaseapp.com",
  databaseURL: "https://chatapp-dc100-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-dc100",
  storageBucket: "chatapp-dc100.firebasestorage.app",
  messagingSenderId: "508241498178",
  appId: "1:508241498178:web:5c4c6a3252615e3fab5ddb",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const rtdb = getDatabase(app);
