import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the type for subjects
type Subject = {
    id: number;
    subject: string;
    image: string;
    status: string;
    option: string[];
 
};


const subjects: Subject[] = [
    {
        id: 1,
        subject: 'CSS',
        image: '/images/maths.png',
        status: 'Available',
        option: ['MPT'],
       
    },
    {
        id: 2,
        subject: 'IELTS',
        image: '/images/ielts.png',
        status: 'Available',
        option: ['Writing', 'Listening', 'Speaking', 'Reading'],
        
    },
    {
        id: 3,
        subject: "General Test",
        image: "/images/general.png",
        status: "Available",
        option:["Quantitative reasoning"," Verbal reasoning", " Analytical reasoning"]
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


export async function generateStaticParams() {
    return subjects.map((subject) => ({
        id: subject.id.toString(),
    }));
}


const Singleproduct = async ({ params }: { params: { id: string } }) => {

    const subject = subjects.find((sub) => sub.id.toString() === params.id);

   
    if (subject) {
        return (
            <>
            <div className="flex mt-10 ml-[340px] flex-row w-[800px] h-36 gap-10 border justify-center items-center bg-slate-50">
               
                <div><Image src={subject.image} alt={subject.subject} width={50} height={50} /></div>
                <h1 className="text-3xl  mb-4">{subject.subject}</h1>
                <p className="text-lg">Status: {subject.status}</p>
                
               
            </div>
            <div className=' flex flex-row ml-[300px]'>
<div>
{subject.option.map((opt, index) => (
                <div className="flex m-10 flex-row w-[800px] h-16 gap-10 border justify-center items-center bg-slate-50" key={index}>
                
                <div className=' ml-[300px]'> {opt}</div>
                <div >
                    <Link href={`/applicants/assessment/1}`}>
                <button className='text-white bg-[#050708]   hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2'>Start Assessment</button>
                </Link>
                </div>
                </div>
            ))}
        
</div>
 

            </div>
           
            </>
        );
    }

   
    return (
        <div className="p-4">
            <p>Subject not found.</p>
        </div>
    );
};

export default Singleproduct;
