import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/user.model'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()
export async function POST(req) {
  try {
    const reqBody = await req.json()
    const {email,password} = reqBody

    const user = await User.findOne({email})
    if(!user){
      return NextResponse.json({error:'Invalid credentials'},{status:400})
    }

    const validPassword = await bcrypt.compare( password, user.password )
    if(!validPassword){
      return NextResponse.json({error:'Invalid credentials'},{status:400})
    }


    const token = jwt.sign({id:user._id},process.env.TOKEN_SECRET,{expiresIn:'1h'})

    const response = NextResponse.json({
      message:'Login success',
      success:true
    })
    response.cookies.set('token',token,{
      httpOnly:true
    })

    return response

  } catch (error) {
    return NextResponse.json({error:error.message},{status:500})
  }
}
