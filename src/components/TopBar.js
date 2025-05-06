import React from 'react'
import NotificationComponent from "@/components/NotificationComponent";
import AvatarComponent from "@/components/AvatarComponent";

const TopBar = ({username}) => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-2xl font-semibold capitalize mt-2'>Welcome {username}</h1>
      <div className='flex items-center gap-4'>
        <NotificationComponent />
        <AvatarComponent name={username} />
      </div>
    </div>
  )
}

export default TopBar
