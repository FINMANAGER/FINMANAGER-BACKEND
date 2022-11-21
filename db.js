const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { auth } = require('firebase-admin')
const serviceAccount = require("./serviceAccount.json")
const {firebaseConfig} = require('./config')

const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL: "https://finmanager-f2308.firebaseio.com"
});

const db = getFirestore(app);

module.exports = {db, auth, app};