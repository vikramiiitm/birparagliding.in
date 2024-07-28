

import { cookies } from "next/headers";
import { use } from "react";

interface UserRegistration {
  _id: string;
  name: string;
  email: string;
  amount: number;
  currency: string;
  orderId: string;
  timeSlot: string;
  phoneNumber: number;
  participants: number;
  duration: string;
  date: string;
  flyDate: string;
}

async function fetchRegistrations(query: URLSearchParams) {
  const response = await fetch(`/api/userRegistration?${query.toString()}`, {
    next: { revalidate: 10 }, // Adjust revalidation time as needed
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || "Failed to fetch data");
  }
  return result.data;
}

export default async function RegistrationsPage({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const query = new URLSearchParams(searchParams);
  const [registrations, error] = await use(fetchRegistrations(query)).catch(
    (err: any) => [[], err.message]
  );

  return (
    <div className="flex flex-col justify-around items-center p-10">
      <div className="w-[80%] mx-auto">
        <div className="px-5 w-full md:w-[80vw] h-[60vh] overflow-hidden pb-5 mt-4">
          {error && <div>Error: {error}</div>}
          {registrations.length === 0 && !error && (
            <div>No registrations found.</div>
          )}
          {registrations.length > 0 && (
            <div>
              <h2>Your Details</h2>
              {registrations.map((user: any) => (
                <div key={user._id}>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Name:</td>
                        <td className="px-4 py-2">{user.name}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Email:</td>
                        <td className="px-4 py-2">{user.email}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Amount:</td>
                        <td className="px-4 py-2">{user.amount}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Currency:</td>
                        <td className="px-4 py-2">{user.currency}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Order ID:</td>
                        <td className="px-4 py-2">{user.orderId}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">Time Slot:</td>
                        <td className="px-4 py-2">{user.timeSlot}</td>
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
                        <td className="px-4 py-2 font-semibold">Duration:</td>
                        <td className="px-4 py-2">{user.duration}</td>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
