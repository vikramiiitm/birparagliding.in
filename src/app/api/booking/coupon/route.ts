import { NextRequest, NextResponse } from "next/server";
import {dbConnect} from "@/dbConfig/dbConfig";
import Coupon from "@/models/couponModel";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const coupons = await Coupon.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(coupons), { status: 200 });
  } catch (error) {
    return new NextResponse(`Error in processing request: ${error}`, {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    await dbConnect();
    const coupon = new Coupon(body);
    await coupon.save();
    return new NextResponse(
      JSON.stringify({ message: "Coupon created successfully", coupon }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Error in creating coupon: " + error, {
      status: 500,
    });
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const body = await req.json();
    await dbConnect();
    const coupon = await Coupon.findByIdAndUpdate(id, body, { new: true });
    if (!coupon) {
      return new NextResponse("Coupon not found", { status: 404 });
    }
    return new NextResponse(
      JSON.stringify({ message: "Coupon updated successfully", coupon }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Error in updating coupon: " + error, {
      status: 500,
    });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await dbConnect();
    await Coupon.findByIdAndDelete(id);
    return new NextResponse("Coupon deleted successfully", { status: 204 });
  } catch (error) {
    return new NextResponse("Error in deleting coupon: " + error, {
      status: 500,
    });
  }
};
