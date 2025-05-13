import React from 'react'

const career = () => {
  return (
   <div className=' h-[120vh] sm:h-[200vh] bg-gray-50 pt-18'>
     <div className="min-h-screen bg-white px-6 py-12 md:px-12">
     <div className="max-w-4xl mx-auto">
    {/* <!-- Page Header --> */}
    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Careers</h1>
    <p className="text-lg text-gray-600 mb-10">
      Join our dynamic team and help build cutting-edge web applications. We're hiring!
    </p>

    {/* <!-- Job Listings --> */}
    <div className="space-y-6">
      {/* <!-- Job Card - Frontend Developer --> */}
      <div className="border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Frontend Developer</h2>
        <p className="text-gray-600 mb-4">We’re looking for a skilled frontend developer to join our team full-time in Kathmandu.</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="bg-gray-100 px-3 py-1 rounded-full">Full-time</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Kathmandu</span>
        </div>
        <a href="#apply" className="inline-block mt-2 px-4 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-600 transition">Apply Now</a>
      </div>

      {/* <!-- Job Card - Backend Developer --> */}
      <div className="border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Backend Developer</h2>
        <p className="text-gray-600 mb-4">Join us as a backend developer and help build scalable server-side applications. Full-time position based in Kathmandu.</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="bg-gray-100 px-3 py-1 rounded-full">Full-time</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Kathmandu</span>
        </div>
        <a href="#apply" className="inline-block mt-2 px-4 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-600 transition">Apply Now</a>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default career