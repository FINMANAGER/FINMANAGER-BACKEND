const express =  require("express");
const mongoose = require('mongoose');
const budget = require('./models/budget')

const path = require('path');
const methodOverride = require('method-override');
const Budget = require("./models/budget");


/****************************
 * Mongo DB * 
 ****************************/
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection; 
db.on('error',console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("database connected")
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

/****************************
 * Create a budget * 
 ****************************/
// add a new budget.
app.get("/", (req, res) => {
    res.render('home')
})

// /***
//  * Post the budget which includes:
//  * date - when was the budget add
//  * amount: the amount of money that was add 
//  */
app.post("/budgets", async (req, res) => {
    const date = Date.now();
    const budget = new Budget(req.body.budget);
    await budget.save()
     res.redirect(`/budgets/${budget._id}`)
    // res.send(new Date().toString());
    // *********** Date ????***********
  
})

// /***
//  * Post the budget which includes:
//  * date - when was the budget add
//  * amount: the amount of money that was add 
//  */
app.get("/budgets", async (req, res) => {
    const budgets = await budget.find({})
    res.render('budgets/index',{ budgets})

})
// /***
//  * show the budget which includes:
//  * date - when was the budget add
//  * amount: the amount of money that was add 
//  */
app.get("/budgets/:id", async(req, res) => {
    const budget = await Budget.findById(req.params.id)
    res.render("budgets/show",{budget})

})
// /***
//  * Edit the budget 
//  */
app.get("/budgets/:id/edit", async(req, res) => {
    const budget = await Budget.findById(req.params.id)
    res.render("budgets/edit",{budget});

})

app.put("/budgets/:id", async(req, res) => {
    // res.send("UPDATED!!!")
    const {id}= req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    const budget =await Budget.findByIdAndUpdate(id, {budget: {...req.body.budget}})
    res.redirect(`/budgets/${budget.id}`)

})

// /***
//  * Delete the budget 
//  */

app.delete("/budgets/:id", async(req, res) => {
    // res.send("UPDATED!!!")
    const {id}= req.params
    const budget =await Budget.findByIdAndDelete(id)
    res.redirect('/budgets')

})

app.listen(3002, ()=>{
    console.log('serving on port 3001')
})
//module.exports = budget