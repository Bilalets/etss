"use client";
import axios from "axios";
axios.interceptors.request.use((config) => {
  config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate, max-age=0';
  return config;
});
import {
  ArrowDown,
  ArrowUp,
  DeleteIcon,
  Edit2Icon,
  PenIcon,
  Plus,
  Trash2Icon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

const DisplayProduct = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [catopenDropdownIndex, setcatOpenDropdownIndex] = useState<
    number | null
  >(null);
  const [subopenDropdownIndex, setsubOpenDropdownIndex] = useState<
    number | null
  >(null);
  const [sabopenDropdownIndex, setsabOpenDropdownIndex] = useState<
    number | null
  >(null);
  const [getdata, setdata] = useState<Test[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/Allservices/");
      if (response.status === 200) {
        const data = response.data;
        setdata(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addservc = async () => {
    const servicename = prompt("Enter Service Name");

    if (servicename && servicename.trim() !== "") {
      try {
        
  
        await axios.post("/api/Service/", { name: servicename });

        toast.success("Service added successfully!");

      } catch (error) {
        console.error("Error adding service:", error);
        toast.error("Error adding service");
      }
    } else {
      toast.error("Service name cannot be empty");
    }
  };

  const addcate = async (SerID: string) => {
    const catname = prompt("Enter Category Name");

    if (catname && catname.trim() !== "") {
      try {
      
        await axios.post("/api/Service/Category", {
          name: catname,
          serviceId: SerID,
        });

        toast.success("Category added successfully!");

        await  fetchData();
      } catch (error) {
        console.error("Error adding category:", error);
        toast.error("Error adding category");
      }
    } else {
      toast.error("Category name cannot be empty");
    }
  };

  const addsubcat = async (catID: string) => {
    const subcatname = prompt("Enter Subcategory Name");
    if (subcatname) {
      try {
        const headers = {
          "Content-Type": "application/json",  
          "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",  
      
        };
  
        await axios.post("/api/Service/Subcategory", {
          name: subcatname,
          categoryId: catID,
        },{headers});
    
        await   fetchData();
        toast.success("Subcategory added successfully!");
      } catch (error) {
        console.error("Error adding subcategory:", error);
        toast.error("Error adding subcategory");
      }
    }
  };
  const addsubjj = async (subcatID: string) => {
    const subname = prompt("Enter Subject Name");
    if (subname) {
      try {
       
        await axios.post("/api/Service/Sub", {
          name: subname,
          subcategoryId: subcatID,
        });
        toast.success("Subject added successfully!");

        await    fetchData();
      } catch (error) {
        console.error("Error adding subject:", error);
        toast.error("Error adding subject");
      }
    }
  };

  const addchaps = async (subID: string) => {
    const chapname = prompt("Enter Chapter Name");
    if (chapname && chapname.trim() !== "") {
      try {
      
        await axios.post("/api/Service/Chapters", {
          name: chapname,
          subjectsId: subID,
        });

        toast.success("Chapter added successfully!");

        await  fetchData();
      } catch (error) {
        console.error("Error adding chapter:", error);
        toast.error("Error adding chapter");
      }
    } else {
      toast.error("Chapter name cannot be empty");
    }
  };
  const deleteservicee = async (SerID: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this service? This action cannot be undone."
    );

    if (confirmation) {
   
      try {

        await axios.delete("/api/Service/delservice", {
          data: { id: SerID },
        });

        toast.success("Service deleted successfully!");

        await  fetchData();
      } catch (error) {
        console.error("Error deleting service:", error);
        toast.error("Error deleting service");
      }
    }
  };

  const deletecat = async (SerID: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this category? This action cannot be undone."
    );

    if (confirmation) {
      try {
    
        await axios.delete("/api/Service/delcategory", {
          data: { id: SerID },
        });

        toast.success("Category deleted successfully!");

        await    fetchData();
      } catch (error) {
        console.error("Error deleting category:", error);
        toast.error("Error deleting category");
      }
    }
  };

  const deletesubcat = async (SerID: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this subcategory? This action cannot be undone."
    );

    if (confirmation) {
      try {
        await axios.delete("/api/Service/delsubcategory", {
          data: { id: SerID },
        });

        toast.success("Subcategory deleted successfully!");

        await    fetchData();
      } catch (error) {
        console.error("Error deleting subcategory:", error);
        toast.error("Error deleting subcategory");
      }
    }
  };

  const deletesab = async (SerID: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this subject? This action cannot be undone."
    );

    if (confirmation) {
      try {
        await axios.delete("/api/Service/deletesub", {
          data: { id: SerID },
        });

        toast.success("Subject deleted successfully!");

        await      fetchData();
      } catch (error) {
        console.error("Error deleting subject:", error);
        toast.error("Error deleting subject");
      }
    }
  };

  const deletechap = async (SerID: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this chapter? This action cannot be undone."
    );

    if (confirmation) {
      try {
        await axios.delete("/api/Service/deletechapters", {
          data: { id: SerID },
        });

        toast.success("Chapter deleted successfully!");

        await  fetchData();
      } catch (error) {
        console.error("Error deleting chapter:", error);
        toast.error("Error deleting chapter");
      }
    }
  };
  const updateserv = async (SerID: string) => {
    let updatedservicename = prompt("Enter New Service Name");
    if (updatedservicename) {
      try {
        await axios.put("/api/Service/updateservice", {
          name: updatedservicename,
          id: SerID,
        });
        toast.success("Service Name Updated Successfully");
        await    fetchData();
      } catch (error) {
        toast.error("Error Updating Service Name");
        console.log(error);
      }
    }
  };
  const updatecate = async (SerID: string) => {
    let updatedcategoryname = prompt("Enter New Category Name");
    if (updatedcategoryname) {
      try {
        await axios.put("/api/Service/updatecategory", {
          name: updatedcategoryname,
          id: SerID,
        });

        toast.success("Category Name Updated Sucessfully");
        await    fetchData();
      } catch (error) {
        toast.error("Error Updating Category Name");
      }
    }
  };
  const updatesubcate = async (SerID: string) => {
    let updatedsubcategoryname = prompt("Enter New Category Name");

    try {
      await axios.put("/api/Service/updatesubcategory", {
        name: updatedsubcategoryname,
        id: SerID,
      });
      toast.success("Subcategory Name Updated Successfully");
      await   fetchData();
    } catch (error) {
      toast.error("Error Updating Subcategory Name");
      console.log(error);
    }
  };
  const updatesubjects = async (SerID: string) => {
    let updatedsubjectname = prompt("Enter New Category Name");
    if (updatedsubjectname) {
      try {
        await axios.put("/api/Service/updatesubjectss", {
          name: updatedsubjectname,
          id: SerID,
        });
        toast.success("Subject Name Updated Successfully");
        await    fetchData();
      } catch (error) {
        toast.error("Error Updating Subject Name");
        console.error("Error updating chapter:", error);
      }
    }
  };
  const updatechapters = async (SerID: string) => {
    let updatedchaptersname = prompt("Enter New Category Name");
    if (updatedchaptersname) {
      try {
        await axios.put("/api/Service/updatechapters", {
          name: updatedchaptersname,
          id: SerID,
        });

        toast.success("Chapter Name updated successfully!");
        await    fetchData();
      } catch (error) {
        toast.error("Error updating chapter Name");
        console.error("Error updating chapter:", error);
      }
    }
  };
  const toggleDropdown = (index: number) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  const cattoggleDropdown = (index: number) => {
    if (catopenDropdownIndex === index) {
      setcatOpenDropdownIndex(null);
    } else {
      setcatOpenDropdownIndex(index);
    }
  };

  const subtoggleDropdown = (index: number) => {
    if (subopenDropdownIndex === index) {
      setsubOpenDropdownIndex(null);
    } else {
      setsubOpenDropdownIndex(index);
    }
  };

  const sabtoggleDropdown = (index: number) => {
    if (sabopenDropdownIndex === index) {
      setsabOpenDropdownIndex(null);
    } else {
      setsabOpenDropdownIndex(index);
    }
  };

  return (
    <>
      <div className=" overflow-auto">
        <div className=" ml-80">
          <div className="flex flex-row gap-2">
            <div>
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-3xl  text-sm p-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => addservc()}
              >
                <Plus />
              </button>
            </div>

            <div>
              <h1 className=" text-2xl mb-8">SERVICES</h1>
            </div>
          </div>

          {/* Render services */}
          {getdata.map((Seritem, serviceIndex) => (
            <div key={serviceIndex} className=" mb-16 mt-10">
              <div
                id="dropdownDefaultButton"
                onClick={() => toggleDropdown(serviceIndex)}
                className="text-white h-[60px] gap-10  justify-between border w-[800px] bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg  focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {openDropdownIndex === serviceIndex ? (
                  // Display ArrowUp icon if the dropdown is open
                  <ArrowUp />
                ) : (
                  // Display ArrowDown icon if the dropdown is closed
                  <ArrowDown />
                )}
                {Seritem.name}
                <div className=" flex flex-row  gap-5">
                  <PenIcon onClick={() => updateserv(Seritem.id)} />
                  <Trash2Icon onClick={() => deleteservicee(Seritem.id)} />
                </div>
              </div>

              {openDropdownIndex === serviceIndex && (
                <div
                  id="dropdown"
                  className="z-10 shadow-2xl flex flex-row  mt-5 bg-white divide-y justify-center items-center divide-gray-100 rounded-lg p-5 w-[800px] h-full dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <div className="flex flex-row gap-2 mb-5 mt-3">
                      <button
                        className="text-white bg-gray-800 ml-4  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl  text-sm me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => addcate(Seritem.id)}
                      >
                        <Plus />
                      </button>
                      <h1 className=" text-2xl">Categories</h1>
                    </div>

                    {Seritem.category.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div
                          id="dropdownDefaultButton"
                          onClick={() => cattoggleDropdown(categoryIndex)}
                          className="text-white mb-5 h-[60px] justify-between gap-10 bg-orange-500 w-[700px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          {catopenDropdownIndex === categoryIndex ? (
                            <ArrowUp />
                          ) : (
                            <ArrowDown />
                          )}
                          {category.name}

                          {/* Button to edit the category */}
                          <div className="flex flex-row  gap-5">
                            <PenIcon onClick={() => updatecate(category.id)} />

                            {/* Button to delete the category */}
                            <Trash2Icon
                              onClick={() => deletecat(category.id)}
                            />
                          </div>
                        </div>

                        {catopenDropdownIndex === categoryIndex && (
                          <div
                            id="dropdown"
                            className="z-10 shadow-2xl flex flex-row mt-5 bg-white divide-y justify-center items-center divide-gray-100 rounded-lg  h-full  dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDefaultButton"
                            >
                              <div className="flex flex-row mb-3">
                                <div>
                                  <button
                                    onClick={() => addsubcat(category.id)}
                                    className="text-white bg-gray-800 ml-4  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl  text-sm me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                  >
                                    <Plus />
                                  </button>
                                </div>
                                <h1 className=" text-lg">Add Subcategory</h1>
                              </div>
                              {/* Render subcategories */}

                              {category.subcategory.map(
                                (subcategory, subcategoryIndex) => (
                                  <div key={subcategoryIndex}>
                                    <div
                                      id="dropdownDefaultButton"
                                      onClick={() =>
                                        subtoggleDropdown(subcategoryIndex)
                                      }
                                      className="text-white mb-5 h-[60px]  w-[700px]  gap-10 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  justify-between rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                      {subopenDropdownIndex ===
                                      subcategoryIndex ? (
                                        <ArrowUp />
                                      ) : (
                                        <ArrowDown />
                                      )}

                                      {subcategory.name}
                                      <div className=" flex flex-row gap-5">
                                        {/* Button to edit the subcategory */}
                                        <Edit2Icon
                                          onClick={() =>
                                            updatesubcate(subcategory.id)
                                          }
                                        />

                                        {/* Button to delete the subcategory */}
                                        <Trash2Icon
                                          onClick={() =>
                                            deletesubcat(subcategory.id)
                                          }
                                        />
                                      </div>
                                    </div>

                                    {subopenDropdownIndex ===
                                      subcategoryIndex && (
                                      <div
                                        id="dropdown"
                                        className="z-10 flex  mb-5 flex-row  bg-white divide-y justify-center items-center divide-gray-100 rounded-lg shadow h-full  dark:bg-gray-700"
                                      >
                                        <ul
                                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                          aria-labelledby="dropdownDefaultButton"
                                        >
                                          <div className=" flex flex-row">
                                            <button
                                              className="text-white bg-gray-800 ml-4  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl  text-sm me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                              onClick={() =>
                                                addsubjj(subcategory.id)
                                              }
                                            >
                                              <Plus />
                                            </button>
                                            <h1 className=" text-lg">
                                              Add Subjects
                                            </h1>
                                          </div>

                                          {/* Render subjects */}
                                          {subcategory.subject.map(
                                            (subject, subjectIndex) => (
                                              <div key={subjectIndex}>
                                                <div
                                                  id="dropdownDefaultButton"
                                                  onClick={() =>
                                                    sabtoggleDropdown(
                                                      subjectIndex
                                                    )
                                                  }
                                                  className="text-white mb-5 h-[60px] w-[700px] justify-between gap-10 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                  {sabopenDropdownIndex ===
                                                  subjectIndex ? (
                                                    <ArrowUp />
                                                  ) : (
                                                    <ArrowDown />
                                                  )}

                                                  {subject.name}

                                                  {/* Button to edit the subject */}
                                                  <div className="flex flex-row gap-5">
                                                    <Edit2Icon
                                                      onClick={() =>
                                                        updatesubjects(
                                                          subject.id
                                                        )
                                                      }
                                                    />
                                                    {/* Button to delete the subject */}
                                                    <Trash2Icon
                                                      onClick={() =>
                                                        deletesab(subject.id)
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                {sabopenDropdownIndex ===
                                                  subjectIndex && (
                                                  <div
                                                    id="dropdown"
                                                    className="z-10 flex flex-row  bg-white divide-y  items-center divide-gray-100 rounded-lg   h-full dark:bg-gray-700"
                                                  >
                                                    <ul
                                                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                      aria-labelledby="dropdownDefaultButton"
                                                    >
                                                      <div className=" flex flex-row">
                                                        <button
                                                          className="text-white bg-gray-800 ml-4  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl  text-sm me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                                          onClick={() =>
                                                            addchaps(subject.id)
                                                          }
                                                        >
                                                          <Plus />
                                                        </button>
                                                        <h1 className="text-lg">
                                                          Add Chapters
                                                        </h1>
                                                      </div>

                                                      <ul>
                                                        {subject.chapters.map(
                                                          (
                                                            chapter,
                                                            chapterIndex
                                                          ) => (
                                                            <li
                                                              key={chapterIndex}
                                                            >
                                                              <div className="text-white gap-10 h-[60px] w-[700px] justify-between mb-5 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <div className="ml-[300px]">
                                                                  {chapter.name}
                                                                </div>

                                                                <div className=" flex flex-row gap-5">
                                                                  <Edit2Icon
                                                                    onClick={() =>
                                                                      updatechapters(
                                                                        chapter.id
                                                                      )
                                                                    }
                                                                  />
                                                                  <Trash2Icon
                                                                    onClick={() =>
                                                                      deletechap(
                                                                        chapter.id
                                                                      )
                                                                    }
                                                                  />
                                                                </div>
                                                              </div>

                                                              {/* Button to edit the chapter */}
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </ul>
                                                  </div>
                                                )}

                                                {/* Render chapters */}
                                              </div>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render categories */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayProduct;
