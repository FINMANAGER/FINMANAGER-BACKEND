const express =  require("express");
const authRouter = express.Router();
const {signUp, signIn} = require("../../auth")

authRouter.post("/signup", signUp);
authRouter.post("/signIn", signIn);

module.exports = authRouter;