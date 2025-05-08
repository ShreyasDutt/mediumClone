import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-[#F7F4ED] border-b border-gray-100 px-40 border-b-black">
    <Link href="/" className="text-4xl font-bold text-gray-900">
      Medium
    </Link>
    
    <div className="flex items-center gap-6">
      <Link href="/signin" className=" text-gray-900 hover:text-gray-700">
        Sign in
      </Link>
      <Link href="/get-started" className="bg-black text-white px-4 py-2 rounded-full">
        Get started
      </Link>
    </div>
  </nav>
  )
}

export default Navbar