import { Router } from "express";
import {
    createBudget,
    getBudget,
    updateBudget,
    deleteBudget,
} from "../controllers/budget.controller.js";

const budgetRouter = Router();

budgetRouter.get("/", getBudget);
budgetRouter.post("/", createBudget);
budgetRouter.put("/:id", updateBudget);
budgetRouter.delete("/:id", deleteBudget);

export default budgetRouter;