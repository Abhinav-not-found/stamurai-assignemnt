import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'name is required'],
  },
  email:{
    type:String,
    required:[true,'email is required'],
    unique:true
  },
  password:{
    type:String,
    required:[true,'password is required'],
  },
})

const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User

