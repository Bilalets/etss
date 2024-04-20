import { PencilRuler } from 'lucide-react';
import React from 'react'

const Createproduct = () => {
  return (
    <div className='flex  flex-row gap-5 justify-center'>
<div className="relative rounded-full overflow-hidden bg-white shadow-xl w-3/4">
  <input
    type="text"
    name="text"
    placeholder="Create product"
    className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
  />
 
</div>
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create-Product</button>
    </div>
  )
}

export default Createproduct;