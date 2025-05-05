import React from "react";

import NotificationComponent from "@/components/NotificationComponent";
import AvatarComponent from "@/components/AvatarComponent";
import SmallCard from "@/components/cards/SmallCard";
import AssignedTaskComponent from "@/components/AssignedTaskComponent";
import MyTaskComponent from "@/components/MyTaskComponent";

const Dashboard = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold mt-2'>Welcome kk</h1>
        <div className='flex items-center gap-4'>
          <NotificationComponent />
          <AvatarComponent />
        </div>
      </div>
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
