import {
    collection,
    getDocs,
    setDoc,
    deleteDoc,
    doc,
    updateDoc
  } from "firebase/firestore/lite";
  import { firebase_db } from "../models/index.js";
  
  export const initProfile = async (req, res) => {
    try {
      /* const item = req.body;
      await addDoc(colRef, { ...item }).then((docRef) => {
        res.status(201).json({ id: docRef.id });
      }); */
      const uid = req.uid;
      const email = req.email
      const colRef = collection(firebase_db, "profile", uid, "data");
      
      await setDoc( 
            doc(colRef), 
            { 
                email: email,
                user_id: uid
            })
            .then(() => {
            res.status(201).send("Success");
        })
    } catch (error) {
      console.log(error)
      res.status(500).send("Unable to add spending");
    }
  };
  
  export const getProfile = async (_req, res) => {
    try {
      const uid = _req.uid;
      const colRef = collection(firebase_db, "profile", uid, "data");
      await getDocs(colRef)
        .then((snapshort) => {
          res.status(200).json(snapshort.docs[0].data())
        })
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };
    
  export const editProfile = async (req, res) => {
    try {
      const id = req.query.id;
      const data = req.body;
      const uid = req.uid;
      const colRef = collection(firebase_db, "profile", uid, "data");
      await updateDoc(doc(colRef, id), {...data}, {merge: true}).then(() => {
        res.status(202).send("Updated")
      })
    
    } catch (error) {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    }
  };
  