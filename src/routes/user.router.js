import { Router } from "express";
import { signIn, signUp } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/sign-in", signIn);
userRouter.post("sing-up/", signUp);

export default userRouter;
