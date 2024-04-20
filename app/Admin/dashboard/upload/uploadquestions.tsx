import React from 'react'

const uploadques = () => {
  return (
    <>
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
            Upload Questions To Database
          </h2>
          <p>Select Subject</p>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">English</option>
        <option value="product-2">Urdu</option>
        <option value="product-3">Maths</option>
      </select>
          <p>Enter Question</p>
          <input placeholder="Enter Question Text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p>Enter Answer-1</p>
          <input placeholder="Enter Awnser-1 Text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p>Enter Answer-2</p>
          <input placeholder="Enter Awnser-2 Text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p>Enter Answer-3</p>
          <input placeholder="Enter Awnser-3 Text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p>Enter Answer-4</p>
          <input placeholder="Enter Awnser-4 Text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p>Enter Correct-Answer</p>
          <input placeholder="Enter Awnser-5 Text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
        
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
            Submit
          </button>
        </div>
      </div>
   

    </>
  )
}

export default uploadques;