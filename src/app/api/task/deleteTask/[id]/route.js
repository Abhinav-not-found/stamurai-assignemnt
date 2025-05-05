import { connect } from "@/dbConfig/dbConfig";
import Task from '@/models/task.model'
import { NextResponse } from 'next/server'
connect()

export async function DELETE(req,{params}) {
  try {
    const { id } = await params;
    console.log(id)
    const deleteTask = await Task.findByIdAndDelete({ _id: id })
    return NextResponse.json({ message:'Task Deleted Successfully' }, { status: 200 })
  } catch (error) {
    console.log('Task creation error', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
