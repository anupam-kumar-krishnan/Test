"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from 'next/link'
import { Button } from "@/components/ui/moving-border";


function page() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
           Let's dive in the world of sounds and make great music!
        </p>
        <input
          type="text"
          placeholder="Name"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 px-5 py-2  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <input
          type="text"
          placeholder="Email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 px-5 py-2  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          placeholder="Message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-5 p-4 bg-neutral-950 placeholder:text-neutral-700"
        ></textarea>
      </div>
      <div>
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="text-lg bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                      Submit
                    </Button>
                </Link>
            </div>
      <BackgroundBeams />
    </div>
  )
}

export default page