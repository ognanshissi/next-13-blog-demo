"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Nav () {

  useEffect(() => {
    console.log("use effect");
  }, [])

  return (
    <>
    <nav className="bg-black py-2">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white font-bold">
          <Link href={`/`}>Logo</Link>
        </div>

        <div className="flex justify-between space-x-2">
          <span className="hover:underline hover:cursor-pointer bg-white border border-white rounded-full px-3 py-2">
            <Link href={`about`} >About Us</Link>
          </span>
        </div>
      </div>
    </nav>
    </>
  )
}