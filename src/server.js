import express from "express";
import { serve, setup } from "swagger-ui-express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import itemRouter from "./routes/item.router.js";
import userRouter from "./routes/user.router.js";
// import budgetRouter from "./routes/budget.router.js";

// const swaggerDocument = require("./api-docs/swagger.json");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const port = process.env.SERVER_PORT || 3000;

// app.use("/api-docs", serve, setup(swaggerDocument));

app.use("/item", itemRouter);
// app.use("/budget", budgetRouter);
app.use("/auth", userRouter);

// const docRef = doc(db, "users", "Zp2PuhXrPL7olqaw6Gnx");
// deleteDoc(docRef).then(() => {
//   console.log("document deleted successfully");
// });

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
