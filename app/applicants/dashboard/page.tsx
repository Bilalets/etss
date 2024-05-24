"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import { useSession } from "next-auth/react";
const DynamicLine = dynamic(() => import("./charts/Line"), { ssr: false });
const DynamicPie = dynamic(() => import("./charts/Pie"), { ssr: false });
const DynamicBargraph = dynamic(() => import("./charts/Bargraph"), {
  ssr: false,
});
const DynamicPiechart = dynamic(() => import("./charts/Piechart"), {
  ssr: false,
});
interface record{
  Percentage: string
  Correctawn: string
  Wrongawn: string
  subjectname: string
}

interface ID{
  id:string
}

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [getData,setData]=useState<ID>()
  const [getrecord,setrecord]=useState<record[]>()
  const [percent,setpercent]=useState<number[]>()
  const [getnumber,setnumber]=useState<number[]>()
  const [passvaluess,setpassvalues]=useState<number[]>()
  const [worstval,setworstvalues]=useState<number[]>()
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post("/api/Getuserid",{email:session?.user?.email});
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [session]);

useEffect(()=>{
  const fetchresult=async()=>{
    try {
      const response = await axios.post("/api/Service/Subrecord",{userId:getData?.id});
      setrecord(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchresult()
},[getData])



const totalPercentage = getrecord?.reduce((total, item) => {
  return total + parseInt(item.Percentage);
}, 0) ?? 0;

const averagePercentage = totalPercentage / (getrecord?.length || 1); 

const formattedAveragePercentage = averagePercentage.toFixed(2); 


const displayrecord = useCallback((): void => {
  const lowValues: number[] = [];
  const numvalues: number[] = [];
  const passvalues: number[] = [];
  const worstvalues: number[] = [];

  getrecord?.forEach((item) => {
    const pars = parseFloat(item.Percentage);
    if (pars < 33) {
      lowValues.push(pars);
    }
    if (pars > 70) {
      numvalues.push(pars);
    }
    if (pars >= 33) {
      passvalues.push(pars);
    }
    if (pars < 25) {
      worstvalues.push(pars);
    }
  });
  setpercent(lowValues);
  setnumber(numvalues);
  setpassvalues(passvalues);
  setworstvalues(worstvalues);
}, [getrecord]);

useEffect(() => {
  displayrecord();
},[displayrecord]);


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
                      <Image
                        className="w-8 h-8 "
                        src={"/images/No.png"}
                        alt="Neil image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        No of Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                     {getrecord?.length || 0}
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
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                       Best Attemps
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {getnumber?.length}
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
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Pass Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {passvaluess?.length}
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
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Fail Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {percent?.length}
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
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Worst Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {worstval?.length}
                    </div>
                  </div>
                </li>
              </ul>

              <div className="ml-5 mt-10 font-semibold">
                Overall Ratio : {formattedAveragePercentage}%
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[500px] bg-white border border-gray-200 rounded-lg shadow w-[1175px] justify-center text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-4">
            Overall Monthly Performence
          </h5>
          <div>
            <DynamicLine />
          </div>
        </div>

       
      </div>

      <div className="flex flex-row mt-8  ">
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col  w-[270px] h-96 ml-[30px] items-center bg-white border border-gray-200 rounded-lg shadow">
            <div className="mt-5 mb-2">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-4">
           Last Test Accuracy
          </h5>
            </div>

            <div className="h-[300px] w-[270px] mt-[10px]">
              <DynamicPiechart />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[830px] h-[400px] bg-white border border-gray-200 rounded-lg shadow ml-[18px] justify-center  text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-8">
            Subject Performance
          </h5>
          <div className="">
            <DynamicBargraph />
          </div>
        </div>

        <div className="flex flex-col h-[400px] bg-white border border-gray-200 rounded-lg shadow  w-[330px] justify-center ml-[22px] text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-4">
            Overall Stats in Pie
          </h5>
          <div className="ml-8">
            <DynamicPie />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
