import React from 'react'
import Link from 'next/link'
import RenderNav from './RenderNav'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-[#F7F4ED] border-b border-gray-100 px-2 lg:px-40 border-b-black">
    <Link href="/" className="lg:text-4xl text-3xl font-bold text-gray-900">
      Typora
    </Link>
    
    <div className="flex items-center gap-6 cursor-pointer">
     <RenderNav/>
      </div>
    
  </nav>
  )
}

export default Navbar