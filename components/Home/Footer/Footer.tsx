import Image from 'next/image'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='pt-16 pb-10 bg-blue-900 text-white'>
        <div className='w-[90%] mx-auto items-start grid-cols-1 sm:grid-col-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* first part */}
             <div className='space-y-5'>
                <div className='flex flex-row gap-2'>
                    <Link href={'/'}>
                    <Image src='/images/metalogo.png' alt="Logo" width={50} height={30}/>
                    </Link>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold'>MetaLogic</h1>
                        <p>Software Private Limited</p>
                    </div>
                </div>
                <p className='flex gap-2'><IoLocationOutline /> Saptakhel, Lalitpur (Head office)</p>
                <p className='flex gap-2'><FiPhone /> + 977 9851353599</p>
                <p className='flex gap-2'><MdOutlineMailOutline /> info@metalogic.com.np</p>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p>Feedback</p>
                <p>Partnership</p>
                <p>Terms and Conditions</p>
            </div>
             <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Services</h1>
                <p>Custom Software Development</p>
                <p>Mobile App Development</p>
                <p>Cloud Computing Services</p>
                <p>Quality Assurance and Testing</p>
                <p>UI/UX Designing</p>
                <p>Maintenance and Support</p>
                <p>Dev Ops</p>
                <p>Blockchain Solutions</p>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Join</h1>
                <p>Careers at MetaLogic</p>
                <p>Internships</p>
                
            </div>

            
        </div>
        
        <div className='w-[90%] mx-auto items-start mt-16 flex md:justify-center lg:justify-center'>
             <p>© Copyright 2024 MetaLogic. All rights reserved.</p>
            
        </div>
       
    </div>
  )
}

export default Footer