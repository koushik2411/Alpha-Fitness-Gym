"use client"

import { navLinks } from '@/lib/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaBars } from 'react-icons/fa';
import { RiCloseLargeFill } from 'react-icons/ri';

function Header() {

    const [open, setOpen] = useState(false);

    const pathname = usePathname();

  return (
    <header className=" p-3 px-6 flex items-center justify-between sticky top-0 left-0 z-50 shadow bg-black/85 backdrop-blur">

        {/* Logo */}
        <div className=" font-bold text-lg bg-linear-to-b from-slate-50 to-slate-400 bg-clip-text text-transparent border-b-4 border-red-700 rounded">
            <span className=" bg-linear-to-b from-red-500 to-red-800 bg-clip-text text-transparent">A</span>LPHA
        </div>

        {/* Navbar (tablet and above) */}
        <nav className=" hidden md:flex items-center gap-4">

            {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.destination}
                  className={` ${pathname === link.destination ? " text-red-500 font-semibold border-b-2 rounded" : ""}`}
                >
                    {link.title}
                </Link>
            ))}

        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)} 
          className=" md:hidden border p-2 rounded-lg"
        >
            {open ? <RiCloseLargeFill className=" text-red-600"/> : <FaBars/>}
        </button>

        {/* Navbar (mobile) */}
        {open && (
            <div 
              onClick={() => setOpen(false)}
              className=" w-full h-screen p-3 bg-black/40 absolute top-13 right-0 flex justify-end backdrop-blur-sm"
            >

                <nav className=" h-fit w-65 p-5 flex flex-col gap-5 bg-linear-to-b from-gray-950 to-red-950 rounded-lg">

                    {navLinks.map((link, index) => (

                        <Link
                          key={index}
                          href={link.destination}
                          className={` border p-3 rounded active:scale-[0.97] ${pathname === link.destination ? " text-red-500 font-semibold bg-red-200/10" : ""}`}
                        >
                            {link.title}
                        </Link>

                    ))}

                </nav>
            </div>
        )}

    </header>
  )
}

export default Header