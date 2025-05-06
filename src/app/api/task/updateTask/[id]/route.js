import { connect } from "@/dbConfig/dbConfig";
import Task from '@/models/task.model'
import { NextResponse } from 'next/server'
connect()

export async function PUT(req,{params}) {
  try {
    const { id } = await params;
    const reqBody = await req.json()
    const {title, description, priority, date} = reqBody

    const updatedTask = await Task.findByIdAndUpdate(id,{
      title,description,priority,date
    },{new:true})


    if (!updatedTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Task updated successfully", task: updatedTask },
      { status: 200 }
    );

  } catch (error) {
    console.log('Task Update error', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
