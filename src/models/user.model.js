import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email:{
    type:String,
    required:[true,'email is required'],
    unique:true
  },
  password:{
    type:String,
    required:[true,'email is required'],
  },
})

const User = mongoose.models.users || mongoose.model('user', userSchema)

export default User

