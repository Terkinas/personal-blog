import Link from 'next/link'
import React from 'react'
import { FiShoppingBag, FiArrowDownRight } from 'react-icons/fi'

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
    <nav className='h-16 bg-white
    md:max-w-7xl md:mx-auto border-b border-slate-100'>
        <div className='h-full flex justify-between items-center px-6'>

        <Link href="/" className='flex items-center'>Terkinas</Link>

            <div className='flex flex-col justify-start items-end'>
                <ul id="dropdownNavbarButton" onClick={toggleNavbarMenu} className='bg-white w-9 h-9 shadow-lg rounded-full flex flex-col justify-center items-center gap-0.5 px-2.5 py-3 [&>li]:h-0.5 [&>li]:rounded [&>li]:bg-slate-800 
                md:hidden'>
                    <li className='w-3'></li>
                    <li className='w-4'></li>
                    <li className='w-2'></li>
                </ul>

                <div id="dropdownNavbar" className="absolute hidden translate-y-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-slate-800" aria-labelledby="dropdownLargeButton">
                        <li>
                            <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
                        </li>
                        <li>
                            <Link href="/products" className="block px-4 py-2 hover:bg-gray-100">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                        </li>
                        <li>
                            <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>

            

            
            
            {/* <button className='p-2'>
                <FiShoppingBag />
            </button> */}
        </div>
    </nav>
  )
}