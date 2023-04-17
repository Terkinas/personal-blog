import Link from 'next/link'
import React from 'react'
import { FiShoppingBag, FiArrowDownRight, FiPhoneOutgoing } from 'react-icons/fi'

type Props = {}

export default function Header({}: Props) {

    const toggleNavbarMenu = () => {
        const dropdownNavbar = document.getElementById('dropdownNavbar')
        const dropdownNavbarButton = document.getElementById('dropdownNavbarButton')
        if (dropdownNavbar && dropdownNavbarButton) {
            dropdownNavbar.classList.toggle('hidden')
            // dropdownNavbarButton.classList.toggle('bg-slate-100')
        }
    }


  return (
    <nav className='h-16
    md:max-w-7xl md:mx-auto border-b border-slate-100'>
        <div className='h-full flex justify-between items-center px-6'>

        <Link href="/" className='flex items-center'>Terkinas</Link>

            <div className='flex flex-col justify-start items-end md:flex-row md:items-center md:gap-16'>
                <ul id="dropdownNavbarButton" onClick={toggleNavbarMenu} className='bg-white w-9 h-9 shadow-lg rounded-full flex flex-col justify-center items-center gap-0.5 px-2.5 py-3 [&>li]:h-0.5 [&>li]:rounded [&>li]:bg-slate-800 
                md:hidden'>
                    <li className='w-3'></li>
                    <li className='w-4'></li>
                    <li className='w-2'></li>
                </ul>

                <div id="dropdownNavbar" className="absolute bg-white sm:bg-transparent hidden translate-y-10 z-10 divide-y divide-gray-100 rounded-lg shadow w-44 sm:w-fit
                sm:flex sm:relative sm:shadow-none sm:translate-y-0 sm:items-start sm:justify-end ">
                    <ul className="py-2 text-sm text-slate-800 sm:flex sm:gap-1 sm:font-semibold" aria-labelledby="dropdownLargeButton">
                        <li>
                            <Link href="/blog" className="block px-4 py-2 hover:text-blue-500 sm:rounded">Services</Link>
                        </li>
                        <li>
                            <Link href="/products" className="block px-4 py-2 hover:text-blue-500 sm:rounded">Works</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block px-4 py-2 hover:text-blue-500 sm:rounded">Products</Link>
                        </li>
                        {/* <li>
                            <Link href="/login" className="block px-4 py-2 sm:hover:bg-blue-700 sm:rounded sm:bg-blue-600 sm:text-white whitespace-nowrap">Sign in</Link>
                        </li> */}
                        <li>
                            <Link href="/contact" className="block px-4 py-2 hover:text-blue-500 sm:rounded">Experience</Link>
                        </li>
                    </ul>
                </div>

                <div className='hidden sm:block'>
                    <h4 className='text-xs flex gap-2 items-center font-semibold text-slate-500'>+370 (600) 38825 <span className='block p-3 rounded-full shadow bg-white text-blue-500'><FiPhoneOutgoing /> </span></h4>
                </div>
            </div>
            

            
            
            {/* <button className='p-2'>
                <FiShoppingBag />
            </button> */}
        </div>
    </nav>
  )
}