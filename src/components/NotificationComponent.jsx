'use client'
import React from "react";
import NotificationButton from "@/components/NotificationButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NotificationComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <NotificationButton />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>hi</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationComponent;
