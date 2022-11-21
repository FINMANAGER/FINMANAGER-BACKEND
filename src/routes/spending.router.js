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

const spendingRouter = Router();

spendingRouter.get("/", getExpenditure);
spendingRouter.get("/summary", summary);
spendingRouter.post("/", addExpenditure);
spendingRouter.put("/:id", editExpenditure);
spendingRouter.delete("/:id", deleteItem);

spendingRouter.post("/category", addCategory);
spendingRouter.get("/category", getCategories);

export default spendingRouter;
