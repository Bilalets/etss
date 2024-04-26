"use client";
import GeneralHeader from "@/app/superadmin/components/general_header";
import { Button, Card, Modal, TextInput } from "flowbite-react";
import {
  DeleteIcon,
  Edit,
  PlusCircle,
  Save,
  SquarePen,
  Trash2,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";

const Displayproduct = () => {
  const [openAdd, setOpen] = useState(false);
  const subjects = [
    { id: 1, subject: "Self Assessment Test" },
    { id: 2, subject: "Scholastic Assessment Test " },
    { id: 3, subject: "Subject Assessment Test" },
  ];
  return (
    <>
     <Modal
        show={openAdd}
        size="md"
        popup
        onClose={() => setOpen(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-medium font-medium text-gray-700 dark:text-white">
            Edit Product
            </h3>
            <TextInput id="name" placeholder="Product Name" required />
          </div>
          <div className="flex justify-between w-full mt-5">
            <div className="flex-wrap  mt-10 gap-2">
              <Button>
                <Save className="mr-2" />
                Save
              </Button>
            </div>

            <div className="flex-wrap mt-10 gap-2">
              <Button>
                <XCircle className="mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="flex  flex-row gap-5 justify-center">
        <div className=" rounded-md overflow-hidden bg-white shadow-xl h-[50px] w-[400px]">
          <input
            type="text"
            name="text"
            placeholder="Search Services"
            className="input bg-transparent outline-none border-none  font-sans text-lg font-semibold"
          />
        </div>
        <div className=" mt-1.5">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Search
          </button>
        </div>

        <div className="flex  flex-row gap-5 justify-center">
          <div className=" rounded-md overflow-hidden bg-white shadow-xl h-[50px] w-[400px]">
            <input
              type="text"
              name="text"
              placeholder="Create Services"
              className="input bg-transparent outline-none border-none font-sans text-lg font-semibold"
            />
          </div>
          <div className=" mt-1.5">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Create
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col ml-96 p-5 my-5 ">
        {subjects.map((item, index) => (
          <Card
            key={item.id}
            className="m-5 w-full flex flex-row lg:max-w-[500px]"
          >
            <div className="flex justify-between align-text-bottom">
              <p>{index + 1}</p>
              <p className=" text-lg text-gray-500 ml-5">{item.subject}</p>
              <div className="flex flex-row absolute ml-96 gap-4">
                <Edit style={{ color: "green" }} onClick={()=>setOpen(!openAdd)} />
                <Trash2 style={{ color: "red" }} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Displayproduct;
