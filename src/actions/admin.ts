"use server";
import connectDB from "@/utils/db";
import Admin from "@/models/admin";
import bcrypt from "bcryptjs";



export const register = async (values: any) => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await Admin.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Admin({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  } catch (e) {
    console.log(e);
  }
};