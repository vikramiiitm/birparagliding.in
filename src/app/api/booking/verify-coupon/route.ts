// import { NextRequest, NextResponse } from "next/server";
// import { dbConnect } from "@/dbConfig/dbConfig";
// import Coupon from "@/models/couponModel";

// export const POST = async (req: NextRequest) => {
//   try {
//     const { couponCode } = await req.json();
//     await dbConnect();

//     // Find the coupon by code
//     const coupon = await Coupon.findOne({ code: couponCode });

//     const data = coupon.toJSON();

//     console.log(data);

//     if (!coupon) {
//       return new NextResponse(
//         JSON.stringify({ valid: false, message: "Coupon code is invalid" }),
//         { status: 400 }
//       );
//     }


//     // Check if the coupon is expired
//     const currentDate = new Date();
//     if (coupon.expiryDate < currentDate) {
//       return new NextResponse(
//         JSON.stringify({ valid: false, message: "Coupon code has expired" }),
//         { status: 400 }
//       );
//     }

//     // Return the discount value if the coupon is valid
//     return new NextResponse(
//       JSON.stringify({
//         valid: true,
//         discount: coupon.discountPercentage,
//         message: "Coupon code is valid",
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error in verifying coupon:", error);
//     return new NextResponse(`Error in verifying coupon: ${error}`, {
//       status: 500,
//     });
//   }
// };








import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import Coupon from "@/models/couponModel";

export const POST = async (req: NextRequest) => {
  try {
    const { code } = await req.json();

    // Input validation (optional)
    if (!code) {
      return new NextResponse(
        JSON.stringify({ error: "Coupon code is required" }),
        { status: 400 }
      );
    }

    await dbConnect();

    const coupon = await Coupon.findOne({ code });

    // want to get all details
    const data = coupon.toJSON();
    

    if (!coupon) {
      return new NextResponse(
        JSON.stringify({ valid: false, message: "Coupon code is invalid" }),
        { status: 400 }
      );
    }

    const currentDate = new Date();
    if (coupon.expiryDate < currentDate) {
      return new NextResponse(
        JSON.stringify({ valid: false, message: "Coupon code has expired" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        valid: true,
        discount: coupon.discountAmount,
        message: "Coupon code is valid",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in verifying coupon:", error);
    return new NextResponse(`Error in verifying coupon: ${error}`, {
      status: 500,
    });
  }
};



