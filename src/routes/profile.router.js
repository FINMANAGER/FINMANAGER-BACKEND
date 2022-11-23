import { Router } from "express";
import {
  initProfile,
  getProfile,
  editProfile
} from "../controllers/profile.controller.js";

import authUser from "../middlewares/auth.middleware.js";

const profileRouter = Router();

profileRouter.post("/", authUser, initProfile);
profileRouter.get("/", getProfile);
profileRouter.put("/edit/", authUser, editProfile);

export default profileRouter;
