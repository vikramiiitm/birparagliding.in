import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const userModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default userModel;
