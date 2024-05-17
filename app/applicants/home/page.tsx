"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "lucide-react";
import Link from "next/link";

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
  const [getData, setData] = useState<Test[]>();
  const [checkId, setcheckId] = useState<Test>();
  const [serData, setserData] = useState<Test>();
  const [getSubcategory, setSubcategory] = useState<Category | null>(null);
  const [subjectsArray, setSubjectsArray] = useState<Subcategory | null>(null);

  const itemWidth = 0; // Adjust the item width accordingly

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/Allservices/");
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [set, seed] = useState<Subcategory[]>([]);

  const [translateValue, setTranslateValue] = useState(0);

  const containerWidth = itemWidth * set.length;

  useEffect(() => {
    if (getSubcategory) {
      const subcategories = getSubcategory.subcategory;
      seed(subcategories);
    }
  }, [getSubcategory, seed]);

  const handleMoveRight = () => {
    const firstItem = set[0];
    const newSet = set.slice(1).concat(firstItem);
    seed(newSet);
  
    const newTranslateValue = translateValue - itemWidth;
  
    if (newTranslateValue < -(set.length - 1) * itemWidth) {
    
      setTranslateValue(-(containerWidth - itemWidth));
    } else {
      setTranslateValue(newTranslateValue);
    }
  };
  
  const handleMoveLeft = () => {
    const lastItem = set[set.length - 1];
    const newSet = [lastItem, ...set.slice(0, -1)];
    seed(newSet);
  
    const newTranslateValue = translateValue + itemWidth;
  
    if (newTranslateValue > 0) {
      // At the beginning of the set, allow moving left
      setTranslateValue(0);
    } else {
      setTranslateValue(newTranslateValue);
    }
  };
  const subcategorydata = (item: Category) => {
    setSubcategory(item);
  };

  const serviceData = (item: Test) => {
    setserData(item);
    setcheckId(item)
  };

  const subjectData = (item: Subcategory) => {
    setSubjectsArray(item);
  };

  const [getSubject, setSubject] = useState<Subject[]>([]);
  const [subtranslateValue, setsubTranslateValue] = useState(0);
  const containerWidths = itemWidth * 0

  useEffect(() => {
    if (subjectsArray) {
      const sub = subjectsArray.subject;
      setSubject(sub);
    }
  }, [subjectsArray, setSubject]);

  const handleMoveRightss = () => {
    const firstItem = getSubject[0];
    const newSet = getSubject.slice(1).concat(firstItem);
    setSubject(newSet);

    const newTranslateValuee = subtranslateValue - itemWidth;

    if (Math.abs(newTranslateValuee) >= containerWidths) {
      setsubTranslateValue(0);
    } else {
      setsubTranslateValue(newTranslateValuee);
    }
  };

  const handleMoveLeftt = () => {
    const lastItem = getSubject[getSubject.length - 1];
    const newSet = [lastItem, ...getSubject.slice(0, -1)];
    setSubject(newSet);

    const newTranslateValue = subtranslateValue + itemWidth;

    if (newTranslateValue > 0) {
      setsubTranslateValue(-(containerWidths - itemWidth));
    } else {
      setsubTranslateValue(newTranslateValue);
    }
  };

  return (
    <>
      <div className="text-white gap-5 flex flex-row  h-32 w-full border-2 bg-red-600 shadow-2xl font-medium text-2xl px-5 py-2.5  items-center">
      {getData?.map((Service) => (
  <div
    key={Service.id}
    onClick={() => serviceData(Service)}
    className="flex cursor-pointer"
    style={{ fontWeight: checkId?.id === Service.id ? 'bold' : 'normal' }}
  >
    {Service.name}
  </div>
))}
      </div>

      <div className="flex flex-row ml-10 mt-[-25px] gap-3">
        {serData?.category?.map((Cat) => (
          <div key={Cat.id} onClick={() => subcategorydata(Cat)}>
            <div>
              <button className="py-2.5 px-5 shadow-md me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {Cat.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {getSubcategory && (
        <div className="flex items-center flex-col shadow-xl ml-10 border-2 rounded-lg mb-9 mt-7 bg-white h-[450px] w-[450px]">
          <div>
            <Image
              src={"/images/paper.jpg"}
              width={150}
              height={150}
              alt="pic"
              className="rounded-md mt-5"
            />
          </div>
          <div>
            <div className="flex flex-row items-center">
           
  <button onClick={() => handleMoveLeft()} className="mt-8">
    <ChevronLeftIcon className="w-8 h-8" />
  </button>

              <div className="flex overflow-hidden">
                <div
                  className="flex w-auto max-w-[350px] transition-transform duration-500"
                  style={{
                    transform: `translateX(${translateValue}px)`,
                  }}
                >
                  <div className="flex flex-row gap-2 mt-10">
                    {set.map((item) => (
                      <div className="flex" key={item.id}>
                        <button
                          onClick={() => subjectData(item)}
                          type="button"
                          className="text-gray-900  inline-flex items-center shadow-lg bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 px-2.5 py-2.5 font-medium rounded-lg text-sm whitespace-nowrap dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          {item.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => handleMoveRight()} className="mt-8">
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            </div>
          </div>

          <div className="mt-3">
            <b>Overview</b>
            <p className=" mt-3">Subject Includes: English, Maths</p>
            <p>Number Of Attempts:100</p>
          </div>
          <div className="w-full h-[0.5px] bg-gray-300 mt-3"></div>

          {getSubject && getSubject.length > 0 ? (
            <div className="flex flex-row mt-[-20px]">
              <div className="flex">
                <button onClick={() => handleMoveLeftt()} className="mt-8">
                  <ChevronLeftIcon className="w-8 h-8" />
                </button>
                <div className="overflow-hidden">
                  <div
                    className="flex w-auto max-w-[350px] transition-transform duration-500"
                    style={{
                      transform: `translateX(${subtranslateValue}px)`,
                    }}
                  >
                    <div className="flex mt-10 gap-2">
                      {getSubject.map((item) => (
                        <div className="flex" key={item?.id}>
                          <Link href={`/applicants/assessment/${item.id}`}>
                          <button
                            type="button"
                            className="text-gray-900 inline-flex items-center shadow-md bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 px-2.5 py-2.5 font-medium rounded-lg text-sm whitespace-nowrap dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            {item?.name}
                          </button>
                          </Link>
                         
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button onClick={() => handleMoveRightss()} className="mt-8">
                  <ChevronRightIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
