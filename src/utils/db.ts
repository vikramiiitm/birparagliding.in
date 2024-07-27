import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected to database");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting.....");
    return;
  }

  try {
    mongoose.connect(MONGO_URI, {
      dbName: "sky",
      bufferCommands: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
};

export default connectDB;
