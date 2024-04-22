import React from 'react'

const createassessment = () => {
  return (
    <div>
   {/* <div className="flex ml-[550px] mt-10 gap-5">
        <input
          className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
          placeholder="Create Subject"
          onChange={(e) => setsubs(e.target.value)}
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={addnewsubject}
        >
          Create Subject
        </button>
      </div> */}


<div className="flex flex-col items-center justify-center h-screen dark text-black  ">
        <div className=" flex flex-col w-full max-w-md bg-white rounded-lg shadow-md p-6">
          
          <h2 className="text-2xl font-bold text-black mb-4">
            Assessments
          </h2>
          <p>Select Product</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">Self Assessment Test-SAT</option>
        <option value="product-2">Scholistic Assessment Test-SAT</option>
        <option value="product-3">Subject Assessment Test-SAT</option>
      </select>
      <p>Select Sub Product</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
          <option value="product-1">English</option>
        <option value="product-1">FIA</option>
        <option value="product-2">CSS</option>
        <option value="product-3">PMS</option>
      </select>
      <p>Select Category</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
          <option value="product-1">English</option>
        <option value="product-1">LDC</option>
        <option value="product-2">UDC</option>
        <option value="product-3">Director</option>
      </select>
      <p>Select Sub Category (If Any)</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
          <option value="product-1">NIL</option>
        <option value="product-1">English</option>
        <option value="product-2">Urdu</option>
        <option value="product-3">Maths</option>
      </select>
      <p>Select Paper Pattern</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
          <option value="product-1">NIL</option>
        <option value="product-1">English,General knowledge, Islamic Study, Pak Studies, Computer Science/Mathematics</option>
        <option value="product-2">English</option>
        <option value="product-3">English,General Knowledge,Islamic Study, Urdu </option>
      </select>
      <p>Select Subject</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
       
        <option value="product-1">English</option>
        <option value="product-2">Urdu</option>
        <option value="product-3">Maths</option>
      </select>
         
         
          <p>Select Time Duration</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">30 Minutes</option>
        <option value="product-2">1 Hours</option>
        <option value="product-3"> 2 Hours</option>
      </select>
          <p>Enter Number of Mcqs</p>
          <input placeholder="Enter Number of Mcqs" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          
        
          {/*  <p>Select Difficulty Level</p>
        
          <select
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="product"
            value={selectedLevel}
            onChange={handleLevelChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select> */}
         

          <button
            className="bg-black text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
           
          >
            Generate Assessment
          </button>
        </div>
      </div>
   
      
    </div>
  )
}

export default createassessment;