"use client"

import { useState, useEffect } from "react";
import { heroSlides } from "@/lib/heroCarousel";
import Image from "next/image";
import Link from "next/link";

function Hero() {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length)
      }, 2000);
    
      return () => {
        clearInterval(interval);
      }
    }, [])
    
    return(
        <div className="relative w-full h-120 md:h-150">

            <Image
              src={heroSlides[current].image}
              alt={`Hero ${current + 1}`}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className=" h-[38%] w-full flex flex-col justify-center items-center gap-3 absolute bottom-0 left-0 bg-black/70">

                <div className=" text-lg border-b-2 border-red-600">
                    Welcome to <span className=" text-red-600 font-bold">ALPHA FITNESS</span>
                </div>

                <p>
                    Fitness Is a Lifestyle, Not a Destination
                </p>

                {/* Buttons div */}
                <div className=" h-10 flex items-center gap-5">

                    <Link href="/about">
                        <button className=" p-2 px-4 rounded-lg shadow bg-linear-to-b from-amber-600 to-amber-800 text-sm hover:border">Know More</button>
                    </Link>
                    
                    <Link href="/programs">
                        <button className=" p-2 px-4 rounded-lg shadow bg-linear-to-b from-red-600 to-red-900 text-sm hover:border">Explore</button>
                    </Link>

                </div>

            </div>
    </div>
    )
}

export default Hero