const express = require('express')
router = express.Router()
const db = require("../../db");
const firestore = db.firestore();
const collection = firestore.collection('spending');

const Spend = require("../models/spend");

addExpenditure = async (req, res, next) => {
    try {
        console.log("Adding new expenditure ...")
        const data = req.body
        const uid = req.query.uid
        // await database action
        const spend = new Spend(data)
        await collection.doc(uid).collection().doc('data').set({ data }, { merge: true });
        res.status(201).json({message: "Added expenditure"})
    } catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
}

getExpenditure = async (req, res, next) => {
    try {
        const uid = req.query.uid
        const expediture =  await collection.doc(uid).listCollections()
        res.status(200).json(expediture.data);

    } catch(err) {
        res.status(404).send(err);
    }
}

editExpenditure = async (req, res, next) => {
    try {
        const uid = req.query.uid;
        // Edit expenditure, amount and date, deduct budget
        // const 
    } catch(err){
        res.status(400).send(err)
    }
}

summary = async (req, res, next ) => {
    try {
        const uid = req.query.uid;
        // TODO: get expendigutes for a particular month
        // group expenditure by month
        // produce overview of expeniture
         // const result = await collection.doc(uid).collection
    } catch(err) {

    }
}

module.exports = {
    addExpenditure,
    getExpenditure,
    editExpenditure,
    summary
}