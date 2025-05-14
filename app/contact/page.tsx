
import React from 'react'
import { FiHeadphones } from "react-icons/fi";

export const metadata = {
  title:"Get In Touch"}

const ContactPage = () => {
  return (
    <div className='flex sm:flex-col md:flex-row lg:flex row h-[120vh] sm:h-[200vh] gap-24 px-10 lg:px-20 md:px-20 bg-gray-100 pt-28'>

        {/* Left part */} 
        <div className='className=lg:w-[45%] md:w-[45%] flex flex-col gap-10 my-10'>
            <p className='text-rose-600 text-xl'>Get In Touch</p>
            <h1 className='sm:text-[40px] md:text-[70px] lg:text-[70px] font-bold'>{`Let's Kickstart Your Project`}</h1>
            <p className='text-sm font-light'>Ready to take the next step? Fill out the form to schedule a consultation with our experts.</p>

            <div className='border bg-white flex flex-col gap-6 p-4 rounded-lg w-2/3'>
                <div className='flex gap-3 items-center'>
                    <div className='border p-2 rounded-full bg-blue-100  '>
                        <FiHeadphones className='text-2xl' />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Customer Support
                        </h1>
                        <p className='font-light '>Need a technical Assistance ?</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='border p-2 rounded-full bg-blue-100  '>
                        <FiHeadphones className='text-2xl' />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Partnerships
                        </h1>
                        <p className='font-light '> Want to offer MetaLogic to your client? Become a Partner</p>
                    </div>
                </div>     


            </div>
            
        </div>

        {/* Right part */}
        <div className='className=lg:w-[45%] md:w-[45%] md:h-fit rounded-lg bg-white px-4 py-10'>
            <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 ">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder='Jhon Deo'
            className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>

        <div className='flex flex-row items-center justify-between gap-2'>
        <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700 ">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder='jhondeo@gmail.com'
            className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>

        <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700 ">
           Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            placeholder='+977-'
            className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>
        </div>

        {/* company info */}

        <div className='flex flex-row items-center justify-between gap-2'>
        <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700 ">
           Company Name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder='companyName'
            className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>

        <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700 ">
           Company Location
          </label>
          <input
            type="text"
            name="companyLocation"
            placeholder='companyLocation'
            className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>
        </div>

        

        

        <div>
          <label className="block text-sm font-medium text-gray-700 ">
           Description
          </label>
          <textarea
            
            name="description"
            placeholder='Anything particular we should know?'
            className="mt-1 w-full h-[120px] px-4 py-2 border rounded-md bg-gray-100 dark:border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
        </div>
    </div>
  )
}

export default ContactPage