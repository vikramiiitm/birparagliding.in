// Example: pages/api/admins.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from "@/utils//db"; // Ensure your Mongoose connection setup is imported
import Admin, { IAdmin } from '@/models/admin'; // Import Admin model and interface

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB(); // Ensure database connection is established

  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body;

      // Create a new Admin document
      const newAdmin: IAdmin = new Admin({ name, email, password });

      // Save the new Admin to the database
      await newAdmin.save();

      return res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
      console.error('Error creating admin:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
