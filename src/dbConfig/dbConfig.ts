import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

export const dbConnect = async () => {
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
    mongoose.connect(MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
};

