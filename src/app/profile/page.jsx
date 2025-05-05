'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("");

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/profile");
      // console.log(res.data.data._id);
      setData(res.data.data._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    getUserDetails()
  },[])

  const handleLogout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1>Profile page</h1>
        <button onClick={handleLogout} className='py-1 px-4 border border-black rounded-md cursor-pointer mt-4 disabled:text-gray-300 disabled:border-gray-300'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
