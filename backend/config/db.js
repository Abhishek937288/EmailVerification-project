import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // use the lib to check the env var is valid (envgaurd)
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDb;
