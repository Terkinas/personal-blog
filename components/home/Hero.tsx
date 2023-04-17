import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <header className='w-full h-full flex flex-col gap-12'>

      

      <div className='w-11/12 mx-auto mt-8'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-semibold text-secondary'>Hey there,<br /> I’m Arnold</h1>
            <h2 className=''>I create beautifully simple things,<br /> and I love what I do.</h2>
        </div>

        <div className='hidden'>
          <div>
            <h6>5</h6>
            <h6>YEARS EXPERIENCE</h6>
          </div>

          <div>
            <p>img</p>
            <h6>Nsa certifid profacional web developer</h6>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-end h-fit max-w-lg'>
        <Image className='relative h-full' src='/images/home/portrait2.png' alt={'Portrait of Arnold'} width={330} height={330} />
      </div>
    </header>
  )
}