import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
console.log(PORT);
app.use(helmet.hidePoweredBy());
app.use(express.json());
app.use(cors);
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`);
});
