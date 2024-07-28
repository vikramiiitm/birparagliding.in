"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Axios from "axios";

export default function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true);
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await Axios.post("/api/user/login", user); // Use appropriate API endpoint for login
      console.log("Login Success:", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred during login."
      ); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>{loading ? "Loading....." : "Login"}</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={onSignIn}>
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
          autoComplete="current-password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit" disabled={buttonDisabled}>
          {buttonDisabled ? "No Login" : "Login"}
        </button>
      </form>
    </div>
  );
}
