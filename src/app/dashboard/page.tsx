"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
  date: string;
}

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [totalRegistrations, setTotalRegistrations] = useState<number>(0);
  const [monthlyRegistrations, setMonthlyRegistrations] = useState<number>(0);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("/api/booking/register");
        if (response.data.success) {
          const bookings = response.data.data;
          setBookings(bookings);
          calculateMetrics(bookings);
        } else {
          setError("Failed to fetch bookings");
        }
      } catch (err) {
        setError("An error occurred while fetching bookings");
      } finally {
        setLoading(false);
      }
    };

    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/contact");
        if (response.data.success) {
          const contacts = response.data.data;
          setContacts(contacts);
        } else {
          setError("Failed to fetch contacts");
        }
      } catch (err) {
        setError("An error occurred while fetching contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
    fetchContacts();
  }, []);

  const calculateMetrics = (bookings: Booking[]) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let totalRevenue = 0;
    let totalRegistrations = 0;
    let monthlyRevenue = 0;
    let monthlyRegistrations = 0;

    bookings.forEach((booking) => {
      totalRevenue += booking.amount;
      totalRegistrations += 1;

      const regDate = new Date(booking.date);
      if (
        regDate.getMonth() === currentMonth &&
        regDate.getFullYear() === currentYear
      ) {
        monthlyRevenue += booking.amount;
        monthlyRegistrations += 1;
      }
    });

    setTotalRevenue(totalRevenue);
    setTotalRegistrations(totalRegistrations);
    setMonthlyRevenue(monthlyRevenue);
    setMonthlyRegistrations(monthlyRegistrations);
  };

  const barData = {
    labels: ["Total Revenue", "Monthly Revenue"],
    datasets: [
      {
        label: "Amount",
        data: [totalRevenue, monthlyRevenue],
        backgroundColor: ["rgba(75, 192, 192)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              {totalRevenue.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              {monthlyRevenue.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              {totalRegistrations}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              {monthlyRegistrations}
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="w-full mt-4">
        <CardHeader>
          <CardTitle>Overall Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar
            data={barData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </CardContent>
      </Card>
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
      <Card className="w-full mt-4">
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
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
                    Email
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {contact.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {contact.email}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {contact.message}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {contact.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      {new Date(contact.date).toLocaleString()}
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
