import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { firebase_db } from "../models/index.js";
// const colRef = collection(firebase_db, "category");
const colRef = firebase_db.collection("category");

export const addCategory = async (req, res) => {

};

export const getCategories = async (req, res) => {

};