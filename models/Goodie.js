import mongoose from "mongoose";

const {Schema} = mongoose;

const goodieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

export default mongoose.models.Goodie || mongoose.model("Goodie", goodieSchema)