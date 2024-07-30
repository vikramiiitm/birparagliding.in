// "use client"


// import React, { useState } from "react";
// import axios from "axios";

// const CouponForm = () => {
//   const [formData, setFormData] = useState({
//     code: "",
//     discountAmount: "",
//     duration: "",
//     isActive: true,
//   });

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/api/booking/coupon", formData);
//       console.log("Coupon created successfully:", response.data);
//       // Handle success, e.g., reset form, show success message
//       setFormData({
//         code: "",
//         discountAmount: "",
//         duration: "",
//         isActive: true,
//       });
//     } catch (error) {
//       console.error("Error creating coupon:", error);
//       // Handle error, e.g., show error message
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="code">Code:</label>
//         <input
//           type="text"
//           id="code"
//           name="code"
//           value={formData.code}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="discountAmount">Discount Amount:</label>
//         <input
//           type="number"
//           id="discountAmount"
//           name="discountAmount"
//           value={formData.discountAmount}
//           onChange={handleChange}
//           required
//           min="0"
//         />
//       </div>

//       <div>
//         <label htmlFor="duration">Duration (days):</label>
//         <input
//           type="number"
//           id="duration"
//           name="duration"
//           value={formData.duration}
//           onChange={handleChange}
//           required
//           min="1"
//         />
//       </div>

//       <div>
//         <label htmlFor="isActive">Is Active:</label>
//         <input
//           type="checkbox"
//           id="isActive"
//           name="isActive"
//           checked={formData.isActive}
//           onChange={handleChange}
//         />
//       </div>

//       <button type="submit">Create Coupon</button>
//     </form>
//   );
// };

// export default CouponForm;




import CouponManagement from '@/components/dashboard/CouponManagement'

import React from 'react'

function page() {
  return (
    <div>
      
      <CouponManagement />
    </div>
  );
}

export default page