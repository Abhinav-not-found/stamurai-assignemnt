import { NextResponse } from "next/server";

export function middleware (req){
  const path = req.nextUrl.pathname
  const isPublicPath = path === '/login' || path === '/register' || path ===  '/'
  const token = req.cookies.get('token')?.value || ''
  if(isPublicPath && token){
    return NextResponse.redirect(new  URL('/dashboard', req.url))
  }
  if(!isPublicPath && !token){
    return NextResponse.redirect(new  URL('/login', req.url))
  }
}
export const config ={
  matcher:[
    '/',
    '/login',
    '/register',
    '/profile',
    '/dashboard'
  ],
}
