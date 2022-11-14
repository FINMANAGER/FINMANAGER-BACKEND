const { json } = require("express");
const Category = require("../models/category");

// Add category
const addCategory = async (req, res, next) => {
    try {
        console.log("Adding category")
        const data = req.body;
        // await fireStore.collection("category").doc().set(data);
        res.status(201).json({message: "Added new Category"})
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

// get All categories
const getCategoryies = async (req, res, next) => {
    try {
        console.log("Getting all categories");
        // const categories = await fireStore.colection("categories");
        // const data = await categories.get();
        // const arr = [];
    } catch (error) {

    }
}

// get category by id


// Edit category

// delete Category