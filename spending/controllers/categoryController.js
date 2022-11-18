const Category = require("../models/category");
const db = require('../../db')
const firestore = db.firestore();
const collection = firestore.collection("category");

// Add category
addCategory = async (req, res, next) => {
    try {
        console.log("Adding category")
        const data = req.body;
        const category = new Category(data)
        const {uid} = req.query;
        await collection.doc(uid).set(
            {category: db.firestore.FieldValue.arrayUnion(...category)},
            { merge: true}
            );
        res.status(201).json({message: "Added new Category"})
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

// get All categories
getCategories = async (req, res, next) => {
    try {
        console.log("Getting all categories");
        const uid = req.query.uid;
        const categories = await collection.doc(uid).get();
        res.status(200).json(categories.data());
    } catch (error) {
        res.status(400).send(error)
    }
}

// get category by id


// Edit category

// delete Category

module.exports = {
    addCategory,
    getCategories
}