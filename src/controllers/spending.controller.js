import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { firebase_db } from "../models/index.js";
const colRef = collection(firebase_db, "spending");

export const addExpenditure = async (req, res) => {
  try {
    /* const item = req.body;
    await addDoc(colRef, { ...item }).then((docRef) => {
      res.status(201).json({ id: docRef.id });
    }); */
    const data  = req.body;
    const uid = rqr.query.uid;
    await addDoc(colRef, { ...item }).then((docRef) => {
      res.status(201).json({ id: docRef.id });
    });
    res.status(201).json({message: "Added Expenditure"})
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getExpenditure = async (_req, res) => {
  try {
    const users = [];
    await getDocs(colRef)
      .then((snapshort) => {
        snapshort.docs.forEach((doc) => {
          users.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (users.length < 1) {
      res.status(404).json({ errorMessage: "no items found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const id = req.params.id;
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

export const editExpenditure = (req, res) => {
  try {
    const id = req.params.id;
    const item = collection("user").doc(id).get().data();
    if (!item) {
      res.status(404).json({ errorMessage: "item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    await collection("user").doc(id).delete();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const summary = async (req, res) => {

};