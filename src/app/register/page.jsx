import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email:'',
    password:'',
  })
  const [loading, setLoading ] = useState(false)

  const handleRegister = async() =>{
    try {
      setLoading(true)
      const res = await axios.post('/api/register',user)
      console.log(res.data)


    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  return (
    <div>
      Register
    </div>
  )
}

export default Register
