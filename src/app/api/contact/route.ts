// pages/api/contact.ts
import { NextRequest, NextResponse } from "next/server";
import {dbConnect} from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { name, email, phoneNumber, message } = await request.json();

    // Validate all required fields
    if (!name || !email || !phoneNumber || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const newContact = new Contact({
      name,
      email,
      phoneNumber,
      message,
    });

    await newContact.save();

    return NextResponse.json(
      { success: true, data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const contacts = await Contact.find();

    return NextResponse.json(
      { success: true, data: contacts },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/contact GET:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
