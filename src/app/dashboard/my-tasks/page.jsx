"use client";
import AvatarComponent from "@/components/AvatarComponent";
import CreateTaskComponent from "@/components/CreateTaskComponent";
import NotificationComponent from "@/components/NotificationComponent";
import TableComponent from "@/components/TableComponent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, Rows2, TableProperties } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  return (
    <Tabs defaultValue='table' className='w-full'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold mt-2'>Welcome kk</h1>
        <div className='flex items-center gap-4'>
          <NotificationComponent />
          <AvatarComponent />
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl w-full h-full mt-2 p-4">
        <div className=' flex justify-between'>
          <p className='text-2xl font-semibold'>My Tasks</p>
          <div className='flex gap-4'>
            <TabsList>
              <TabsTrigger value='table'>
                <TableProperties />
              </TabsTrigger>
              <TabsTrigger value='list'>
                <Rows2 />
              </TabsTrigger>
              <TabsTrigger value='card'>
                <LayoutGrid />
              </TabsTrigger>
            </TabsList>
            <CreateTaskComponent />
          </div>
        </div>
        <div>
          <TabsContent value='table'>
            <TableComponent/>
          </TabsContent>
          <TabsContent value='list'>list</TabsContent>
          <TabsContent value='card'>card content</TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export default page;
