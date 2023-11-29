const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const userRouter = require("./Routes/user");
const User = require("./Schemas/user")

//Setting up express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const main = async () => {
  env.config();
  app.use("/user", userRouter);
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

main();
