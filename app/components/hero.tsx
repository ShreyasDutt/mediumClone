import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Hero = () => {
  return (
    <div className='flex w-full '>
            <div className="w-full bg-[#F7F4ED] lg:px-40 px-10 pb-20 mt-24">
                <h1 className='tracking-tight'>
                <span className="block text-6xl md:text-7xl lg:text-9xl font-medium text-gray-900 mb-2">Human</span>
                <span className="block text-5xl md:text-6xl lg:text-[7rem] w-fullfont-medium text-gray-900 mb-6">stories & ideas</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-800 my-8 font-serif">
                A place to read, write, and deepen your understanding
                </p>

                
                <SignedIn>
                      <Link
                        href="/start-reading"
                        className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-normal hover:bg-gray-800 transition-colors font-sans"
                      >
                        Start reading
                      </Link>
              </SignedIn>


              
              <SignedOut>
                  <SignInButton mode="modal">
                    <div className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-normal hover:bg-gray-800 transition-colors font-sans">
                      Start reading
                    </div>
                  </SignInButton>
              </SignedOut>

           
    
            </div>

            <div className='hidden md:block '>
            <Image src="/heroimg.webp" alt="HeroImage" width={750} height={800} />                  
            </div>

    </div>
    
  )
}

export default Hero