"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface Booking {
  _id: string;
  name: string;
  package: string;
  amount: number;
  number: number;
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
          setBookings(bookings);
          
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

  

  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 space-y-4">
     




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
                      {booking.package}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {booking.number}
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
