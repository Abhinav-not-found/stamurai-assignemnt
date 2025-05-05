import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash } from "lucide-react";
import { Badge } from "./ui/badge";
import { SelectNative } from "@/components/ui/select-native";
import axios from "axios";
import { toast } from "sonner";

const TableComponent = ({ data, onTaskDelete, onTaskUpdate }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedPriority, setUpdatedPriority] = useState("low");
  const [updatedDate, setUpdatedDate] = useState("");

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options).replace(",", "");
  };

  const handleDeleteTask = async (id) => {
    try {
      const res = await axios.delete(`/api/task/deleteTask/${id}`);
      if (res.status === 200) {
        toast.success(res.data.message);
        onTaskDelete();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const startEditing = (task) => {
    setEditingTask(task._id);
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
    setUpdatedPriority(task.priority);
    setUpdatedDate(task.date?.slice(0, 10)); // Format for <input type="date">
  };

  const handleUpdateTask = async () => {
    try {
      const res = await axios.put(`/api/task/updateTask/${editingTask}`, {
        title: updatedTitle,
        description: updatedDescription,
        priority: updatedPriority,
        date: updatedDate,
      });

      if (res.status === 200) {
        toast.success("Task updated");
        setEditingTask(null);
        onTaskUpdate();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update task");
    }
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
          {Array.isArray(data) && data.length > 0 ? (
            data.map((task) => (
              <TableRow key={task._id}>
                <TableCell>
                  {editingTask === task._id ? (
                    <input
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                      className='border px-2 py-1 rounded'
                    />
                  ) : (
                    task.title || "Sample"
                  )}
                </TableCell>

                <TableCell className='text-muted-foreground'>
                  {editingTask === task._id ? (
                    <textarea
                      value={updatedDescription}
                      onChange={(e) => setUpdatedDescription(e.target.value)}
                      className='border px-2 py-1 rounded'
                    />
                  ) : (
                    task.description || "This is a sample desc"
                  )}
                </TableCell>

                <TableCell>
                  {editingTask === task._id ? (
                    <input
                      type='date'
                      value={updatedDate}
                      onChange={(e) => setUpdatedDate(e.target.value)}
                      className='border px-2 py-1 rounded'
                    />
                  ) : (
                    formatDate(task.date) || "Jan 1, 2024"
                  )}
                </TableCell>

                <TableCell className={"capitalize"}>
                  {editingTask === task._id ? (
                    <select
                      value={updatedPriority}
                      onChange={(e) => setUpdatedPriority(e.target.value)}
                      className='border px-2 py-1 rounded'
                    >
                      <option value='low'>Low</option>
                      <option value='medium'>Medium</option>
                      <option value='high'>High</option>
                    </select>
                  ) : task.priority === "low" ? (
                    <Badge className={"bg-green-600"}>{task.priority}</Badge>
                  ) : task.priority === "medium" ? (
                    <Badge className={"bg-yellow-500"}>{task.priority}</Badge>
                  ) : (
                    <Badge className={"bg-red-600"}>{task.priority}</Badge>
                  )}
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

                <TableCell className='flex gap-4 justify-start'>
                  {editingTask === task._id ? (
                    <>
                      <button
                        onClick={handleUpdateTask}
                        className='mt-3 text-green-500'
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingTask(null)}
                        className='mt-3 text-red-500'
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className='mt-3 cursor-pointer' onClick={() => startEditing(task)}>
                        <SquarePen className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task._id)}
                        className='mt-3 cursor-pointer'
                      >
                        <Trash className='w-4 h-4' />
                      </button>
                    </>
                  )}
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
