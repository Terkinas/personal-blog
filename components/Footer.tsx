import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='bg-white w-11/12 mx-auto mt-2'>

        <div className='flex flex-col gap-8 py-4'>
            <div className='text-sky-800 text-xl font-bold'>
                <h2>Let&quot;s make something amazing together.</h2>
                <br />
                <h3>Start by <span className='text-red-400 border-b-2 border-red-500'>saying hi</span></h3>
            </div>

            <div className='flex flex-col gap-4'>
                <div>
                    <h4 className='font-semibold text-sky-800'>Information</h4>
                    <h5 className='text-sm '>Kaunas, Lithuania</h5>
                    <h6 className='text-xs'>+370 (600) 38825</h6>
                </div>
                <ul className='flex flex-col gap-2'>
                    <li><Link href="#" className='hover:text-green-800'>Services</Link></li>
                    <li><Link href="#" className='hover:text-green-800'>Blogs</Link></li>
                    <li><Link href="#" className='hover:text-green-800'>Contact</Link></li>
                    <li><Link href="#" className='hover:text-green-800'>Experience</Link></li>
                </ul>
            </div>
        </div>

        <hr />

        <div>
            <div className='p-4 flex justify-center'>
                <h6 className='text-xs'>Terkinas | &copy;<sup> 2023</sup>. All rights reserved. </h6>
            </div>
        </div>


    </footer>
  )
}