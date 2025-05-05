import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

const TableComponent = ({ data }) => {
  // console.log(data);
  const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString)
    .toLocaleDateString('en-US', options)
    .replace(',', '');
};

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className='hover:bg-transparent'>
            <TableHead>Task</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className={"text-start"}>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(data) ? (
            data.map((task) => (
              <TableRow key={task._id}>
                <TableCell>{task.title || "Sample"}</TableCell>
                <TableCell className={"text-muted-foreground"}>
                  {task.description || "This is a sample desc"}
                </TableCell>
                <TableCell>{formatDate(task.date) || "January 1, 2024"}</TableCell>
                <TableCell className={'capitalize'}>
                  {task.priority ==='low' ? 
                  
                  <Badge className={'bg-green-600'}>{task.priority || "High"}</Badge>
                  :
                  task.priority ==='medium' ? 
                  <Badge className={'bg-yellow-500'}>{task.priority || "High"}</Badge>
                  :
                  <Badge className={'bg-red-600'}>{task.priority || "High"}</Badge>
                }
                </TableCell>
                <TableCell>
                  <div className='w-fit'>
                    <SelectNative defaultValue={task.status}>
                      <option value='pending'>Pending</option>
                      <option value='inProgress'>In progress</option>
                      <option value='completed'>Completed</option>
                    </SelectNative>
                  </div>
                </TableCell>
                <TableCell className={"flex h-full gap-4 justify-start"}>
                  <button className='mt-3'>
                    <SquarePen className='w-4 h-4 cursor-pointer' />
                  </button>
                  <button className='mt-3'>
                    <Trash className='w-4 h-4 cursor-pointer' />
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6}>No tasks found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
