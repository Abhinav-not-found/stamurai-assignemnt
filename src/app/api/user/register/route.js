import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/user.model'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

connect()

export async function POST( req ){
  try {
    const reqBody = await req.json()
    const { email, password, name } = reqBody
    console.log(name)
    
    const user = await User.findOne({email})
    if(user){
      return NextResponse.json({
        message:'User Already exist!'
      },{ status: 400 })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)


    const newUser = new User({
      email, password:hashedPassword, name
    })
    
    const savedUser = await newUser.save()
    console.log(savedUser)

    return NextResponse.json({
      message:'User registered successfully',
      success:true,
      savedUser
    })


  } catch (error) {
    return NextResponse.json({error:error.message},{status:500})
  }
}
