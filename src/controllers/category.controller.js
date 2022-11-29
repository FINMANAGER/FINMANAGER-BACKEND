import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { firebase_db } from "../models/index.js";


export const addCategory = async (req, res) => {
  try{
    const uid = req.uid;
    const colRef = collection(firebase_db, "category", uid, "data");
    const data = req.body
    await setDoc(doc(colRef), {...data}, {merge: true}).then(() => {
            res.status(201).send("Success");
          })
  } catch(err) {

  }
};

export const getCategories = async (req, res) => {
  try {
    const uid = req.uid;
    const colRef = collection(firebase_db, "category", uid, "data");
    const categories = [];
    await getDocs(colRef)
      .then((snapshort) => {
        snapshort.docs.forEach((doc) => {
          categories.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (categories.length < 1) {
      res.status(404).json({ errorMessage: "no items found" });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};