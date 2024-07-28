// import { NextRequest, NextResponse } from "next/server";
// import connect from "@/lib/db"; // Adjust path as needed
// import Blog from "@/models/Blog"; // Adjust path as needed
// import { Types } from "mongoose";

// // Handle GET requests
// export const GET = async (req: NextRequest) => {
//   try {
//     await connect();
//     const slug = req.nextUrl.pathname.split("/").pop(); // Extract slug from URL path

//     if (!slug) {
//       return new NextResponse("Slug is required", { status: 400 });
//     }

//     const blogs = await Blog.findOne({ slug });

//     if (!blogs) {
//       return new NextResponse("Blog not found", { status: 404 });
//     }

//     return new NextResponse(JSON.stringify(blogs), { status: 200 });
//   } catch (error) {
//     return new NextResponse(`Error fetching blog: ${error}`, {
//       status: 500,
//     });
//   }
// };

// export const PUT = async (req: NextRequest) => {
//   try {
//     // Connect to the database
//     await connect();

//     // Extract slug from URL
//     const slug = req.nextUrl.pathname.split("/").pop();
//     if (!slug) {
//       return new NextResponse("Slug is required", { status: 400 });
//     }

//     // Parse request body
//     const body = await req.json();

//     // Log for debugging
//     console.log("Updating blog with slug:", slug);
//     console.log("Request body:", body);

//     // Find and update the blog post
//     const updatedBlog = await Blog.findOneAndUpdate(
//       { slug },
//       { $set: body }, // Use $set to only update specified fields
//       { new: true, runValidators: true }
//     );

//     // Check if the blog post was found and updated
//     if (!updatedBlog) {
//       return new NextResponse("Blog not found", { status: 404 });
//     }

//     // Return success response
//     return new NextResponse(
//       JSON.stringify({
//         message: "Blog updated successfully",
//         blog: updatedBlog,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     // Log error for debugging
//     console.error("Error updating blog:", error);

//     // Return error response
//     return new NextResponse(`Error updating blog: ${error}`, { status: 500 });
//   }
// };
// // Handle DELETE requests
// export const DELETE = async (req: NextRequest) => {
//   try {
//     await connect();
//     const slug = req.nextUrl.pathname.split("/").pop(); // Extracting slug from URL

//     if (!slug) {
//       return new NextResponse("Slug is required", { status: 400 });
//     }

//     const deletedBlog = await Blog.findOneAndDelete({ slug });

//     if (!deletedBlog) {
//       return new NextResponse("Blog not found", { status: 404 });
//     }

//     return new NextResponse(JSON.stringify({ message: "Blog deleted" }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new NextResponse(`Error deleting blog: ${error}`, {
//       status: 500,
//     });
//   }
// };





import { NextRequest, NextResponse } from "next/server";
import {dbConnect} from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";
import { Types } from "mongoose";

// Handle GET requests
export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const slug = req.nextUrl.pathname.split("/").pop();

    if (!slug) {
      return new NextResponse("Slug is required", { status: 400 });
    }

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return new NextResponse(`Error fetching blog: ${error}`, { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    await dbConnect();
    const slug = req.nextUrl.pathname.split("/").pop();

    if (!slug) {
      return new NextResponse("Slug is required", { status: 400 });
    }

    const body = await req.json();

    // Validate request body here

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    return new NextResponse(
      JSON.stringify({
        message: "Blog updated successfully",
        blog: updatedBlog,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return new NextResponse(`Error updating blog: ${error}`, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    await dbConnect();
    const slug = req.nextUrl.pathname.split("/").pop();

    if (!slug) {
      return new NextResponse("Slug is required", { status: 400 });
    }

    const deletedBlog = await Blog.findOneAndDelete({ slug });

    if (!deletedBlog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify({ message: "Blog deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return new NextResponse(`Error deleting blog: ${error}`, { status: 500 });
  }
};