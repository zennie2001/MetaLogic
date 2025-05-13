import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'> </div>


        {/* Heroimage */}
        <Image src="/images/heroMeta.png" alt="hero" width={500} height={300}  className="w-full h-full object-cover" />

        {/* Text content */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex items-center justify-center flex-col w-full h-full'>
            <div>
                <h1 className='text-4xl mb-4 md:mb-0 text-center md:text-5xl lg:text-5xl  text-white font-bold'>Transforming Today</h1>
                <h1 className='text-4xl mb-4 md:mb-0 text-center md:text-5xl lg:text-5xl  text-white font-bold'>For</h1>
                <h1 className='text-4xl mb-4 md:mb-0 text-center md:text-5xl lg:text-5xl  text-white font-bold'>Digital Tomorrow</h1>
                <div className='mt-8'>
                <p className='text-white  font-semibold'>We are committed to offering state-of-the-art software solutions that</p>
                <p className='text-white flex justify-center  font-semibold'>enable companies to prosper in the digital world.</p>
                </div>
                <div className='flex justify-center'>
                  <Link href={'/about'}>
                <button className='text-white flex items-center gap-3 bg-blue-800 px-6 py-2 rounded-md hover:bg-red-600  transition-all duration-200 mt-12'>Learn More  <HiArrowSmallRight className='text-2xl font-bold ' /></button>
                </Link>
                </div>
            </div>

        </div>


        </div>

    </div>
  )
}

export default Hero
