import { NextRequest, NextResponse } from "next/server";
import {dbConnect} from "@/dbConfig/dbConfig"; // Adjust path as needed
import Blog from "@/models/blogModel"; // Adjust path as needed

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse(`Error in fetching blogs: ${error}`, {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const body = await req.json();

    const newBlog = new Blog(body);
    await newBlog.save();

    return new NextResponse(
      JSON.stringify({ message: "Blog created", blog: newBlog }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(`Error in creating blog: ${error}`, {
      status: 500,
    });
  }
};
