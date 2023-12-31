import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-12 w-full text-yellow-200 py-5'>
      <ul className='flex justify-center items-center gap-4'>
        <li className='cursor-pointer'>
          <Link href={'/'}>
            HOME
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link href={'/mems'}>
            MEMS
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;