'use client'
import React, { useEffect, useState } from "react";
import SmallCard from "@/components/cards/SmallCard";
import AssignedTaskComponent from "@/components/AssignedTaskComponent";
import MyTaskComponent from "@/components/MyTaskComponent";
import axios from "axios";
import TopBar from "@/components/TopBar";

const Dashboard = () => {

  const [username, setUsername] = useState(null);

  // console.log(username)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.post("/api/user/profile");
        const id = res.data.data._id;
        const name = res.data.data.name;
        // console.log(res.data)
        setUsername(name);
        localStorage.setItem("userId", id);
      } catch (error) {
        console.error("Failed to fetch user data:", error.message);
      }
    };

    fetchUserDetails();
  }, []);


  return (
    <div className='w-full'>
      <TopBar username={username} />
      <div className='bg-gray-100 rounded-xl w-full h-full mt-2 p-4'>
        <p className='text-2xl font-semibold'>Dashboard</p>
        {/* <div className="flex gap-4 mt-2">
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
        </div> */}
        <div className='flex w-full'>
          <div className='w-full mt-4'>
            <AssignedTaskComponent/>
            <MyTaskComponent/>
          </div>
          <div className="w-1/3">
            <p>overdue tasks</p>
            <p>overview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
