import React from 'react'
import Heading from '../components/Heading'


export default function Contact() {
  return <>

    <Heading text={'CONTACT SECTION'} />
  <div className="min-h-screen flex flex-col justify-center py-8 px-4">
  {/* Title */}
  <h2 className="text-3xl font-bold uppercase mb-3 text-center">
    Contact Section
  </h2>
  <div className="flex items-center justify-center mb-6">
    <span className="w-16 h-0.5 bg-gray-400"></span>
    <span className="mx-2 text-lg">★</span>
    <span className="w-16 h-0.5 bg-gray-400"></span>
  </div>
  

  {/* Form */}
  <form className="w-full max-w-xl mx-auto space-y-4 text-left">
    {/* Name */}
    <div>
      <label className="block text-gray-600 mb-1">userName</label>
      <input
        type="text"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-emerald-500 py-2"
      />
    </div>

    {/* Age */}
    <div>
      <label className="block text-gray-600 mb-1">userAge</label>
      <input
        type="number"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-emerald-500 py-2"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-gray-600 mb-1">userEmail</label>
      <input
        type="email"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-emerald-500 py-2"
      />
    </div>

    {/* Password */}
    <div>
      <label className="block text-gray-600 mb-1">userPassword</label>
      <input
        type="password"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-emerald-500 py-2"
      />
    </div>

    {/* Button */}
    <div className="pt-2">
      <button
        type="submit"
        className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600 transition"
      >
        send Message
      </button>
    </div>
  </form>
</div>

  </>

}
