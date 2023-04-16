import Link from 'next/link'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'

type Props = {}

export default function Header({}: Props) {

    const toggleNavbarMenu = () => {
        const dropdownNavbar = document.getElementById('dropdownNavbar')
        const dropdownNavbarButton = document.getElementById('dropdownNavbarButton')
        if (dropdownNavbar && dropdownNavbarButton) {
            dropdownNavbar.classList.toggle('hidden')
            dropdownNavbarButton.classList.toggle('gap-0.5')
        }
    }


  return (
    <nav className='h-16 bg-white shadow'>
        <div className='h-full flex justify-between items-center px-6'>


            <div className='flex flex-col justify-start items-start'>
                <ul id="dropdownNavbarButton" onClick={toggleNavbarMenu} className='flex flex-col gap-1 [&>li]:h-0.5 [&>li]:rounded [&>li]:bg-slate-800'>
                    <li className='w-5'></li>
                    <li className='w-4'></li>
                </ul>

                <div id="dropdownNavbar" className="absolute translate-y-8 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blogs</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Products</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>

            

            <Link href="/" className='font-semibold'>Terkinas</Link>

            <FiShoppingBag />
        </div>
    </nav>
  )
}