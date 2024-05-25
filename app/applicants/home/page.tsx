"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { MyAssessment } from "../assessment/components";

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
  Desc: string;
  Prep: string;
  Subs: string[];
  subcategory: Subcategory[];
}

interface Test {
  id: string;
  name: string;
  category: Category[];
}

const Home = () => {
  var settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [getData, setData] = useState<Test[]>();
  const [serData, setSerData] = useState<Test>();
  const [selectedSubcategories, setSelectedSubcategories] = useState<{
    [categoryId: string]: Subcategory | null;
  }>({});

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

  const displayService = (item: Test) => {
    setSerData(item);
  };

  const displaysubject = (categoryId: string, subcategory: Subcategory) => {
    setSelectedSubcategories((prev) => ({
      ...prev,
      [categoryId]: subcategory,
    }));
  };

  return (
    <>
      <div className="flex flex-row gap-5 justify-center mt-10">
        {getData?.map((item) => (
          <div key={item.id} onClick={() => displayService(item)}>
            <button className="relative group cursor-pointer text-sky-50 overflow-hidden h-40 w-96 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
              <p className="z-10 text-xl">{item.name}</p>
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 grid-rows-2 ml-16">
        {serData?.category.map((item) => (
          <div key={item.id} className="flex">
            <div className="mt-10">
              <div className="h-[550px] w-[350px] bg-white m-auto shadow-md rounded-[1em] overflow-hidden relative group p-2 z-0">
                <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[1530%] duration-500 z-[-1]"></div>

                <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"></button>

                <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-12 w-32 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p className="z-10">{item.name}</p>
                </button>

                <div className="flex ml-3 justify-center">
                  <div className="w-60 mt-10 justify-center items-center text-center">
                    <Slider {...settings}>
                      {item.subcategory.map((sub) => (
                        <div
                          className="justify-center items-center"
                          key={sub.id}
                        >
                          <button
                            onClick={() => displaysubject(item.id, sub)}
                            className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                          >
                            <span className=" group-hover:text-[white]   relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              {sub.name}
                            </span>
                          </button>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                <div className="mt-12 ml-[20px] group-hover:text-[white]">
                  <div>
                    <b>Overview</b>
                  </div>
                  <div>Field Of Expertise: {item.Prep}</div>
                  <b>Subjects:</b>
                  <div>
                    {item.Subs.map((item,index) => (
                      
                      <div key={index}>{item}</div>
                    ))}
                  </div>

                  <div>
                    <p>Total Questions: {item.Desc}</p>
                  </div>
                </div>

                {selectedSubcategories[item.id] && (
                  <div className="flex mt-5 justify-center">
                    <div className="w-60  justify-center items-center text-center">
                      <Slider {...settings}>
                        {selectedSubcategories[item.id]?.subject.map((sub) => (
                          <div
                            className="flex justify-center items-center"
                            key={sub.id}
                          >
                            <Link
                              href={{
                                pathname: "/applicants/assessment/Tests",
                                query: {
                                  subjectname: sub.name,
                                  Subjectid: sub.id,
                                },
                              }}
                            >
                              <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="group-hover:text-[white]  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  {sub.name}
                                </span>
                              </button>
                            </Link>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
