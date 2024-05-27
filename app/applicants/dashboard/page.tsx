"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAppContext } from "@/app/context";

const DynamicLine = dynamic(() => import("./charts/Line"), { ssr: false });
const DynamicPie = dynamic(() => import("./charts/Pie"), { ssr: false });
const DynamicBargraph = dynamic(() => import("./charts/Bargraph"), {
  ssr: false,
});
const DynamicPiechart = dynamic(() => import("./charts/Piechart"), {
  ssr: false,
});

const Dashboard = () => {
  const {getrecord} = useAppContext();
  const [Excellentval, setExcellentval] = useState<number[]>([]);
  const [Goodval, setGoodval] = useState<number[]>([]);
  const [Betterval, setBetterval] = useState<number[]>([]);
  const [worstval, setworstvalues] = useState<number[]>([]);
  const [Avgval, setAvgval] = useState<number[]>([]);
  const [Bestval, setBestval] = useState<number[]>([]);

  const totalPercentage =
    getrecord?.reduce((total, item) => {
      return total + parseInt(item.Percentage);
    }, 0) ?? 0;

  const averagePercentage = totalPercentage / (getrecord?.length || 1);
  const formattedAveragePercentage = averagePercentage.toFixed(2);

  const displayrecord = useCallback((): void => {
    const Excellentvalues: number[] = [];
    const Bestvalues: number[] = [];
    const Bettervalues: number[] = [];
    const Goodvalues: number[] = [];
    const Averagevalues: number[] = [];
    const worstvalues: number[] = [];

    getrecord?.forEach((item) => {
      const pars = parseFloat(item.Percentage);
      if (pars < 33) {
        worstvalues.push(pars);
      } else if (pars < 39) {
        Averagevalues.push(pars);
      } else if (pars > 90) {
        Excellentvalues.push(pars);
      } else if (pars > 80) {
        Bestvalues.push(pars);
      } else if (pars > 70) {
        Bettervalues.push(pars);
      } else if (pars > 60) {
        Goodvalues.push(pars);
      }
    });

    setExcellentval(Excellentvalues);
    setBestval(Bestvalues);
    setBetterval(Bettervalues);
    setGoodval(Goodvalues);
    setAvgval(Averagevalues);
    setworstvalues(worstvalues);
  }, [getrecord]);

  useEffect(() => {
    displayrecord();
  }, [displayrecord]);

  return (
    <>
      <div className="flex gap-5 mt-[45px] ">
        <div className="flex ml-[30px] ">
          <div className="w-[270px] max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                        alt="No of Attempts"
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
                        alt="Excellent Attempts"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Excellent Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {Excellentval?.length}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/bestattempt.png"
                        alt="Best Attempts"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Best Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {Bestval?.length}
                    </div>
                  </div>
                </li>

                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/pass.png"
                        alt="Better Attempts"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Better Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {Betterval?.length}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/m.png"
                        alt="Good Attempts"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Good Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {Goodval?.length}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/avg.png"
                        alt="Average Attempts"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Average Attempts
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {Avgval?.length}
                    </div>
                  </div>
                </li>

                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src="/images/dislike.png"
                        alt="Worst Attempts"
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
                Index : 0%
              </div>
              <div className="ml-5 mt-5 font-semibold">
                Overall Ratio : {formattedAveragePercentage}%
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[670px] bg-white border border-gray-200 rounded-lg shadow w-[1175px] justify-center text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-4">
            Overall Monthly Performence
          </h5>
          <div>
             <DynamicLine />
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col w-[270px] h-[400px] ml-[30px] items-center bg-white border border-gray-200 rounded-lg shadow">
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

        <div className="flex flex-col w-[830px] h-[400px] bg-white border border-gray-200 rounded-lg shadow ml-[18px] justify-center text-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-8">
            Subject Performance
          </h5>
          <div>
           <DynamicBargraph />
          </div>
        </div>

        <div className="flex flex-col h-[400px] bg-white border border-gray-200 rounded-lg shadow w-[330px] justify-center ml-[22px] text-center">
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
