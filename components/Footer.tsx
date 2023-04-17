import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='w-full bg-white'>
        <div className='w-11/12 max-w-7xl mx-auto'>
            <div className='flex flex-col gap-8 py-4 sm:flex-row'>
                <div className='text-blue-900 text-xl sm:text-3xl sm:flex sm:flex-col  font-bold'>
                    <h2>Let&#39;s make something <br className='hidden sm:block' /> amazing together.</h2>
                    <br />
                    <h3>Start by <span className='text-red-400 border-b-2 border-red-400'>saying hi</span></h3>
                </div>

                <div className='flex flex-col gap-4 sm:mx-auto'>
                    <div>
                        <h4 className='font-semibold text-blue-900'>Information</h4>
                        <h5 className='text-sm '>Kaunas, Lithuania</h5>
                        <h6 className='text-xs'>+370 (600) 38825</h6>
                    </div>
                    <ul className='flex flex-col gap-2'>
                        <li><Link href="#" className='hover:text-blue-600'>Services</Link></li>
                        <li><Link href="#" className='hover:text-blue-600'>Blogs</Link></li>
                        <li><Link href="#" className='hover:text-blue-600'>Contact</Link></li>
                        <li><Link href="#" className='hover:text-blue-600'>Experience</Link></li>
                    </ul>
                </div>
            </div>

            <hr />

            <div>
                <div className='p-4 flex justify-center'>
                    <h6 className='text-xs'>Terkinas | &copy;<sup> 2023</sup>. All rights reserved. </h6>
                </div>
            </div>
        </div>

    </footer>
  )
}