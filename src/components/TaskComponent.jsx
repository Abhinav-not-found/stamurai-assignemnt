
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextCard from "./cards/TextCard";

const TaskComponent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TextCard/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div>
          hi
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskComponent;
