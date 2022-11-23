import { Router } from "express";
import {
    createBudget,
    getBudget,
    updateBudget,
    deleteBudget,
} from "../controllers/budget.controller.js";
import authUser from "../middlewares/auth.middleware.js";

const budgetRouter = Router();

budgetRouter.get("/", authUser, getBudget);
budgetRouter.post("/", authUser, createBudget);
budgetRouter.put("/", authUser, updateBudget);
budgetRouter.delete("/", authUser, deleteBudget);

export default budgetRouter;