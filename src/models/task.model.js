import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,'title is required'],
  },
  description:{
    type:String,
    required:[true,'description is required'],
  },
  date:{
    type:Date,
    required:[true,'date is required'],
  },
  priority:{
    type:String,
    required:[true,'priority is required'],
    enum:['low','medium','high'],
    default:'low'
  },
  status:{
    type:String,
    required:[true,'status is required'],
    enum:['pending','inProgress','completed'],
    default:'pending'
  },
  assignedUsers: {
    type: [mongoose.Schema.Types.ObjectId],
    // required: [true, 'assignedUsers is required'],
    ref: 'User'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
  
},{
  timestamps:true
})

const Task = mongoose.models.task || mongoose.model('task', taskSchema)

export default Task

