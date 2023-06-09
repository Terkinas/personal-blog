import Head from 'next/head'
import Image from 'next/image'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Poppins } from 'next/font/google'
import Hero from '../../components/home/Hero'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700'],
  variable: '--font-poppins'
 })


export default function Home() {
  return (
    <>
      <Head>
        <title>Terkinas | Personal blog</title>
        <meta name="description" content="Discover profitable niches for your business! I offer expert advice and comprehensive guides on market research and analysis. Start your entrepreneurship journey now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#ECF2FF]'>
        <Header />
          <Hero />
        <Footer />
      </main>
    </>
  )
}
