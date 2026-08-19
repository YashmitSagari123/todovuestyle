import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch(err) {
    throw new Error("Unable to connect: " + err.message + "\n" + err.stack)
  }
}

export default connectDB;
