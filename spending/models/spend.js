class Spend {
    constructor (id, amount, category){
        this.id = id;
        this.date = Date.now();
        this.amount = amount;
        this.category = category;
    }
}

module.exports = Spend;