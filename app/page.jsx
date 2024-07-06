"use client"
import Link from "next/link";
import Button from "./components/button";
import CountText from "./components/countText";
import { useStore } from "./store/store";


export default function Home() {
  const { increase, decrease, clear } = useStore((state) => state)
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Home Page</h1>
      <CountText />
      <Button onClick={increase} />
      <button onClick={clear}>Clear</button>
      <button onClick={() => decrease(Math.random() * 100)}>Decrease</button>
      <Link href="/about">About Page</Link>
    </main>
  );
}
