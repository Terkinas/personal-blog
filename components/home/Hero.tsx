import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <header className='w-full h-full'>

      

      <div className='w-11/12 mx-auto mt-12 h-[76vh]'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-semibold leading-tight text-blue-800'>Hey there,<br /> I’m Arnold</h1>
            <h2 className=''>I design beautifully simple things,<br /> and I love what I do.</h2>
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

      <div className='flex justify-start items-end'>
        <Image className='absolute' src='/images/home/portrait.png' alt={'Portrait of Arnold'} width={500} height={500} />
      </div>
    </header>
  )
}