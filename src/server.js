import express from "express";
import { serve, setup } from "swagger-ui-express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import spendingRouter from "./routes/spending.router.js";
import userRouter from "./routes/user.router.js";
import budgetRouter from "./routes/budget.router.js";

import swaggerDocument from "../api-docs/swagger.json" assert {type: 'json'};

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const port = process.env.SERVER_PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to FINMANAGER API. visit the /api-docs endpoint")
});

app.use("/api-docs", serve, setup(swaggerDocument));

app.use("/spending", spendingRouter);
app.use("/budget", budgetRouter);
app.use("/auth", userRouter);

// const docRef = doc(db, "users", "Zp2PuhXrPL7olqaw6Gnx");
// deleteDoc(docRef).then(() => {
//   console.log("document deleted successfully");
// });

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
