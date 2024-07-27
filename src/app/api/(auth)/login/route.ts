

// import { dbConnect } from "@/dbConfig/dbConfig";
// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

// dbConnect();

// export async function POST(request: NextRequest) {
//   try {
//     const reqBody = await request.json(); // Use request.json() instead of request.body.json()
//     const { email, password } = reqBody;
//     console.log(reqBody);

//     if (!email || !password) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return NextResponse.json(
//         { message: "User does not exists" },
//         { status: 400 }
//       );
//     }

//     //chech password
//     const validPassword = await bcryptjs.compare(password, user.password);

//     if (!validPassword) {
//       return NextResponse.json(
//         { message: "Invalid password" },
//         { status: 400 }
//       );
//     }

//     // create token data

//     const tokenData = {
//       id: user._id,
//       email: user.email,
//       username: user.username,
//     };

//     //create token
//     const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
//       expiresIn: "1d",
//     });

//     const response = NextResponse.json(
//       { message: "Login successful", token, success: true },
//       { status: 200 }
//     );

//     response.cookies.set("token", token, {
//       httpOnly: true,
//       secure: true,
//     });

    

//      return response;
//   } catch (error) {
//     console.error("Error during signup:", error); // Log the error for debugging
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }




// Example usage in your API route
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const tokenSecret = process.env.TOKEN_SECRET;
    if (!tokenSecret) {
      throw new Error('JWT secret is not defined');
    }

    const token = jwt.sign({ email }, tokenSecret, { expiresIn: '1d' });

    return NextResponse.json({ message: 'Login successful', token, success: true }, { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
