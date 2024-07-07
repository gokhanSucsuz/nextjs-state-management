"use client"
import Link from "next/link";
import Button from "./components/button";
import CountText from "./components/countText";
import { useStore } from "./zustand/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSet } from "./slice/userSlice";
import { useUser } from "./context/userContext";


export default function Home() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({ name: "", email: "" })
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const clear = useStore((state) => state.clear);
  const { myName, changeName } = useUser()
  return (
    <main className="flex flex-col items-center  p-24">
      <div className="border p-5 rounded-lgs shadow-lg">
        <h1>Home Page</h1>
        <div className="border p-5 flex flex-col gap-2">
          <h1 className="font-bold">Zustand</h1>
          <CountText />
          <Button onClick={increase} />
          <button className="p-2 bg-orange-800 text-white rounded-lg" onClick={clear}>Clear</button>
          <button className="p-2 bg-orange-800 text-white rounded-lg" onClick={() => decrease(Math.random() * 100)}>Decrease</button>
          <Link className="p-2 bg-orange-800 text-white text-center rounded-lg" href="/about">About Page</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold">Redux Toolkit</h1>
          <div>
            <p>Username</p>
            <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" name="username" id="username" />
          </div>
          <div>
            <p>Mail</p>
            <input value={user.email} onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            } type="text" name="usermail" id="usermail" />
          </div>
          {JSON.stringify(user)}
          <button className="p-2 bg-orange-800 text-white rounded-lg" onClick={() => dispatch(userSet(user))}>Sign In</button>
          <div>
            <h1 className="font-bold">Context Api</h1>
            <p>{myName}</p>
            <button className="p-2 bg-orange-800 text-white rounded-lg " onClick={() => changeName(user.name)}>Change Name</button>
          </div>
        </div>
      </div>
    </main>
  );
}
