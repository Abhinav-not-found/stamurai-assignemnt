"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/login", user);
      console.log(res.data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
      if(user.email.length > 0 && user.password.length > 0 ){
          setDisabled(false)
      }
      else setDisabled(true)
    },[user])


  return (
    <div>
      <h1 className='text-3xl mb-2'>Login</h1>
      <label htmlFor='email' className='text-xl'>
        Email:
      </label>
      <br />
      <input
        type='text'
        id='email'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className='border border-black rounded-md p-1'
      />
      <br />
      <label htmlFor='password' className='text-xl'>
        Password:
      </label>
      <br />
      <input
        type='password'
        id='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className='border border-black rounded-md p-1'
      />
      <br />
      <button
        onClick={handleLogin}
        disabled={disabled}
        className='py-1 px-4 border border-black rounded-md cursor-pointer mt-4 disabled:text-gray-300 disabled:border-gray-300'
      >
        {loading ? "Loading..." : "Login"}
      </button>
      <p>
        Don't have an account?{" "}
        <Link href={"/register"} className='underline'>
          Register
        </Link>{" "}
        here
      </p>
    </div>
  );
};

export default Login;
