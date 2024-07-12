import { UUID } from "mongodb";
import { Schema, model } from "mongoose";

const postSchema = new Schema({
  caption: String,
  like: { type: Number, required: true, default: 0 },
  likedBy: { type: UUID },
  userId: { type: UUID, required: true },
  createdOn: { type: Date, default: Date.now(), required: true },
  image: { type: String, required: true },
});

export default model("Post", postSchema);
