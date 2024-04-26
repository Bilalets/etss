"use client";
import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/config/Constants";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [activeOptionId, setActiveOptionId] = useState<number | null>(null);
  const [activeSubOptionId, setActiveSubOptionId] = useState<number | null>(null);
  const subjects = [
    {
      id: 1,
      subject: "CSS",
      image: "/images/maths.png",
      status: "Available",
      option:["MPT"]
    },
    {
      id: 2,
      subject: "IELTS",
      image: "/images/ielts.png",
      status: "Available",
      option:["Writing","Listening","Speaking","Reading"]
    },
   
    {
      id: 4,
      subject: "FIA",
      image: "/images/maths.png",
      status: "Available",
      option:["LDC","UDC","Assistant Director","Sub Inspector"]
    },
    {
      id: 5,
      subject: "ISSB",
      image: "/images/ielts.png",
      status: "Available",
      option:["Verbal","Non-Verbal","Academic"]
    },
    {
      id: 6,
      subject: "PMS",
      image: "/images/general.png",
      status: "Available",
      option:["Complusory","Optional"]
    },
  ];

  const subjects1 = [
    {
      id: 1,
      subject: "Medical",
      image: "/images/maths.png",
      status: "Available",
    },
    {
      id: 2,
      subject: "Engineering",
      image: "/images/ielts.png",
      status: "Available",
    },
    {
      id: 3,
      subject: "PHD",
      image: "/images/general.png",
      status: "Available",
    },
    {
      id: 4,
      subject: "Master",
      image: "/images/maths.png",
      status: "Available",
    },
    {
      id: 5,
      subject: "HSSC",
      image: "/images/ielts.png",
      status: "Available",
    },
    {
      id: 6,
      subject: "SSC",
      image: "/images/general.png",
      status: "Available",
    },
  ];

  const subjects2 = [
    {
      id: 1,
      subject: "English",
      image: "/images/maths.png",
      status: "Available",
    },
    {
      id: 2,
      subject: "Maths",
      image: "/images/ielts.png",
      status: "Available",
    },
    {
      id: 3,
      subject: "Biology",
      image: "/images/general.png",
      status: "Available",
    },
  ];
  const handleCardClick = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
    setActiveOptionId(null);
    setActiveSubOptionId(null);
};

const handleOptionClick = (optionId: number) => {
    setActiveOptionId(activeOptionId === optionId ? null : optionId);
    setActiveSubOptionId(null);
};

const handleSubOptionClick = (subOptionId: number) => {
    setActiveSubOptionId(activeSubOptionId === subOptionId ? null : subOptionId);
};
  return (
    <>
       <div className="ml-10 mt-10">
                <h1 className="text-xl">Self Assessment Test-SAT</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
    {subjects.map(({ id, subject, image, status, option = [] }) => (
        <Card key={id}>
            <div
               
                className="flex w-full gap-x-[15%] cursor-pointer"
            >
                <Image src={image} width={50} height={50} alt={subject} />
                <Link href={`/applicants/home/${id}`}>
                <p className="text-2xl text-gray-700">{subject}</p>
                </Link>
               
            </div>
            <div className="flex justify-end">
                <p className="text-lg text-gray-400">{status}</p>
            </div>
            {/* First level dropdown */}
            {activeCardId === id && (
                <div className="relative mt-2">
                    <ul className="absolute z-10 bg-white shadow-md rounded p-2 top-full left-0 w-full max-h-40 overflow-y-auto">
                        {option.map((opt, index) => (
                            <li
                                key={index}
                                className="p-2 hover:bg-gray-100"
                                onClick={() => handleOptionClick(id)}
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* Second level dropdown */}
            {/* Additional nested dropdowns can be handled similarly */}
        </Card>
    ))}
</div>


            <div className="ml-10 mt-10">
                <h1 className="text-xl">Scholistic Assessment Test-SAT</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
                {subjects1.map(({ id, subject, image, status }) => (
                    <Card key={id}>
                        <div
                            onClick={() => handleCardClick(id)}
                            className="flex w-full gap-x-[15%] cursor-pointer"
                        >
                            <Image src={image} width={50} height={50} alt={subject} />
                            <Link href={`/applicants/home/${id}`}>
                <p className="text-2xl text-gray-700">{subject}</p>
                </Link>
                        </div>
                        <div className="flex justify-end">
                            <p className="text-lg text-gray-400">{status}</p>
                        </div>
                        {/* First level dropdown */}
                        {activeCardId === id && (
                            <div className="mt-2">
                                <ul className="bg-white shadow-md rounded p-2">
                                    <li className="p-2 hover:bg-gray-100" onClick={() => handleOptionClick(id)}>
                                        Option 1
                                    </li>
                                    <li className="p-2 hover:bg-gray-100" onClick={() => handleOptionClick(id)}>
                                        Option 2
                                    </li>
                                    <li className="p-2 hover:bg-gray-100" onClick={() => handleOptionClick(id)}>
                                        Option 3
                                    </li>
                                    {/* Add more options as needed */}
                                </ul>
                            </div>
                        )}

                        {/* Second level dropdown */}
                       
                        {/* Additional nested dropdowns can be handled similarly */}
                    </Card>
                ))}
            </div>

          
  


            <div className="ml-10 mt-10">
                <h1 className="text-xl">Subject Assessment Test-SAT</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
                {subjects2.map(({ id, subject, image, status }) => (
                    <Card key={id}>
                        <div
                           
                            className="flex w-full gap-x-[15%] cursor-pointer"
                        >
                            <Image src={image} width={50} height={50} alt={subject} />
                            <Link href={`/applicants/home/${id}`} >
                            <p className="text-2xl text-gray-700">{subject}</p>
                            </Link>
                            
                        </div>
                        <div className="flex justify-end">
                            <p className="text-lg text-gray-400">{status}</p>
                        </div>
                        {/* First level dropdown */}
                        {activeCardId === id && (
                            <div className="mt-2">
                                <ul className="bg-white shadow-md rounded p-2">
                                    <li className="p-2 hover:bg-gray-100" onClick={() => handleOptionClick(id)}>
                                        Option 1
                                    </li>
                                    <li className="p-2 hover:bg-gray-100" onClick={() => handleOptionClick(id)}>
                                        Option 2
                                    </li>
                                    <li className="p-2 hover:bg-gray-100" onClick={() => handleOptionClick(id)}>
                                        Option 3
                                    </li>
                                    {/* Add more options as needed */}
                                </ul>
                            </div>
                        )}

                        {/* Second level dropdown */}
                     

                        {/* Additional nested dropdowns can be handled similarly */}
                    </Card>
                ))}
            </div>

   
    </>
  );
};

export default Home;
