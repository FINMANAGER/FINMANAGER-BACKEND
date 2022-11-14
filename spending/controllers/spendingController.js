const Spend = require("../models/spend");

const addExpenditure = async (req, res, next) => {
    try {
        console.log("Adding new expenditure")
        const data = req.body
        // await database action
        // firestore.collection("spending").doc().set(data);
        res.status(201).json({message: "Added expenditure"})
    } catch {
        res.status(400).json({message})
    }
}

const getExpenditure = async (req, res, next) => {
    try {

    } catch {

    }
}

const editExpenditure = async (req, res, next) => {

}