import Image from 'next/image'
import React from 'react'

const blogs = () => {
  return (
    <div className='px-10 h-[120vh] sm:h-[200vh] bg-gray-50 pt-28'>
      <div className=' flex sm:flex-col md:flex-row '>
        <div className='lg:w-[60%] '>
        <Image src='/images/blog.avif' alt="Logo" width={800} height={800} className='rounded-lg'/>
        </div>

        <div className='flex flex-col my-6 lg:w-[30%]'>
          <h1 className='text-6xl  text-gray-700'>Revolutionizing </h1>
          <h1 className='text-6xl  text-gray-700'>Software </h1>
          <h1 className='text-6xl  text-gray-700'>Development: </h1>

          <h1 className='text-5xl text-gray-700'>Exploring Innovative Uses of Blockchain</h1>

          <p className='my-6'>Blockchain technology, initially known for its association with cryptocurrencies, has transcended its initial boundaries to become a transformative force in various industries. In the realm of software development, blockchain offers a myriad of innovative applications that go beyond conventional.</p>

        </div>
      </div>
     </div>
  )
}

export default blogs