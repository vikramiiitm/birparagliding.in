// import { dbConnect } from "@/dbConfig/dbConfig";
// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

// dbConnect();

// export async function POST(request: NextRequest) {
//   try {
//     const reqBody = await request.json(); // Use request.json() instead of request.body.json()
//     const { username, email, password } = reqBody;

//     if (!username || !email || !password) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     console.log(reqBody);

//     const user = await User.findOne({ email });

//     if (user) {
//       return NextResponse.json(
//         { message: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // Hash password
//     const salt = await bcryptjs.genSalt(10);
//     const hashedPassword = await bcryptjs.hash(password, salt);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();
//     console.log(savedUser);

//     return NextResponse.json(
//       { message: "User created successfully", user: savedUser },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error during signup:", error); // Log the error for debugging
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }



import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if any user already exists in the database
    const existingUser = await User.countDocuments();
    if (existingUser > 2) {
      return NextResponse.json(
        { message: "User already exists. Only two user is allowed." },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      { message: "User created successfully", user: savedUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during signup:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
