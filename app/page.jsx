"use client"
import Link from "next/link";
import Button from "./components/button";
import CountText from "./components/countText";
import { useStore } from "./zustand/store";
import { useState } from "react";


export default function Home() {
  const [user, setUser] = useState({ username: "", usermail: "" })
  const { increase, decrease, clear } = useStore((state) => state)
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Home Page</h1>
      <CountText />
      <Button onClick={increase} />
      <button onClick={clear}>Clear</button>
      <button onClick={() => decrease(Math.random() * 100)}>Decrease</button>
      <Link href="/about">About Page</Link>
      <div className="flex flex-col gap-3">
        <div>
          <p>Username</p>
          <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" name="username" id="username" />
        </div>
        <div>
          <p>Mail</p>
          <input value={user.email} onChange={(e) =>
            setUser({ ...user, usermail: e.target.value })
          } type="text" name="usermail" id="usermail" />
        </div>
        {JSON.stringify(user)}
        <button onClick={() => alert("Success!")}>Sign In</button>
      </div>
    </main>
  );
}
