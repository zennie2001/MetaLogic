"use client"
import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav:()=>void
}

const Nav = ({openNav}:Props) => {

   

  return (
    <div className={`bg-blue-900  transition-all duration-200 h-[11vh] z-[1000] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 '>
                    <Image src= "/images/metalogo.png" alt="Logo" width={500} height={300}/>
                </div>
                <h1 className='text-xl md:text-2xl text-white font-bold '>MetaLogic</h1>
            </div>

            {/* Navlinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link)=>{
                    return <Link href={link.url} key={link.id} className="relative group text-gray-700 font-medium transition-colors duration-200">
                        <p className=" text-white pb-1 group-hover:border-b-2 group-hover:border-yellow-400 transition-all duration-300">{link.label}</p>
                        {/* <p className='relative text-white text-base font-medium w-fit block after:block  after:absolute after:h-[3px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right '>{link.label}</p> */}
                    </Link>
            
                })}
            </div>

            {/* button */}
            <div className='flex items-center spaxce-x-4'>
                <button className='hidden lg:flex items-center bg-red-700 text-white px-5 py-2 rounded-md'>
                    Get In Touch
                </button>

                {/* Menu button */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>


        </div>
    </div>
  )
}

export default Nav