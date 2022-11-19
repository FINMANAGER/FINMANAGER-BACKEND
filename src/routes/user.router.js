import { Router } from "express";
import { signIn, signUp, logOut } from "../controllers/user.controller.js";
import userMiddleware from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter.post("/sign-in", userMiddleware, signIn);
userRouter.post("/sign-up", userMiddleware, signUp);
userRouter.post("/sign-out", logOut);

export default userRouter;
