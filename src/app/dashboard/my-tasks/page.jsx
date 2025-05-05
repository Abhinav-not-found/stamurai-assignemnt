import AvatarComponent from "@/components/AvatarComponent";
import NotificationComponent from "@/components/NotificationComponent";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

const page = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold mt-2'>Welcome kk</h1>
        <div className='flex items-center gap-4'>
          <NotificationComponent />
          <AvatarComponent />
        </div>
      </div>
      <div className='bg-gray-100 rounded-xl w-full h-full mt-2 p-4 flex justify-between'>
        <p className='text-2xl font-semibold'>My Tasks</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a task</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader> 
            <div>hi</div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default page;
