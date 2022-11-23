import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { firebase_db } from "../models/index.js";

export const createBudget = async (req, res) => {
  try {
    const data = req.body;
    const uid = req.uid;
    const colRef = collection(firebase_db, "budget", uid, "data");
    await addDoc(colRef, {...data}).then((docRef) => {
      res.status(201).json({message: docRef.id})
    })
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getBudgets = async (_req, res) => {
  try {
    const uid = _req.uid;
    const colRef = collection(firebase_db, "budget", uid, "data");
    const budget = [];
    await getDocs(colRef)
      .then((snapshort) => {
        snapshort.docs.forEach((doc) => {
          spendings.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (budget.length < 1) {
      res.status(404).json({ errorMessage: "no items found" });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getBudget = async (req, res) => {
  try{
    const uid = req.uid;
    const id = req.query.id;
    const colRef = collection(firebase_db, "budget", uid, "data");
    await getDocs(colRef, id)
          .then((snapshort) => {
            res.status(201).json(snapshort.docs[0].data());
          })
  } catch(err) {
    res.status(400).send(err.message);
  }
};

export const getCategories = async (req, res) => {
  try {
    const uid = req.uid;
    const colRef = collection(firebase_db, "budget", uid, "data");
    const budget = [];
    await getDocs(colRef)
      .then((snapshort) => {
        snapshort.docs.forEach((doc) => {
          budget.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (budget.length < 1) {
      res.status(404).json({ errorMessage: "no items found" });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updateBudget = async (req, res) => {
  try {
    const id = req.query.id;
    const data = req.body;
    const uid = req.uid;
    const colRef = collection(firebase_db, "budget", uid, "data");
    await updateDoc(doc(colRef, id), {...data}, {merge: true}).then(() => {
      res.status(202).send("Updated")
    })
  
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteBudget = async (req, res) => {
  try {
    const id = req.query.id;
    const data = req.body;
    const uid = req.uid;
    const colRef = collection(firebase_db, "budget", uid, "data");
    await deleteDoc(doc(colRef, id)).then(() => {
      res.status(202).send("Deleted")
    })
  
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error.message });
  }
};
