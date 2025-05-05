import {connect} from '@/dbConfig/dbConfig'
import Task from '@/models/task.model'
import { NextResponse } from 'next/server'

connect()
export async function POST(req) {
  try {
    const reqBody = await req.json()
    const { title, description, date, priority, status, assignedUsers, userId} = reqBody
    console.log(title,description,date,priority,status,assignedUsers,userId)

    if (!title || !description || !date || !priority || !status || !assignedUsers || !userId) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }
    

    const newTask = new Task({
      title, 
      description, 
      date, 
      priority,
      status,
      assignedUsers,
      createdBy:userId
    })

    await newTask.save()

    return NextResponse.json({
      message: 'Task created successfully',
      task: newTask
    }, { status: 201 })

  } catch (error) {
    console.log('Task creation error', error)
    return NextResponse.json({error:error.message},{status:500})
  }
}
