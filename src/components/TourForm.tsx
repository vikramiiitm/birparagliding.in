


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
import Link from "next/link";
import axios from "axios";

const TourForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<number>(0); // default value
  const [currency, setCurrency] = useState<string>("INR");
  const [timeSlot, setTimeSlot] = useState<string>("Sun Rise");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [participants, setParticipants] = useState<number>(1);
  const [paymentId, setPaymentId] = useState<string | undefined>(undefined);
  const [flyDate, setFlyDate] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<number>(2499);
  const [flypackage, setFlypackage] = useState<string>("Classic");
  const [code, setCode] = useState<string>("FLYCODE199");
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Ensure totalAmount is never NaN
    const calculatedAmount = amount * participants - discount;
    setTotalAmount(calculatedAmount > 0 ? calculatedAmount : 0);
  }, [amount, participants, discount]);

const verifyCoupon = async () => {
  try {
    const response = await axios.post(
      "/api/booking/verify-coupon",
      { code },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    if (data.valid) {
      setDiscount(data.discount);
      alert(`Coupon applied! You get a Rs ${data.discount} discount.`);
    } else {
      alert(data.message);
      setDiscount(0);
    }
  } catch (error) {
    if (error) {
      
      alert( "Error verifying coupon");
    } else if (error) {
      
      alert("Error verifying coupon: no response received");
    } else {
      
      alert("Error verifying coupon");
    }
    setDiscount(0);
  }
};


  const createOrderId = async (): Promise<string | undefined> => {
    try {
      const response = await fetch("/api/booking/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalAmount * 100, // Convert to paise
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
    if (totalAmount <= 0) {
      alert("Invalid amount. Please check your details.");
      return;
    }

    try {
      const orderId = await createOrderId();
      if (!orderId) return;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100, // Convert to paise
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

          //   const res = await result.json();
          //   if (res.isOk) {
          //     alert("Payment succeeded");

          //     const registrationResponse = await fetch("/api/booking/register", {
          //       method: "POST",
          //       headers: {
          //         "Content-Type": "application/json",
          //       },
          //       body: JSON.stringify({
          //         name,
          //         email,
          //         amount: totalAmount,
          //         currency,
          //         orderId: response.razorpay_order_id,
          //         timeSlot,
          //         phoneNumber,
          //         participants,
          //         code,
          //         flypackage,
          //         paymentId: response.razorpay_payment_id,
          //         flyDate: new Date(flyDate),
          //       }),
          //     });

          //     if (registrationResponse.ok) {
          //       alert("Registration data saved successfully");
          //     } else {
          //       alert("Failed to save registration data");
          //     }
          //   } else {
          //     alert(res.message);
          //   }
          // },

          const res = await result.json();
          if (res.isOk) {
            alert("Payment succeeded");

            const registrationPayload = {
              name,
              email,
              amount: totalAmount,
              currency,
              orderId: response.razorpay_order_id,
              timeSlot,
              phoneNumber,
              participants,
              code,
              flypackage,
              paymentId: response.razorpay_payment_id,
              flyDate: new Date(flyDate),
            };

            console.log("Registration Payload:", registrationPayload); // Log the payload here

            const registrationResponse = await fetch("/api/booking/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(registrationPayload),
            });

            if (registrationResponse.ok) {
              alert("Registration data saved successfully");
            } else {
              const errorData = await registrationResponse.json();
              alert(`Failed to save registration data: ${errorData.message}`);
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
          className="flex flex-col gap-6 w-full lg:w-full"
          onSubmit={processPayment}
        >
          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Full name</Label>
            <Input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Email</Label>
            <Input
              type="email"
              placeholder="user@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Package</Label>
            <Select
              onValueChange={(value) => {
                setFlypackage(value);
                if (value === "Classic") {
                  setAmount(2499);
                } else if (value === "Premium") {
                  setAmount(4499);
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select package"   />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Classic">Classic</SelectItem>
                <SelectItem value="Premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* info tab for duration */}

          <div className="text-[#3361AC] text-lg font-bold">
            <p>Classic : 20-25 min</p>
            <p>Premium : 40-45 min</p>
          </div>

          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Time Slot</Label>
            <Select onValueChange={(value) => setTimeSlot(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sun Rise">Sun Rise</SelectItem>
                <SelectItem value="After Noon">After Noon</SelectItem>
                <SelectItem value="Sun Set">Sun Set</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Phone Number</Label>
            <Input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(Number(e.target.value))}
              placeholder="+91 1234567890"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Participants</Label>
            <Input
              type="number"
              min={1}
              required
              value={participants}
              onChange={(e) => setParticipants(Number(e.target.value))}
            />
          </div>

          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Fly Date</Label>
            <Input
              type="date"
              required
              value={flyDate}
              onChange={(e) => setFlyDate(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[#E8AF30] text-lg font-bold">Coupon Code</Label>
            <Input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter coupon code"
            />
            <Button
              type="button"
              onClick={verifyCoupon}
              className="bg-[#3361AC] hover:bg-[#E8AF30] hover:text-black mt-4"
            >
              Apply Coupon
            </Button>
          </div>
          <Button type="submit" className="bg-[#3361AC] hover:bg-[#E8AF30] hover:text-black ">
            Pay {totalAmount.toLocaleString()} {currency}
          </Button>
        </form>

        <Link
          href="/reciept"
          className="px-6 w-full text-center  p-2 bg-[#3361AC] hover:bg-[#E8AF30] hover:text-black duration-500 text-white rounded"
        >
          View Receipt
        </Link>
        <a
          href="https://wa.me/+919736333133?text=I'm%20interested%20in%20Paragliding%20Flying%20Tour."
          className="px-6 w-full text-center hover:bg-green-600 p-2 bg-green-500 text-white rounded"
        >
          Contact us on Whatsapp
        </a>
      </section>
    </>
  );
};

export default TourForm;
