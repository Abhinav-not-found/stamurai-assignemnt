import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AvatarComponent = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.get("/api/logout");
      localStorage.clear()
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={"cursor-pointer"}>
          <AvatarImage src='' alt='Kelly King' />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <Button onClick={handleLogout}  variant={'ghost'} className={'w-full'}><LogOut />Logout</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarComponent;
