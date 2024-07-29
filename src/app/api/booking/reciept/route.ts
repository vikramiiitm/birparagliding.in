import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import Booking from "@/models/bookingModel";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { name, email, phoneNumber, participants } = await request.json();

    if (!name || !email || !phoneNumber || !participants) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const query = {
      name,
      email,
      phoneNumber,
      participants: parseInt(participants, 10),
    };

    const registrations = await Booking.find(query);

    if (registrations.length === 0) {
      return NextResponse.json(
        { success: false, error: "No registrations found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: registrations });
  } catch (error) {
    console.error("Error in /api/booking/reciept:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
