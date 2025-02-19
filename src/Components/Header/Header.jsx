import React from 'react'
import {useState} from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid';



function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className='w-full md:absolute fixed top-0 left-0 z-[99] mb-20 bg-red-800 md:bg-transparent'>
      <div className='md:flex justify-between items-center py-4 px-7 md:px-24'>
        <div className='flex cursor-pointer items-center'>
          <img
            src = "/images/Zomato-Logo.png"
            alt='Zomato Logo'
            className='h-7 w-auto'
            />
        </div>
        <div 
          className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden text-white'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0  transition-all md:bg-transparent bg-red-800 text-white duration-500 ease-in py-14 md:py-0 ${
            isNavOpen ? "top-0" : "top-[-490px] "
          }`}
        >
            <li className='text-xl my-7 md:my-0 md:ml-8 transition-all duration-200 ease-in'>Login</li>
            <li className = 'text-xl my-7 md:my-0 md:ml-8 transition-all duration-200 ease-in'>Sign Up</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
