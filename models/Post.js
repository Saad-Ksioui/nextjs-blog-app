import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  post_img: {
    type: String,
    required: true
  },
  tags: [
    {
      tag: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
});

export default mongoose.models.Post || mongoose.model("Post", postSchema)