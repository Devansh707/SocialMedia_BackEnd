const { UUID } = require("mongodb");
const { Schema, model } = require("mongoose");


const postSchema = new Schema({
  caption: String,
  like: { type: Number, required: true, default: 0 },
  likedBy: { type: UUID },
  userName: { type: String, required: true },
  createdOn: { type: Date, default: Date.now(), required: true },
  image: { type: String, required: true },
});

module.exports = model("Post", postSchema);
