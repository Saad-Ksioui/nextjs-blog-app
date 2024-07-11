import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connect');
  } catch (error) {
    console.log(error);
  }
}

export default connection