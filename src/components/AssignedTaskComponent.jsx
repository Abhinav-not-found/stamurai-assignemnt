import React from "react";
import TaskComponent from "@/components/TaskComponent";


const AssignedTaskComponent = () => {
  return (
    <div>
      <p className='text-2xl capitalize'>assigned tasks</p>
      <div className='flex flex-col gap-4'>
        <TaskComponent />
        <TaskComponent />
      </div>
    </div>
  );
};

export default AssignedTaskComponent;
