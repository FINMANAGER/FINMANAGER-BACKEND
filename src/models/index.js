import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { firebaseConfig } from "../config/firebase.config.js";
const firebase_app = initializeApp(firebaseConfig);
export const firebase_db = getFirestore(firebase_app);
