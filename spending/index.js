const express =  require("express");
const spending = express.Router();

/****************************
 * SPENDING DETAILS * 
 ****************************/
// Get all spending details (Categories)
spending.get("/", (req, res) => {
    
    // Todo: get the lsit of all the uses spending details sorted by date

    res.send("Example: Fuel, food, leisure")
})

/***
 * Post the spending which includes
 * date - date and time when a spending activiy occured
 * category - the ategory which you spent on
 * price / amount: the amount of money that was spent 
 */
spending.post("/", (req, res) => {
    const date = Date.now();
    const category = req.body.category;
    const amount = req.body.amount;

    //Todo: function to check if spending can occur within the given budget
})

// Update details
spending.put("/", (req, res) => {
    const date  = req.body.date
    const category = req.body.category;
    const amount = req.body.amount;
})

/**
 * Get monthly spending summary 
 * description: This will get the monthly spending summary grouped mu
 *             month and by the sum of expenditure per category.
 *             It will also display the total spend in a month
 */
 spending.get("/summary", (req, res) => {
    // Get monthly spending by sum of category
    res.send("Expenditure by month")
})

/****************************
 * SPENDING CATEGORIES * 
 ****************************/

/**
 * Add new spending category to users categories
 */
spending.post("/category", (req, res) => {
    // List add new spending catefgory that does not exist.
})

/**
 * Get All categories listed by the user
 */
spending.get("/category", (req, res) => {
    res.send("All categories")
})


module.exports = spending