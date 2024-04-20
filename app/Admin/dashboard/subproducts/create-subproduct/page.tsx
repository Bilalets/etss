import React from 'react'

const createsub = () => {
  return (
    <>
    <div className='flex flex-col ' >
<div className=' ml-80'>
<select  className="bg-white  rounded-full w-[640px] h-[65px] text-gray-800 border-0  p-2 mb-6 focus:bg-gray-200 focus:outline-none focus:ring-1  transition ease-in-out duration-150 shadow-xl" id="product">
<option value="" disabled selected hidden>Select a Product</option>
        <option value="product-1">Self Assessment Test</option>
        <option value="product-2">Scholastic Assessment Test</option>
        <option value="product-3">Subject Assessment Test</option>
      </select>
</div>
<div className='flex  flex-row gap-5 justify-center'>
<div className="relative rounded-full overflow-hidden bg-white shadow-xl w-2/4">
  <input
    type="text"
    name="text"
    placeholder="Create Sub-Product"
    className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
  />
 
</div>

    </div>
    </div>
    <div className=' ml-[530px]'>
    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create Sub Product</button>

    </div>

    </>
  )
}

export default createsub;