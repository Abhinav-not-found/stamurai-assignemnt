"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form onSubmit={handleRegister} className='w-full max-w-sm space-y-4'>
        <h2 className='text-2xl font-bold text-center'>Register</h2>

        <Input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type='submit' className='w-full'>
          Register
        </Button>
        {message && (
          <p className='text-center text-sm text-red-500'>{message}</p>
        )}
      </form>
    </div>
  );
};

export default register;
