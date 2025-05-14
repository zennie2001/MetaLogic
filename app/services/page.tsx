import Image from 'next/image'
import React from 'react'

export const metadata = {
  title:" Services | Metalogic"}

const ServicesPage = () => {
  return (
    <div className='px-10 h-[120vh] sm:h-[200vh] bg-gray-50 pt-28'>
           
    
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 ">
                {/* first col */}
                  <div className="space-y-6">
                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/computer.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Custom Software Solutions</h1>
                                <p className='text-sm'>Tailored Software solution for yout need.</p>
                            </div>
                        </div>

                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/cloud.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Cloud Computing Services</h1>
                                <p className='text-sm'>Use the internet to improve your business.</p>
                            </div>
                        </div>

                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/support.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Maintenance and Support</h1>
                                <p className='text-sm'>Keeping your software running smoothly.</p>
                            </div>
                        </div>
                        
                   </div>

                   {/* second col */}
                   <div className="space-y-6">
                       <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/web.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Web Development</h1>
                                <p className='text-sm'>Websites that work on all devices.</p>
                            </div>
                        </div>

                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/qa.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Quality Assurance and Testing</h1>
                                <p className='text-sm'>Tailored Software solution for yout need.</p>
                            </div>
                        </div>

                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/devops-sm.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Dev Ops</h1>
                                <p className='text-sm'>Faster and safer software delivery.</p>
                            </div>
                        </div>
                   </div>

                   {/* third col */}
                   <div className="space-y-6">
                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/mobile.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Mobile App Development</h1>
                                <p className='text-sm'>Apps for phones and tablets.</p>
                            </div>
                        </div>

                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/ui.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >UI/UX Designing</h1>
                                <p className='text-sm'>Creating user-friendly interfaces.</p>
                            </div>
                        </div>

                        <div className='flex  gap-4 border px-2 py-2 rounded-md hover:bg-gray-100 bg-blue-100 cursor-pointer'>
                            <div className='border px-2 rounded-md bg-blue-200'>
                            <Image src='/images/blockchain-sm.svg' alt="Logo" width={50} height={30}/>
                            </div>
                            <div>
                                <h1 >Blockchain Solutions</h1>
                                <p className='text-sm'>Secure technology for your business.</p>
                            </div>
                        </div>
                   </div>
            </div>
    </div>
  )
}

export default ServicesPage