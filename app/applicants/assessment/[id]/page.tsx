'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { MyAssessment } from '../components/';
import { Button } from 'flowbite-react';
import { HiAdjustments, HiOutlineClock } from 'react-icons/hi';

const Assessment: React.FC = () => {
  const { id } = useParams();
  const [isStart, setIsStart] = useState(false);
  if (!isStart) {
    return (
      <>
        <div className="flex items-center justify-center p-10">
          <div className=" w-full lg:w-3/4 bg-white shadow-md rounded-md p-5">
            <p className="text-xl font-semibold">General assessment</p>
            <p className="mt-5 text-gray-600 text-sm">
              Topics: Pak Study, Islamiat, English, General Science
            </p>
            <p className="mt-5 text-gray-500 text-sm">5.6M people took this</p>
            <div className="mt-8">
              <div className="flex gap-x-4 ">
                <HiAdjustments className="w-6 h-6 text-gray-500" />
                <p className="text-sm">
                  <b>10</b> multiple choice questions
                </p>
              </div>
              <div className="flex gap-x-4 mt-5">
                <HiOutlineClock className="w-5 h-5 text-gray-500" />
                <p className="text-sm">
                  <b>1</b> minute per question
                </p>
              </div>
              <hr className="mt-6" />
              <div className="mt-5">
                <p className="text-lg font-semibold">Before you start</p>
                <ul className=" list-disc m-5 flex flex-col gap-3 text-sm">
                  <li>
                    You must complete this assessment in one session - make sure
                    your internet is reliable.
                  </li>
                  <li>
                    You can take this assessment once if you do not qualify.
                  </li>
                  <li>We will not show your result without your permission.</li>
                </ul>
              </div>
              <hr className="mt-5" />
              <div className="mt-5 flex justify-between">
                <p className="text-sm">Language: English</p>
                <Button
                  size="sm"
                  color="dark"
                  pill
                  onClick={() => setIsStart(true)}
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <MyAssessment />
      </div>
    );
  }
};

export default Assessment;
