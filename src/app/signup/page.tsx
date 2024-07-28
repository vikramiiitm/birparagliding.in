"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Axios from "axios";

export default function SignUpPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    setErrorMessage(""); // Reset the error message

    try {
      const response = await Axios.post("/api/user/signup", user);
      console.log("Signup Success", response.data);
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (error: any) {
      console.log("Signup failed", error);
      setErrorMessage(error.response?.data?.message || "An error occurred"); // Display server-side validation errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>{loading ? "Loading....." : "Signup"}</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={onSignup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={user.password}
          autoComplete="current-password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit" disabled={buttonDisabled}>
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
      </form>
    </div>
  );
}
