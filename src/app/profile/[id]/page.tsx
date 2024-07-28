'use client'


import { useState } from "react";
import Axios from "axios";

const UserProfile = ({ params }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await Axios.patch("/api/user/user-update", {
        id: params.id,
        username,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        setMessage(`Success: ${data.message}`);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error: any) {
      setMessage(
        error.response
          ? `Error: ${error.response.data.message}`
          : "An error occurred while updating the user."
      );
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserId:</label>
          <input type="text" value={params.id} readOnly required />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};



export default UserProfile;