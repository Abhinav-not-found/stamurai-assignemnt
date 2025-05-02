import mongoose from "mongoose";
const connectToDatabase = async() =>{
  if(mongoose.connection[0].readyState){
    return
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      useNewURLParser:true,
      useUnifiedTopology:true,
    })
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Failed to connect to MongoDB')
  }
}

export default connectToDatabase
