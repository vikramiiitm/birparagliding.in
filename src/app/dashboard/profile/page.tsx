


"use client";

import Axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HashLoader from "react-spinners/HashLoader";
interface User {
  _id: string;
  username: string;
  email: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await Axios.get("/api/user/me");
        setUser(res.data.data);
      } catch (error) {
        console.error("Failed to fetch user details", error);
      } finally {
        setLoading(false);
      }
    };

    getUserDetails();
  }, []);



  const handleClick = async () => {
    router.push(`/dashboard/profile/${user?._id}`);
  }

  if (loading) {
    return (
      <p className="flex mx-auto h-screen justify-center items-center text-6xl">
        <HashLoader
          color="#000"
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </p>
    );
  }

  if (!user) {
    return <div>Failed to load user details.</div>;
  }

  return (
    <div className="px-5 py-5">
      <Link
        href="/dashboard"
        className=" px-6 hover:bg-gray-900 p-2 bg-black text-white rounded"
      >
        {" "}
        Back{" "}
      </Link>
      <Card className="m-4 w-full md:max-w-4xl mx-auto mt-12">
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Input readOnly value={user._id} placeholder="UserId" />
        </CardContent>
        <CardContent>
          <Input readOnly value={user.username} placeholder="Username" />
        </CardContent>
        <CardContent>
          <Input readOnly value={user.email} placeholder="Email" />
        </CardContent>
        <CardFooter className="flex w-full flex-col md:flex-row justify-between px-5">
          <p>Want to update? click update</p>
          <Button onClick={handleClick} className="w-full md:w-40 mt-4 md:mt-0">
            Update User
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
