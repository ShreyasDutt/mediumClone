"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

const RenderNav = () => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="flex items-center gap-6 cursor-pointer">
        <SignedOut>
          <SignInButton mode='modal'>
            <p className='font-serif font-medium text-gray-900 hover:text-gray-700'>Sign in</p>
          </SignInButton>
        </SignedOut>

        <SignedOut>
          <SignUpButton mode='modal'>
            <div className="bg-black cursor-pointer text-white px-4 py-2 rounded-full">
              Get Started
            </div>
          </SignUpButton>
        </SignedOut>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6 cursor-pointer">
      <Link href='/create-story' className='flex items-center justify-center font-bold text-3xl space-x-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Write">
          <path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"></path>
          <path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path>
        </svg>
        <p className='text-lg font-medium'>Write</p>
      </Link>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default RenderNav;
