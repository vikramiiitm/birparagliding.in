// pages/SuccessPage.tsx
"use client"










import axios from "axios"; // Import Axios
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface UserRegistration {
  _id: string;
  name: string;
  email: string;
  amount: number;
  orderId: string;
  timeSlot: string;
  phoneNumber: string;
  participants: number;
  flypackage:string;
  code:string;
  date: string;
  flyDate: string;
}

function SuccessPage() {
  const [registrations, setRegistrations] = useState<UserRegistration[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState({
    // name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (
      // !searchParams.name ||
      !searchParams.email 
    ) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/booking/reciept", searchParams);

      if (response.data.success) {
        setRegistrations(response.data.data);
      } else {
        setError(response.data.error || "An unknown error occurred");
      }
    } catch (error) {
      setError(
         "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col justify-around items-center p-5 h-full py-32">
        {/* Search Form */}
        <Card className="w-full md:w-96 mb-8  border ">
          <CardHeader>
            <CardTitle>Find Your Receipt</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="flex flex-col gap-2">
              {/* <Input
                id="name"
                name="name"
                type="text"
                value={searchParams.name}
                onChange={handleChange}
                placeholder="Name"
              /> */}
              <Input
                id="email"
                name="email"
                type="email"
                value={searchParams.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {/* <Input
                type="date"
                required
                value={searchParams.flyDate}
                onChange={handleChange}
              /> */}
              {/* <Input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={searchParams.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <Input
                id="participants"
                name="participants"
                type="number"
                value={searchParams.participants}
                onChange={handleChange}
                placeholder="Participants"
              /> */}
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-100 hover:border hover:text-black"
              >
                Search
              </Button>
            </CardContent>
          </form>
        </Card>

        {/* Results */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {registrations.length === 0 && !loading && !error && (
          <p>No registrations found.</p>
        )}

        {registrations.length > 0 && (
          <div className=" w-full md:w-[80%] md:mx-auto ">
            <Card className=" w-full md:w-[80vw] h-full  pb-5 mt-4 bg-transparent">
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
              </CardHeader>
              {registrations.map((user) => (
                <CardContent key={user._id} className="relative">
                  <span className="absolute text-[3rem] md:text-[7rem] -rotate-45 bottom-48 left-28 text-bold text-gray-100 -z-20">SKYCANDY</span>
                  <table className="w-full border-collapse overflow-auto text-sm md:text-base">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Registration ID:</td>
                        <td className="px-4 py-2 ">{user.orderId}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Name:</td>
                        <td className="px-4 py-2">{user.name}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Email:</td>
                        <td className="px-4 py-2">{user.email}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">
                          Phone Number:
                        </td>
                        <td className="px-4 py-2">{user.phoneNumber}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">
                          Participants:
                        </td>
                        <td className="px-4 py-2">{user.participants}</td>
                      </tr>
                     
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Coupon Code:</td>
                        <td className="px-4 py-2">{user.code}</td>
                      </tr>
                     
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Time Slot:</td>
                        <td className="px-4 py-2">{user.timeSlot}</td>
                      </tr>
                     
                    
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Fly Package:</td>
                        <td className="px-4 py-2">{user.flypackage}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Amount:</td>
                        <td className="px-4 py-2">{user.amount}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Date:</td>
                        <td className="px-4 py-2">
                          {new Date(user.date).toLocaleString()}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Fly Date:</td>
                        <td className="px-4 py-2">
                          {new Date(user.flyDate).toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              ))}
            </Card>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default SuccessPage;