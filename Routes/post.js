const postSchema = require("../Schemas/post.js");
const post = require("express").Router();

post.post("/post", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const { userId, image, caption } = req.body;
    let post = await postSchema.create({
      userName: userId,
      createdOn: Date.now(),
      image: image,
      caption: caption ?? "",
    });
    res.status(200).json({ post: post });
  } catch (error) {
    res.status(400).send("Failed to add user");
  }
});

post.get("/post", async(req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let posts = await postSchema.find({userName : req.query.id})
    res.status(200).json({ posts: posts });
  } catch (error) {
    res.status(400).send("Failed ");
  }
})

module.exports = post;
