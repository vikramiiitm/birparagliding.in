"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const TourForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<number>(1500); // default value
  const [currency, setCurrency] = useState<string>("INR");
  const [timeSlot, setTimeSlot] = useState<string>("Sun Rise");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [participants, setParticipants] = useState<number>(1);
  const [duration, setDuration] = useState<string>("");
  const [paymentId, setPaymentId] = useState<string | undefined>(undefined);
  const [flyDate, setFlyDate] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<number>(1500);
  const [flypackage, setFlypackage] = useState<string>(""); // Added package state
  const [couponCode, setCouponCode] = useState<string>("No Coupon");
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTotalAmount(amount * participants - discount);
  }, [amount, participants, discount]);

  const createOrderId = async (): Promise<string | undefined> => {
    try {
      const response = await fetch("/api/booking/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalAmount * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return data.orderId;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const orderId = await createOrderId();
      if (!orderId) return;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100,
        name: "Paragliding Service",
        description: "Paragliding Registration",
        order_id: orderId,
        handler: async (response: any) => {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch("/api/booking/verify", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });

          const res = await result.json();
          if (res.isOk) {
            alert("Payment succeeded");

            // Assume userId is available; replace with actual user ID
            const userId = "example-user-id";

            // Send registration data to the API
            const registrationResponse = await fetch("/api/booking/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                amount: totalAmount,
                currency,
                orderId: response.razorpay_order_id,
                timeSlot,
                phoneNumber,
                participants,
                couponCode,
                duration,
                flypackage, // Include package state in the registration data
                paymentId,
                flyDate: new Date(flyDate),
              }),
            });

            if (registrationResponse.ok) {
              alert("Registration data saved successfully");

              // Store coupon usage
            } else {
              alert("Failed to save registration data");
            }
          } else {
            alert(res.message);
          }
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", (response: any) => {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <section className="h-full flex flex-col gap-6 w-full mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-10">
        <h1 className="text-xl font-bold">Book Your Slot Now</h1>
        <form
          className="flex flex-col gap-6 w-full sm:w-80"
          onSubmit={processPayment}
        >
          <div className="space-y-1">
            <Label>Full name</Label>
            <Input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="user@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>Package</Label>
            <Select
              onValueChange={(value) => {
                setFlypackage(value);
                setAmount(flypackage === "Standard" ? 1500 : 2000); // Adjust amounts as needed
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select package" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Standard">Standard</SelectItem>
                <SelectItem value="Deluxe">Deluxe</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label>Coupon Code</Label>
            <Input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
            />
          </div>
          <div className="space-y-1">
            <Label>Phone Number</Label>
            <Input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(Number(e.target.value))}
            />
          </div>
          <div className="space-y-1">
            <Label>Participants</Label>
            <Input
              type="number"
              min={1}
              required
              value={participants}
              onChange={(e) => setParticipants(Number(e.target.value))}
            />
          </div>
          <div className="space-y-1">
            <Label>Duration</Label>
            <Input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g., 30 mins"
            />
          </div>
          <div className="space-y-1">
            <Label>Fly Date</Label>
            <Input
              type="date"
              required
              value={flyDate}
              onChange={(e) => setFlyDate(e.target.value)}
            />
          </div>
          <Button type="submit" className="bg-primary">
            Pay {totalAmount} {currency}
          </Button>
        </form>
      </section>
    </>
  );
};

export default TourForm;
