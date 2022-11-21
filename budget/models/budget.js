const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    budget: Number,
    date:{type:Date, default: new Date()} 
});

module.exports= mongoose.model('budget', budgetSchema);