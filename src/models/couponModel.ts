import mongoose, { Schema, Document } from "mongoose";

// Define an interface for the Coupon document
interface ICoupon extends Document {
  code: string;
  discountAmount: number;
  // duration: number; // Duration in days
  // isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for the Coupon
const CouponSchema: Schema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  discountAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  // duration: {
  //   type: Number,
  //   required: true,
  //   min: 1, // Minimum duration of 1 day
  // },
  // isActive: {
  //   type: Boolean,
  //   default: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update `updatedAt` field before saving
CouponSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Create and export the Coupon model
const Coupon =
  mongoose.models.Coupon || mongoose.model<ICoupon>("Coupon", CouponSchema);
export default Coupon;
