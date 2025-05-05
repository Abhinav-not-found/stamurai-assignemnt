import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import MultipleSelector from "@/components/ui/multiselect";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];

const CreateTaskComponent = () => {
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [date,setDate]=useState('');
  const [priority,setPriority]=useState('low');
  const [status,setStatus]=useState('pending');
  const [assignedUsers,setAssignedUsers]=useState([]);

  const handleSaveTask = () =>{
    try {
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-primary text-white'>Create</Button>
      </DialogTrigger>
      <DialogContent className='max-w-lg'>
        <DialogHeader>
          <DialogTitle>Add a Task</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form className='space-y-4 '>
          <div className='space-y-2'>
            <Label htmlFor='title'>Title</Label>
            <Input value={title} onChange={(e)=>setTitle(e.target.value)} id='title' placeholder='Enter task title' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea value={description} onChange={(e)=>setDescription(e.target.value)} id='description' placeholder='Task details...' />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='due-date'>Due Date</Label>
              <Input value={date} onChange={(e)=>setDate(e.target.value)} id='due-date' type='date' />
            </div>



            <div className='space-y-2'>
              <Label htmlFor='priority'>Priority</Label>
              <Select value={priority} onValueChange={setPriority} >
                <SelectTrigger id='priority'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='low'>Low</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>


          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='status'>Status</Label>
              <Select value={status} onValueChange={setStatus} >
                <SelectTrigger id='status'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='pending'>Pending</SelectItem>
                  <SelectItem value='inProgress'>In Progress</SelectItem>
                  <SelectItem value='completed'>Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div>
              <Label>Multiselect</Label>
              <MultipleSelector
                commandProps={{
                  label: "Assign Users",
                }}
                value={assignedUsers}
                onChange={setAssignedUsers}
                defaultOptions={frameworks}
                placeholder='Assign Users'
                hideClearAllButton
                hidePlaceholderWhenSelected
                emptyIndicator={
                  <p className='text-center text-sm'>No results found</p>
                }
              />
            </div>

          </div>

          <div className='pt-2'>
            <Button type='submit' className='w-full bg-primary text-white'>
              Save Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskComponent;
