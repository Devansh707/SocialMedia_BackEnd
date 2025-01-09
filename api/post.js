const app = require("../index.js");
const postRouter = require("../routes/post.js");
app.use("/api/", postRouter);
module.exports = app;