"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import HashLoader from "react-spinners/HashLoader";
import Link from "next/link";

export default function SignUpPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    setErrorMessage(""); // Reset the error message

    try {
      const response = await Axios.post("/api/user/signup", user);
      console.log("Signup Success", response.data);
      if (response.status === 201) {
        router.push("/auth/login");
      }
    } catch (error: any) {
      console.log("Signup failed", error);
      setErrorMessage(error.response?.data?.message || "An error occurred"); // Display server-side validation errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex mx-auto flex-col justify-center items-center  h-screen relative px-5">
        <div className="absolute -top-32 left-32">
          {loading ? (
            <p className="flex mx-auto h-screen w-full justify-center items-center text-6xl">
              <HashLoader
                color="#000"
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="relative  ">
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <Card className="w-full p3 flex mx-auto flex-col justify-center items-center ">
            <CardHeader>
              <CardTitle>Signup your Account</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <form onSubmit={onSignup}>
              <CardContent>
                <Input
                  type="text"
                  id="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  placeholder="Username"
                />
              </CardContent>
              <CardContent>
                <Input
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </CardContent>
              <CardContent>
                <Input
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={user.password}
                  autoComplete="current-password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </CardContent>
              <CardContent>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={buttonDisabled}
                >
                  {buttonDisabled ? "No Signup" : "Signup"}
                </Button>
              </CardContent>
            </form>
            <Separator />
            <CardFooter className="mt-4 flex gap-3">
              <p>Already have an account? </p>
              <Link
                className="text-blue-500 hover:text-gray-900 duration-500"
                href="/auth/signup"
              >
                Login here.
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
