import React from 'react'
import Heading from '../components/Heading'
import image from '../assets/download (11).svg'



export default function About() {
  return (<> 
      <img src={image} className='w-1/5 mx-auto' alt="" />

   <Heading text={'mohamed omar'}/>
 <div className="flex flex-col items-center justify-center mb-6">
  <div className="flex items-center justify-center mb-2">
    <span className="w-16 h-0.5 bg-white"></span>
    <span className="mx-2 text-lg">★</span>
    <span className="w-16 h-0.5 bg-white "></span>
  </div>
  <p className="text-center text-white">Web Development (React JS)</p>

</div>

</>

  )
}
