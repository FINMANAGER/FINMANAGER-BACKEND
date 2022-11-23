import { Router } from "express";
import {
  addExpenditure,
  getExpenditure,
  editExpenditure,
  summary,
  deleteItem,
} from "../controllers/spending.controller.js";

import {
  addCategory,
  getCategories
} from "../controllers/category.controller.js";

import authUser from "../middlewares/auth.middleware.js";

const spendingRouter = Router();

spendingRouter.get("/", authUser, getExpenditure);
spendingRouter.get("/summary", summary);
spendingRouter.post("/", authUser, addExpenditure);
spendingRouter.put("/", authUser, editExpenditure);
spendingRouter.delete("/", authUser, deleteItem);

spendingRouter.post("/category", authUser, addCategory);
spendingRouter.get("/category", authUser, getCategories);

export default spendingRouter;
