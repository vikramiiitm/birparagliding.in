"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  message: string;
  contacted?: boolean;
  createdAt: string;
}

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("/api/contact");
        if (!response.ok) throw new Error("Failed to fetch contacts");
        const data = await response.json();
        setContacts(data.data);
      } catch (error: any) {
        setError(error.message || "An error occurred");
      }
    };

    fetchContacts();
  }, []);

 const handleContacted = async (id: string) => {
   try {
     const response = await fetch(`/api/contact/${id}`, {
       method: "PATCH",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ contacted: true }),
     });

     if (!response.ok) throw new Error("Failed to update contact status");

     // Update the contact in the state
     setContacts((prev) =>
       prev.map((contact) =>
         contact._id === id ? { ...contact, contacted: true } : contact
       )
     );
   } catch (error: any) {
     setError(error.message || "An error occurred");
   }
 };


  return (
    <div className="p-6">
      <Link
        href="/dashboard"
        className=" px-6 hover:bg-gray-900 p-2 bg-black text-white rounded my-5"
      >
        Back
      </Link>
      <h1 className="mt-4 text-2xl font-bold mb-6">Contact List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="p-4 border rounded-lg shadow-sm  flex-col md:flex-row bg-white flex gap-4 items-center justify-between"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="text-xl font-bold uppercase text-blue-500">
                {contact.name}
              </div>
              <div>
                <strong>Email:</strong> {contact.email}
              </div>
              <div>
                <strong>Phone:</strong> {contact.phoneNumber}
              </div>
              <div>
                <strong>Message:</strong> {contact.message}
              </div>
              <div>
                <strong>Date:</strong> {new Date(contact.createdAt).toLocaleString()}
              </div>
            </div>
            <div className="">
              <Button
                onClick={() => handleContacted(contact._id)}
                disabled={contact.contacted}
              >
                {contact.contacted ? "Contacted" : "Mark as Contacted"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;
