// models/Contact.ts
import mongoose, { Schema, Document } from "mongoose";

interface IContact extends Document {
  name: string;
  email: string;
  phoneNumber: number;
  message: string;
  contacted?: boolean; // Optional field for tracking contact status
}

const ContactSchema: Schema<IContact> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  contacted: {
    type: Boolean,
    default: false,
  },
}
,{
  timestamps: true,
});

const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
