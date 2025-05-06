"use client";

import AvatarComponent from "@/components/AvatarComponent";
import CreateTaskComponent from "@/components/CreateTaskComponent";
import NotificationComponent from "@/components/NotificationComponent";
import TableComponent from "@/components/TableComponent";
import TopBar from "@/components/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { LayoutGrid, Rows2, TableProperties } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const [allTasks, setAllTasks] = useState([]);

  // Fetch user data once, then fetch tasks
  useEffect(() => {
    const fetchUserAndTasks = async () => {
      try {
        const res = await axios.post("/api/user/profile");
        const { _id, name } = res.data.data;
        setUsername(name);
        setUserId(_id);
        localStorage.setItem("userId", _id);

        const taskRes = await axios.get(`/api/task/getAllTasks/${_id}`);
        if (taskRes.status === 200) {
          setAllTasks(taskRes.data.tasks);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchUserAndTasks();
  }, []);

  const refreshTasks = async () => {
    if (!userId) return;
    try {
      const res = await axios.get(`/api/task/getAllTasks/${userId}`);
      if (res.status === 200) {
        setAllTasks(res.data.tasks);
      }
    } catch (error) {
      console.error("Failed to refresh tasks:", error.message);
    }
  };

  return (
    <Tabs defaultValue='table' className='w-full'>
      <TopBar username={username} />
      <div className='bg-gray-100 rounded-xl w-full h-full mt-2 p-4'>
        <div className='flex justify-between'>
          <p className='text-2xl font-semibold'>My Tasks</p>
          <div className='flex gap-4'>
            <TabsList>
              <TabsTrigger value='table'><TableProperties /></TabsTrigger>
              <TabsTrigger value='list'><Rows2 /></TabsTrigger>
              <TabsTrigger value='card'><LayoutGrid /></TabsTrigger>
            </TabsList>
            <CreateTaskComponent onTaskCreated={refreshTasks} />
          </div>
        </div>
        <div>
          <TabsContent value='table'>
            <TableComponent
              data={allTasks}
              onTaskUpdate={refreshTasks}
              onTaskDelete={refreshTasks}
            />
          </TabsContent>
          <TabsContent value='list'>list</TabsContent>
          <TabsContent value='card'>card content</TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export default Page;
