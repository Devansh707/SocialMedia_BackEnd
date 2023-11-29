const express = require("express");
const env = require("dotenv");
const userRouter = require("./Routes/user");
const app = express();

env.config();
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ value: "Test" });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
