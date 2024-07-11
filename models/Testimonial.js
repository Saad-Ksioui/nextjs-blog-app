import mongoose from "mongoose";

const {Schema} = mongoose;

const testimonialSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  pfp_image: {
    type: String,
    required: true
  },
  profile_link: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

export default mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema)