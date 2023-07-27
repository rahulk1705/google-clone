
import { TbGridDots, TbCircleLetterR } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'

const Header: React.FunctionComponent = () => {
  return (
    <div className='flex justify-end pr-4 pt-3 space-x-4 items-center'>
      <Link href="http://mail.google.com" className="text-sm hover:underline cursor-pointer">Gmail</Link>
      <Link href="http://images.google.com" className="text-sm hover:underline cursor-pointer">Images</Link>
      <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />
      <TbCircleLetterR className="object-cover transform hover:scale-125 transition-transform duration-300"/>
    </div>
  )
}

export default Header;

