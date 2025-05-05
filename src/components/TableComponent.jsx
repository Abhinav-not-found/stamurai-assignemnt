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
import { Label } from "@/components/ui/label"
import { SelectNative } from "@/components/ui/select-native"

const TableComponent = ({data}) => {
  console.log(data)
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
          
          <TableRow>
            <TableCell>Sample</TableCell>
            <TableCell className={"text-muted-foreground"}>
              This is a sample desc
            </TableCell>
            <TableCell>January 1, 2024</TableCell>
            <TableCell>
              <Badge>High</Badge>
            </TableCell>
            <TableCell>
              <div className='w-fit'>
                <SelectNative>
                  <option value='pending'>Pending</option>
                  <option value='inProgress'>In progress</option>
                  <option value='completed'>Completed</option>
                </SelectNative>
              </div>
            </TableCell>
            <TableCell className={"flex h-full gap-4 justify-start"}>
              <button className="mt-3">
                <SquarePen className='w-4 h-4 cursor-pointer' />
              </button>
              <button className="mt-3">
                <Trash className='w-4 h-4 cursor-pointer' />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
