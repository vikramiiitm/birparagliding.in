// import { NextRequest, NextResponse } from "next/server";
// import { dbConnect } from "@/dbConfig/dbConfig";
// import UserRegistration from "@/models/bookingModel";

// export async function POST(request: NextRequest) {
//   try {
//     await dbConnect();

//     const {
//       name,
//       email,
//       amount,
//       currency,
//       orderId,
//       timeSlot,
//       phoneNumber,
//       participants,
//       flypackage,
//       flyDate,
//     } = await request.json();

//     // Validate all required fields
//     if (
//       !name ||
//       !email ||
//       !amount ||
//       !currency ||
//       !orderId ||
//       !timeSlot ||
//       !flypackage ||
//       !phoneNumber ||
//       !participants ||
//       !flyDate
//     ) {
//       return NextResponse.json(
//         { success: false, error: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     // Ensure flyDate is a valid date
//     const parsedFlyDate = new Date(flyDate);
//     if (isNaN(parsedFlyDate.getTime())) {
//       return NextResponse.json(
//         { success: false, error: "Invalid date format." },
//         { status: 400 }
//       );
//     }

//     const newRegistration = new UserRegistration({
//       name,
//       email,
//       amount,
//       currency,
//       orderId,
//       timeSlot,
//       flypackage,
//       phoneNumber,
//       participants,
//       flyDate: parsedFlyDate,
//     });

//     await newRegistration.save();

//     return NextResponse.json(
//       { success: true, data: newRegistration },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error in /api/register:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     await dbConnect();

//     const registrations = await UserRegistration.find();

//     return NextResponse.json({ success: true, data: registrations });
//   } catch (error) {
//     console.error("Error in /api/get:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import UserRegistration from "@/models/bookingModel";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const {
      name,
      email,
      amount,
      currency,
      orderId,
      timeSlot,
      code,
      phoneNumber,
      participants,
      flypackage,
      flyDate,
    } = await request.json();

    // Validate all required fields
    if (
      !name ||
      !email ||
      !amount ||
      !currency ||
      !orderId ||
      !timeSlot ||
      !flypackage ||
      !code ||
      !phoneNumber ||
      !participants ||
      !flyDate
    ) {
      console.error("Missing required fields:", {
        name,
        email,
        amount,
        currency,
        orderId,
        timeSlot,
        code,
        phoneNumber,
        participants,
        flypackage,
        flyDate,
      });
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Ensure flyDate is a valid date
    const parsedFlyDate = new Date(flyDate);
    if (isNaN(parsedFlyDate.getTime())) {
      console.error("Invalid date format:", flyDate);
      return NextResponse.json(
        { success: false, error: "Invalid date format." },
        { status: 400 }
      );
    }

    const newRegistration = new UserRegistration({
      name,
      email,
      amount,
      currency,
      orderId,
      timeSlot,
      flypackage,
      code,
      phoneNumber,
      participants,
      flyDate: parsedFlyDate,
    });

    await newRegistration.save();

    return NextResponse.json(
      { success: true, data: newRegistration },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/register:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const registrations = await UserRegistration.find();

    return NextResponse.json({ success: true, data: registrations });
  } catch (error) {
    console.error("Error in /api/get:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
