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


import WorldMap from '../../../public/home/WorldMap.png'
import Image from 'next/image'



interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
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
      setFormData({ name: "", email: "", phoneNumber: "", message: "" }); // Clear form
    } catch (error: any) {
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className="">
      <Navbar />
      <section className="relative">
        <div className="w-full h-[40vh] bg-[#3361AC] flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Contact Us</h1>
        </div>

      </section>
      <section className="bg-[#E8AF30]">

     
      <div className="  w-full items-center justify-center flex flex-col  max-w-5xl mx-auto px-5 py-10 gap-5">
        <div className="w-full  flex justify-center items-center gap-5 -mt-20 z-20">
          <Card className=" w-full h-[30vh] bg-[#3361AC] text-white flex flex-col items-center justify-center border rounded-none">
            <CardHeader>
                <p ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone text-[#E8AF30]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></p>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Contact No :</strong> 9736333133, 7550733333
              </p>
            </CardContent>
            <CardContent>
              <p>
                <strong> Email :</strong>{" "}
                  <a className="text-[#E8AF30] font-bold" href="mailto:manu@skycandy.in">
                  manu@skycandy.in
                </a>
              </p>
            </CardContent>
           
          </Card>
            <Card className="border rounded-none w-full h-[30vh] bg-[#3361AC] flex flex-col items-center justify-center">
            <CardHeader>
                <p ><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin text-[#E8AF30]"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg></p>
            </CardHeader>
           
            <CardContent>
              <p className="px-10 text-xl text-white">
                <strong>Office: </strong> SkyCandy High Adventure Village Kotli,
                Bir Billing Road, P.O. Bir, Distt Kangra HP (India) – 176077
              </p>
            </CardContent>
          </Card>
        </div>

        <div className=" w-full ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6  ">
            <Card>
              <CardHeader>
                  <CardTitle className="text-[#3361AC]">Get In Touch With Us</CardTitle>
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
                  placeholder="Phone Number with country code"
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
                  <Button type="submit" className="bg-[#3361AC]">Send Message</Button>
              </CardContent>
            </Card>

            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
          </form>
        </div>

        
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
