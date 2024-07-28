import { NextRequest, NextResponse } from "next/server";
import {dbConnect} from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";

export async function PATCH(request: NextRequest) {
  try {
    await dbConnect();

    // Extract ID from the URL path
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Contact ID is required." },
        { status: 400 }
      );
    }

    const { contacted } = await request.json();

    // Validate `contacted` field
    if (typeof contacted !== "boolean") {
      return NextResponse.json(
        { success: false, error: "Invalid contacted status." },
        { status: 400 }
      );
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { contacted },
      { new: true } // Return the updated document
    );

    if (!updatedContact) {
      return NextResponse.json(
        { success: false, error: "Contact not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/contact/[id] PATCH:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
