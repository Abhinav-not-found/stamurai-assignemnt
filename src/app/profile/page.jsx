'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  console.log(data)

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/user/profile");
      // console.log(res.data.data._id);
      setData(res.data.data._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    getUserDetails()
  },[])


  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1>Profile page</h1>
      </div>
    </div>
  );
};

export default Profile;
