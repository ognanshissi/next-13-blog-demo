"use client";

import Link from "next/link";
import { useEffect } from "react";
import {usePathname} from "next/navigation";

export default function Nav () {

  const pathname = usePathname()

  useEffect(() => {
    console.log("use effect");
    console.log(pathname)
  }, [pathname])

  return (
    <>
    <nav className="bg-black py-2">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-white font-bold">
          <Link href={`/`} >Demo Blog</Link>
        </div>

        <div className="flex justify-between space-x-2">
          <span className={pathname === '/about' ?  'hover:underline hover:cursor-pointer bg-white border border-white rounded-full px-3 py-2' : 'hover:underline hover:cursor-pointer text-white  px-3 py-2'}>
            <Link href={`about`} >About Us</Link>
          </span>
        </div>
      </div>
    </nav>
    </>
  )
}
