

import mongoose, { Schema, model, models } from "mongoose";

// Define the interface to include the flyDate
interface IUserRegistration {
  name: string;
  email: string;
  amount: number;
  currency: string;
  orderId: string;
  timeSlot: string;
  phoneNumber: number;
  participants: number;
  code: string; // Optional couponCode field
  flypackage: string;
 
  date: Date;
  flyDate: Date; // Added flyDate field
}

// Create the combined schema with the flyDate field
const UserRegistrationSchema = new Schema<IUserRegistration>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  orderId: { type: String, required: true },
  timeSlot: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  participants: { type: Number, required: true },
  flypackage: { type: String, required: true },
 
  code: { type: String }, // Added couponCode field
  date: { type: Date, default: Date.now },
  flyDate: { type: Date, required: true }, // Added flyDate field
});

// Create the model
const UserRegistration =
  mongoose.models?.UserRegistration ||
  mongoose.model<IUserRegistration>("UserRegistration", UserRegistrationSchema);

export default UserRegistration;
