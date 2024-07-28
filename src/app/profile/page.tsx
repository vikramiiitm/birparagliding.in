"use client";

import Axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";



export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("");


    const logout = async () => {

        try {

           await Axios.get("/api/user/logout")
           router.push("/login")
            
        } catch (error) {
            console.log(error)
        }

    }


    const getUserDetails = async () => {
        const res = await Axios.get("/api/user/me");
        console.log(res.data.data._id);
        setData(res.data.data._id)
        
        console.log(data);
    }
    

    return (
      <div>
        <h1>Profile</h1>
        <hr />
        <h2>
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>

        <button onClick={logout}>Logout</button>
        <button onClick={getUserDetails}>Get User Details</button>
      </div>
    );
}