// import { NextRequest, NextResponse } from "next/server";
// import { dbConnect } from "@/dbConfig/dbConfig";
// import Booking from "@/models/bookingModel";

// export async function POST(request: NextRequest) {
//   try {
//     await dbConnect();

//     const { name, email, phoneNumber, participants, flyDate } = await request.json();

//     if ( !email ) {
//       return NextResponse.json(
//         { success: false, error: "Missing fields" },
//         { status: 400 }
//       );
//     }

//     const query = {
//       // name,
//       email,
//       // flyDate,
//       // phoneNumber,
//       // participants: parseInt(participants, 10),
//     };

//     const registrations = await Booking.find(query);

//     if (registrations.length === 0) {
//       return NextResponse.json(
//         { success: false, error: "No registrations found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: registrations });
//   } catch (error) {
//     console.error("Error in /api/booking/reciept:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import Booking from "@/models/bookingModel";

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract the request body
    const { email } = await request.json();

    // Check if email is provided
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Missing email field" },
        { status: 400 }
      );
    }

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for accurate comparison

    // Find registrations with the given email and flyDate after today
    const registrations = await Booking.find({
      email: email,
      flyDate: { $gte: today }, // $gte is "greater than or equal to" today
    });

    // If no registrations are found, return an error
    if (registrations.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "No upcoming registrations found for this email",
        },
        { status: 404 }
      );
    }

    // Return the registrations found
    return NextResponse.json({ success: true, data: registrations });
  } catch (error) {
    console.error("Error in /api/booking/receipt:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
