"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/login", user);
      console.log(res.data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <Card className='w-full max-w-md shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl text-center uppercase'>Login</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              // placeholder='example@email.com'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              // placeholder='••••••••'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <Button
            className='w-full'
            onClick={handleLogin}
            disabled={disabled || loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <p className='text-sm text-center text-muted-foreground'>
            Don&apos;t have an account?{" "} <Link href='/register' className='underline hover:text-blue-600'>
              Register 
            </Link> here
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
