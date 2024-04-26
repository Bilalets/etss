"use client"
import React from "react";


import Image from "next/image";
import dynamic from "next/dynamic";
const DynamicGauge = dynamic(() => import("./charts/Guage"), { ssr: false });
const DynamicLine = dynamic(() => import("./charts/Line"), { ssr: false });
const DynamicPie = dynamic(() => import("./charts/Pie"), { ssr: false });
const DynamicBargraph = dynamic(() => import("./charts/Bargraph"), { ssr: false });
const DynamicPiechart = dynamic(() => import("./charts/Piechart"), { ssr: false });
const DynamicPiechart1 = dynamic(() => import("./charts/Piechart1"), { ssr: false });
const Dashboard = () => {

  return (
    <>
      <div className="flex gap-5 mt-[45px] ">
        <div className="flex ml-[30px] ">
          <div className="w-[270px] max-w-md p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">
                 Overall Records
              </h5>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                     
                      <Image  className="w-8 h-8 " src={"/images/No.png"} alt="Neil image" width={50} height={50}/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        No of Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      10
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/Best.png"
                        alt="Bonnie image"
                        width={50} height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Top Best Attemps
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      15
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/pass.png"
                        alt="Michael image"
                        width={50} height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Pass Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      7
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/Fail.png"
                        alt="Lana image"
                        width={50} height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Fail Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      2
                    </div>
                  </div>
                </li>
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/dislike.png"
                        alt="Thomas image"
                        width={50} height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Worst Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      20
                    </div>
                  </div>
                </li>
              </ul>

              <div className="ml-5 mt-10 font-semibold">
                Passing Ratio : 55%
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[500px] bg-white border border-gray-200 rounded-lg shadow w-[830px] justify-center text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-4">
             Overall Performence
          </h5>
        <div>
        <DynamicLine/>
        </div>
         
        </div>

        <div className="flex flex-col h-[500px] bg-white border items-center border-gray-200 rounded-lg shadow w-[330px] justify-center text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-4">
            Total Time Spent
          </h5>
        <div className="h-[300px] w-[300px]">
        <DynamicGauge/>
        </div>
           
        </div>

      </div>


   

      <div className="flex flex-row mt-8  ">
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col w-[270px] h-48 ml-[30px] items-center bg-white border border-gray-200 rounded-lg shadow">
            <div className="mt-5 mb-2">
              <h5 className="text-center">Time Spent Today</h5>
            </div>

           
            <div className="h-[130px] w-[130px] mt-[-90px]">
              <DynamicPiechart1/>
            </div>
          
          </div>

          <div className="flex flex-col mt-2 w-[270px] h-48 ml-[30px] items-center bg-white border border-gray-200 rounded-lg shadow">
            <div className="mt-5 mb-2">
              <h5 className="text-center"> Accuracy Today</h5>
            </div>

            <div className="h-[130px] w-[130px] mt-[-90px]">
              <DynamicPiechart/>
            </div>
          </div>
        </div>


        <div className="flex flex-col w-[830px] h-[400px] bg-white border border-gray-200 rounded-lg shadow ml-[18px] justify-center  text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-8">
            Course Performance
          </h5>
          <div className="">
          <DynamicBargraph/>
          </div>
        </div>

        <div className="flex flex-col h-[400px] bg-white border border-gray-200 rounded-lg shadow  w-[330px] justify-center ml-[22px] text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-4">
             Overall Stats in Pie
          </h5>
          <div className="ml-8">
          <DynamicPie/>
          </div>
          
        </div>

        
      </div>


    </>
  );
};

export default Dashboard;
