import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore/lite";
import { firebase_db } from "../models/index.js";

export const addExpenditure = async (req, res) => {
  try {
    /* const item = req.body;
    await addDoc(colRef, { ...item }).then((docRef) => {
      res.status(201).json({ id: docRef.id });
    }); */
    const data  = req.body;
    const uid = req.uid;
    const colRef = collection(firebase_db, "spending", uid, "data");
    
    await setDoc(doc(colRef), { ...data }, {merge: true}).then(() => {
      res.status(201).send("Success");
    })
  } catch (error) {
    console.log(error)
    res.status(500).send("Unable to add spending");
  }
};

export const getExpenditure = async (_req, res) => {
  try {
    const uid = _req.uid;
    const colRef = collection(firebase_db, "spending", uid, "data");
    const spendings = [];
    await getDocs(colRef)
      .then((snapshort) => {
        snapshort.docs.forEach((doc) => {
          spendings.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (spendings.length < 1) {
      res.status(404).json({ errorMessage: "no items found" });
    }
    res.status(200).json(spendings);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const id = req.query.id;
    const item = req.body;
    const selectedItem = await collection("user").doc(id);
    if (!selectedItem) {
      res.status(404).json({ errorMessage: "item not found" });
    }
    const updatedItem = await selectedItem.update(item);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const editExpenditure = async (req, res) => {
  try {
    const id = req.query.id;
    const data = req.body;
    const uid = req.uid;
    const colRef = collection(firebase_db, "spending", uid, "data");
    await updateDoc(doc(colRef, id), {...data}, {merge: true}).then(() => {
      res.status(202).send("Updated")
    })
  
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const id = req.query.id;
    const uid = req.uid;
    const colRef = collection(firebase_db, "spending", uid, "data");
    await deleteDoc(doc(colRef, id)).then(() => {
      res.status(200).send("Deleted")
    })
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const summary = async (req, res) => {

};