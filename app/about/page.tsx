import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
   <div className=' h-[120vh] sm:h-[200vh] '>
        {/* <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'> </div> */}


        {/* Heroimage */}
        <Image src="/images/heroMeta.png" alt="hero" width={500} height={300}  className="w-full h-full object-cover" />

        <div className='absolute z-[100] w-full h-2/3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='flex items-center justify-center flex-col w-full h-full'>
                    <div>
                        <h1 className='text-4xl mb-4 md:mb-0 text-center md:text-5xl lg:text-5xl  text-white font-bold'>Driving Innovations</h1>
                        <h1 className='text-4xl mb-4 md:mb-0 text-center md:text-5xl lg:text-5xl  text-white font-bold'>And Empowering Business</h1>
                        
                        <div className='mt-8 px-10'>
                        <p className='text-white text-sm md:font-semibold'>Metalogic envisions a future where technology serves as a catalyst for limitless human potential,</p>
                        <p className='text-white text-sm md:font-semibold'>fostering innovation and empowering organizations to thrive in a transformative digital era.</p>
                        </div>
                        
                    </div>
        
                </div>

                <div className="grid grid-cols-3 gap-8 p-6 bg-white mx-14 md:mx-28 lg:mx-32 rounded-lg ">
                   <div className="space-y-6 flex flex-col items-center">
                    <h1 className='text-green-800 text-4xl'>30+</h1>
                    <p>Projects Completed</p>
                   </div>
                   <div className="space-y-6 flex flex-col items-center">
                    <h1 className='text-green-800 text-4xl'>50+</h1>
                    <p>Satisfied Clients</p>
                   </div>
                  <div className="space-y-6 flex flex-col items-center">
                    <h1 className='text-green-800 text-4xl'>18+</h1>
                    <p>Experts</p>
                   </div>
                </div>
          </div>
     </div>
  )
}

export default about