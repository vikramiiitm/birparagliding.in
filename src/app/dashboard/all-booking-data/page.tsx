"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HashLoader from "react-spinners/HashLoader";
import Link from "next/link";


interface Booking {
  _id: string;
  name: string;
  flypackage: string;
  amount: number;
  phoneNumber: number;
  email: string;
  orderId: string;
  date: string;
}



const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("/api/booking/register");
        if (response.data.success) {
          const bookings = response.data.data;

          const sortedPosts = bookings.sort(
            (a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) =>
              new Date(b.createdAt!).getTime() -
              new Date(a.createdAt!).getTime()
          );
          setBookings(sortedPosts);
          
        } else {
          setError("Failed to fetch bookings");
        }
      } catch (err) {
        setError("An error occurred while fetching bookings");
      } finally {
        setLoading(false);
      }
    };

   

    fetchBookings();
  }, []);

  

  

  if (loading) return (
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
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 space-y-4">
      <Link
        href="/dashboard"
        className=" px-6 hover:bg-gray-900 p-2 bg-black text-white rounded my-5"
      >
        Back
      </Link>
      <Card className="w-full mt-4">
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Package
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.flypackage}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.email}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.orderId}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {new Date(booking.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
