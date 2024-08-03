"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";







interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: number;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: 9999999999,
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phoneNumber: 0, message: "" }); // Clear form
    } catch (error: any) {
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className="bg-[#e7de7b]">
      <Navbar />
      <div className="  w-full items-center justify-center flex flex-col md:flex-row ">
        <div className="md:w-1/2 w-full p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6  ">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </CardContent>
              <CardContent>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="user@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </CardContent>
              <CardContent>
                <Input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                />
              </CardContent>
              <CardContent>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                />
              </CardContent>

              <CardContent>
                <Button type="submit">Send Message</Button>
              </CardContent>
            </Card>

            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
          </form>
        </div>

        <div className="p-10 w-full md:w-1/2  md:h-screen flex justify-center items-center">
          <Card className="bg-yellow-500 ">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Contact No :</strong> 9736333133, 7550733333
              </p>
            </CardContent>
            <CardContent>
              <p>
                <strong> Email :</strong>{" "}
                <a className="text-blue-500" href="mailto:manu@skycandy.in">
                  manu@skycandy.in
                </a>
              </p>
            </CardContent>
            <CardContent>
              <p>
                <strong>Office: </strong> SkyCandy High Adventure Village Kotli,
                Bir Billing Road, P.O. Bir, Distt Kangra HP (India) – 176077
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
