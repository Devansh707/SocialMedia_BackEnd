import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import userRouter from "./Routes/user.js";
import postRouter from "./Routes/posts.js";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
//Setting up express
const app = express();
app.options("*", cors());
app.use(cors());
app.use(urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
config();

app.use("/user", userRouter);
app.use("/post", postRouter);

try {
  connect(process.env.DB_URL);
  console.log("Connected to DB");
  // app.listen(process.env.PORT, () => {
  //   console.log(`Example app listening on port ${process.env.PORT}`);
  // });
} catch (error) {
  console.log(`Error : ${error}`);
}

module.exports = app;

