import { Router } from "express";
const router = Router();
import postSchema from "../Schemas/post.js";

router.post("/", async (req, res) => {
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

router.get("/", async(req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let posts = await postSchema.find({userName : req.query.id})
    res.status(200).json({ posts: posts });
  } catch (error) {
    res.status(400).send("Failed ");
  }
})

export default router;
