// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// import { signInSchema } from "@/lib/zod";
// import {connectDB} from "@/utils/db";
// import Admin from "@/models/admin";
// import { compare } from "bcryptjs";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials, req) => {
//         try {
//           // Validate input
//           const { email, password } = signInSchema.parse(credentials);

//           // Connect to the database
//           await connectDB;

//           // Find user in the database
//           const user = await Admin.findOne({ email }).select("+password");
//           if (!user) {
//             throw new Error(`User not found: ${email}`);
//           }

//           // Compare password
//           const isMatch = await compare(password, user.password);
//           if (!isMatch) {
//             throw new Error(`Password is incorrect for user: ${email}`);
//           }

//           // Return user object
//           return {
//             id: user._id.toString(),
//             email: user.email,
//             name: user.name,
//           };
//         } catch (error) {
//           console.error(`Authentication error: ${error as unknown}`);
//           throw new Error("Authentication failed");
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt", // <-- make sure to use jwt here
//     maxAge: 30 * 24 * 60 * 60,
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       token.exp = Math.floor(Date.now() / 1000) + 60 * 5;
//       return token;
//     },
//     async session({ session, token }) {
//       if (token && session.user) {
//         session.user.id = token.id as string;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/signin",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });





import connectDB from "@/utils/db";
import Admin from "@/models/admin";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await Admin.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};