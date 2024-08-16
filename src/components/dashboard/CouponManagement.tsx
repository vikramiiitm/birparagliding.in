"use client";

import React, { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import Link from "next/link";
    







const CouponManagement = () => {
  const router = useRouter();
  const [coupons, setCoupons] = useState<
    {
      [x: string]: ReactNode;
      _id: string;
    }[]
  >([]);
  const [formData, setFormData] = useState({
    code: "",
    discountAmount: "",
   
  });

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const response = await axios.get("/api/booking/coupon");
      setCoupons(response.data);
    } catch (error) {
      console.error("Error fetching coupons:", error);
      toast.error("Error fetching coupons");
    }
  };

  const handleDeleteClick = (id: string) => {
       axios.delete(`/api/booking/coupon?id=${id}`);
      fetchCoupons();
      toast.success("Coupon deleted successfully");
    
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/booking/coupon", formData);
      toast.success("Coupon created successfully");
      setFormData({
        code: "",
        discountAmount: "",
       
      });
      fetchCoupons();
    } catch (error) {
      console.error("Error submitting coupon:", error);
      toast.error("Error submitting coupon");
    }
  };

  return (
    <div className="px-10 max-w-7xl mx-auto py-10  gap-8">
      <Link
        href="/dashboard"
        className=" px-6 hover:bg-gray-900 p-2 bg-black text-white rounded "
      >
        Back
      </Link>
      <div className="mt-6">
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Create Coupon</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                required
                placeholder="Enter coupon code"
              />
            </CardContent>
            <CardContent>
              <Input
                type="number"
                id="discountAmount"
                name="discountAmount"
                value={formData.discountAmount}
                onChange={handleChange}
                required
                min="0"
                placeholder="Enter discount amount"
              />
            </CardContent>
            {/* <CardContent>
              <Input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                min="1"
                placeholder="Enter duration in days"
              />
            </CardContent>
            <CardContent className="flex gap-2">
              <input
                type="checkbox"
                id="isActive"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              <label
                htmlFor="isActive"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Is Active
              </label>
            </CardContent> */}
            <CardContent>
              <Button type="submit">Create Coupon</Button>
            </CardContent>
          </form>
        </Card>
      </div>
      <div className="mt-4">
        <h2 className="font-bold">Existing Coupons</h2>
        <table className="mt-4 min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount Amount
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coupons.map((coupon) => (
              <tr key={coupon._id}>
                <td className="px-6 py-4 whitespace-nowrap">{coupon.code}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {coupon.discountAmount}
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  {coupon.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {coupon.isActive ? "Active" : "Inactive"}
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button onClick={() => handleDeleteClick(coupon._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponManagement;
