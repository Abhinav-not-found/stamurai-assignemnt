import { connect } from "@/dbConfig/dbConfig";
import Task from '@/models/task.model'
import { NextResponse } from 'next/server'
connect()
export async function GET(req,{params}) {
  try {
    const { id } = await params;
    console.log(id)
    const tasks = await Task.find({ createdBy: id })
    return NextResponse.json({ tasks }, { status: 200 })
  } catch (error) {
    console.log('Task creation error', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
