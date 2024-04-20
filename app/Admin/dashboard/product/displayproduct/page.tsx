'use client';
import GeneralHeader from '@/app/superadmin/components/general_header';
import { Button, Card, Modal, TextInput } from 'flowbite-react';
import { PlusCircle, Save, SquarePen, Trash2, XCircle } from 'lucide-react';
import React, { useState } from 'react';


const Displayproduct = () => {
   
    const [openAddSubject, setOpenAddSubject] = useState(false);
  const subjects = [
    { id: 1, subject: 'Self Assessment Test' },
    { id: 2, subject: 'Scholastic Assessment Test ' },
    { id: 3, subject: 'Subject Assessment Test' },
   
  ];
return (
   
    
    <>
       <div className='flex  flex-row gap-5 justify-center'>
<div className="relative rounded-full overflow-hidden bg-white shadow-xl w-3/4">
  <input
    type="text"
    name="text"
    placeholder="Search Products"
    className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
  />
 
</div>
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Search</button>
    </div>
    

      <div className=" flex flex-col ml-64 p-5 my-5 ">
      

        {subjects.map((item, index) => (
          <Card key={item.id} className="m-5 w-full lg:max-w-[600px]">
            <div className="flex justify-between align-text-bottom">
              <p>{index + 1}</p>
              <p className=" text-lg text-gray-500 ml-20">{item.subject}</p>
             
              
            </div>
            
          </Card>
        ))}
      </div>
    
    </>
)
}

export default Displayproduct;