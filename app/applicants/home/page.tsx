"use client";
import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { MenuItem,Menu } from "react-pro-sidebar";

interface Chapter {
  id: string;
  name: string;
}

interface Subject {
  id: string;
  name: string;
  chapters: Chapter[];
}

interface Subcategory {
  id: string;
  name: string;
  subject: Subject[];
}

interface Category {
  id: string;
  name: string;
  subcategory: Subcategory[];
}

interface Test {
  id: string;
  name: string;
  category: Category[];
}

const Home = () => {

  const [getData,setData]=useState<Test[]>()
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };
  const GetData = async () => {
    try {
      const response = await axios.get("/api/Allservices/", 
      
      );
      if (response.status === 200) {
        const data = response.data;
        setData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  


  return (
    <>
 

 {getData?.map(({ id, name,category }) => (
  
  <>
        <div
          key={id}
          onClick={() => toggleDropdown(id)}
          className="text-black m-10 h-40 w-[300px] border-2 bg-white shadow-2xl hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
        >
          {name}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        
        </div>
        <div  >
      
          {openDropdownId === id && (
            <div
              id="dropdown"
              className="z-10 shadow-2xl h-[150px] ml-10 bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 items-center">
              {category.map(({name,id})=>(
                <div className=" items-center" key={id}>
                  <Menu>
                  <hr />
                  <MenuItem   component={<Link href={`/applicants/home/${id}`} />}>{name}</MenuItem>
                  <hr />
                  </Menu>
                </div>
              ))}
              </ul>
            </div>
          )}
        </div>
        </>
      ))}

     
       
     
   
    </>
  );
};

export default Home;
