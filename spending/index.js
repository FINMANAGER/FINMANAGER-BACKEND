const express =  require("express");
const spending = express.Router();
const {
    addExpenditure,
    getExpenditure,
    editExpenditure,
    summary
} = require('./controllers/spendingController.js');

const {
    addCategory,
    getCategories
} = require('./controllers/categoryController.js') ;

/****************************
 * SPENDING DETAILS * 
 ****************************/
// Get all spending details (Categories)
spending.get("/", getExpenditure);

/***
 * Post the spending which includes
 * date - date and time when a spending activiy occured
 * category - the ategory which you spent on
 * price / amount: the amount of money that was spent 
 */
spending.post("/", addExpenditure);

// Update details
spending.put("/", editExpenditure);

/**
 * Get monthly spending summary 
 * description: This will get the monthly spending summary grouped mu
 *             month and by the sum of expenditure per category.
 *             It will also display the total spend in a month
 */
 spending.get("/summary", summary)

/****************************
 * SPENDING CATEGORIES * 
 ****************************/

/**
 * Add new spending category to users categories
 */
spending.post("/category", addCategory);

/**
 * Get All categories listed by the user
 */
spending.get("/category", getCategories)


module.exports = spending