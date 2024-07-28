"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Axios from "axios";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";




export default function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true);
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await Axios.post("/api/user/login", user); // Use appropriate API endpoint for login
      console.log("Login Success:", response.data);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Login failed:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred during login."
      ); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mx-auto flex-col justify-center items-center h-screen relative">
      <div>
        <h1>
          {loading ? (
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[.9] text-white"> <p className="flex mx-auto h-full justify-center items-center text-6xl" >Loding...</p> </div>
          ) : (
            ""
          )}
        </h1>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Card className="w-full p-8 flex mx-auto flex-col justify-center items-center ">
          <CardHeader>
            <CardTitle>Login Into Account</CardTitle>
          </CardHeader>
          <form onSubmit={onSignIn}>
            <CardContent>
              <Input
                placeholder="Email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </CardContent>
            <CardContent>
              <Input
                placeholder="Password"
                autoComplete="current-password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </CardContent>
            <CardContent>
              <Button
                className="w-full"
                type="submit"
                disabled={buttonDisabled}
              >
                {buttonDisabled ? "Required Field" : "Login"}
              </Button>
            </CardContent>
          </form>
          <Separator />
          <CardFooter className="mt-4 flex gap-3">
            <p>Don&apos;t have an account? </p>
            <Link
              className="text-blue-500 hover:text-gray-900 duration-500"
              href="/auth/signup"
            >
              Signup here.
            </Link>
          </CardFooter>
        </Card>

        {/* <Card>
          <CardTitle>Card Title</CardTitle>

          <form onSubmit={onSignIn}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button type="submit" disabled={buttonDisabled}>
              {buttonDisabled ? "No Login" : "Login"}
            </button>
          </form>
        </Card> */}
      </div>
    </div>
  );
}
