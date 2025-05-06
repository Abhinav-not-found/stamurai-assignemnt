'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Register = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const handleRegister = async () => {
    setLoading(true)
    try {
      const res = await axios.post('/api/user/register', user)
      console.log(res.data)
      router.push('/login')
    } catch (error) {
      console.log(error.message)
      toast.error(error.message || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setDisabled(!(user.name && user.email && user.password))
  }, [user])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <Card className='w-full max-w-md shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Register</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              type='text'
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <Button
            className='w-full'
            onClick={handleRegister}
            disabled={disabled || loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>

          <p className='text-sm text-center text-muted-foreground'>
            Already have an account?{" "}
            <Link href='/login' className='underline hover:text-blue-600'>
              Login 
            </Link> here
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
