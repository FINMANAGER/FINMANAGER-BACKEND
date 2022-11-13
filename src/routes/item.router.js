import { Router } from "express";
import {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} from "../controllers/item.controller.js";

const itemRouter = Router();

itemRouter.get("/", getItems);
itemRouter.post("/", createItem);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);

export default itemRouter;
