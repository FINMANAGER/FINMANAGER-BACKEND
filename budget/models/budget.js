const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    budget: Number,
    date: Date 
});

module.exports= mongoose.model('budget', budgetSchema);