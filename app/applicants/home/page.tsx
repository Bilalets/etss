'use client';
import { Button, Card } from 'flowbite-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '../constants/page';

const Home = () => {
  const subjects = [
    {
      id: 1,
      subject: 'English',
      image: '/images/eng.png',
      status: 'Available',
    },
    {
      id: 2,
      subject: 'Biology',
      image: '/images/bio.png',
      status: 'Available',
    },
    {
      id: 3,
      subject: 'Chemistry',
      image: '/images/chemistry.png',
      status: 'Available',
    },
    {
      id: 4,
      subject: 'Maths',
      image: '/images/maths.png',
      status: 'Available',
    },
    {
      id: 5,
      subject: 'IELTS',
      image: '/images/ielts.png',
      status: 'Available',
    },
    {
      id: 6,
      subject: 'General Test',
      image: '/images/general.png',
      status: 'Available',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-10 cursor-pointer">
        {subjects.map(({ id, subject, image, status }) => (
          <Card key={id}>
            <Link href={`${BASE_URL}/applicants/assessment/${id}`}>
              <div className="flex w-full gap-x-[15%]">
                <Image src={image} width={70} height={70} alt={subject} />
                <p className="text-2xl text-gray-700">{subject}</p>
              </div>
              <div className="flex justify-end">
                <p className="text-lg text-gray-400 ">{status}</p>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
