const app = require("../index.js");
const userRouter = require("../routes/user");
app.use("/api/", userRouter);
module.exports = app;