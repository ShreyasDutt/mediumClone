import React from 'react'
import Link from 'next/link'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-[#F7F4ED] border-b border-gray-100 px-2 lg:px-40 border-b-black">
    <Link href="/" className="lg:text-4xl text-3xl font-bold text-gray-900">
      Typora
    </Link>
    
           
            

    <div className="flex items-center gap-6">
     
                <SignedOut>
                      <SignInButton mode='modal'>
                        <p className='font-serif font-medium text-gray-900 hover:text-gray-700'>Sign in</p>
                      </SignInButton>
                </SignedOut>

              <SignedOut>
                      <SignUpButton mode='modal'>
                              <div  className="bg-black cursor-pointer text-white px-4 py-2 rounded-full">
                              Get Started
                              </div>
                      </SignUpButton>
                </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    
  </nav>
  )
}

export default Navbar