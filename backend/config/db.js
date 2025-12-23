import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error.message);
    // DO NOT exit while developing
  }
};

export default connectDB;
