const db = require("../../db");
const firestore = db.firestore();
const collection = firestore.collection('users');

export const getUserById  = async (req, res, next) => {
    try {
        res.status(200).send('Users')
    } catch (e) {

    }
}