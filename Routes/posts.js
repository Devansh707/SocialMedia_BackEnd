import { Router } from "express";
const router = Router();
import postSchema from "../Schemas/post.js";

router.post("/post", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const { userId, image, caption } = req.body;
    let post = await postSchema.create({
      userId: req.body.userId,
      createdOn: Date.now(),
      image: image,
      caption: caption ?? "",
    });
    res.status(200).json({ post: post });
  } catch (error) {
    res.status(400).send("Failed to add user");
  }
});

export default router;
