import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'


export const getDataFromToken = (req)=>{
 try {
  const token = req.cookies.get('token')?.value || ''
  
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)

  return decodedToken.id

 } catch (error) {
  throw new Error(error.message)
 }
}
