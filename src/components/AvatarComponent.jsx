import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AvatarComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={"cursor-pointer"}>
          <AvatarImage src='' alt='Kelly King' />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>hi</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarComponent;
