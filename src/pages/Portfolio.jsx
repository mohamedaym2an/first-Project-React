import React from 'react'
import Heading from '../components/Heading'
import { useState } from "react";

const images = import.meta.glob("/src/assets/portfolio/*.{png,jpg,svg}", { eager: true });

export default function Portfolio() {
    const [selected, setSelected] = useState(null);

    return <>

<Heading text={'portfolio component'}/>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
  {Object.values(images).map((img, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={img.default}
        alt={`Portfolio ${index + 1}`}
        className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
         onClick={() => setSelected(img.default)} 

      />
    </div>
  ))}
</div>
{selected && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelected(null)}
  >
    <img
      src={selected}
      alt="selected"
      className="max-w-[70%] max-h-[70%] rounded-lg shadow-lg"
    />
  </div>
)}

    </>


}
