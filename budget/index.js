const express =  require("express");
const app = express();
const path = require('path')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))

//const methodOverride = require('method-override');

/****************************
 * Create a budget * 
 ****************************/
// add a new budget.
app.get("/budget", (req, res) => {
    res.render('home')
})

// /***
//  * Post the budget which includes:
//  * date - when was the budget add
//  * amount: the amount of money that was add 
//  */
app.post("/budgets", (req, res) => {
    const date = Date.now();
    // const amount = req.body.amount; 
    // res.send(req.body)
    res.send(new Date().toString());
})

// // Update details
// budget.get("/:id/edit", async(req, res) => {
//     const budget= await budget.findById(req.params.id)
//     red.render(`budget/edit`,{budget});
// })
// budget.put("/:id", async(req, res) => {
//     res.send( " it is upadated")
//     //methodOverride should be used
// })

// // Delete details
// budget.delete("/:id", async(req, res) => {
//     //
// })

app.listen(3000, ()=>{
    console.log('serving on port 3000')
})
//module.exports = budget