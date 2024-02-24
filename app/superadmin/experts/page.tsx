'use client';
import React, { useState } from 'react';
import GeneralHeader from '../components/general_header';
import { Button, Card, Label, Modal, TextInput } from 'flowbite-react';
import { PlusCircle, Save, SquarePen, Trash2, XCircle } from 'lucide-react';

const Experts = () => {
  const data = [
    { id: 1, name: 'Naeem', subject: 'Law' },
    { id: 2, name: 'Iqbal Safi', subject: 'Bio' },
    { id: 3, name: 'Ismail', subject: 'Programming' },
  ];
  const subjects = [
    { id: 1, subject: 'law' },
    { id: 2, subject: 'bio' },
    { id: 3, subject: 'mathematics' },
    { id: 4, subject: 'computer science' },
  ];
  const [openAddExpert, setOpenAddExpert] = useState(false);

  return (
    <>
      <Modal
        show={openAddExpert}
        size="md"
        popup
        onClose={() => setOpenAddExpert(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-medium font-medium text-gray-700 dark:text-white">
              Add Expert
            </h3>
            <TextInput id="name" placeholder="Expert name" required />
            <select className="w-full rounded-lg text-gray-500 text-sm border-gray-400">
              <option>Select Subjects</option>
              {subjects.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.subject}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between w-full mt-5">
            <div className="flex-wrap gap-2">
              <Button>
                <Save className="mr-2" />
                Save
              </Button>
            </div>

            <div className="flex-wrap gap-2">
              <Button>
                <XCircle className="mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <GeneralHeader myTitle="Experts Total : 10" />

      <div className="p-5 my-5 ">
        <div className="ml-5 flex flex-wrap gap-2">
          <Button
            onClick={() => {
              setOpenAddExpert(!openAddExpert);
            }}
          >
            <PlusCircle className="mr-2" />
            <p> Add Expert</p>
          </Button>
        </div>

        {data.map((item, index) => (
          <Card key={item.id} className="m-5 w-full lg:max-w-[600px]">
            <div className="flex justify-between">
              <p>{index + 1}</p>
              <p>{item.name}</p>
              <p className=" text-gray-500"> ({item.subject})</p>
              <div className="flex gap-5">
                <SquarePen className=" text-2xl text-yellow-400 cursor-pointer" />
                <Trash2 className=" text-2xl text-red-500 cursor-pointer" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Experts;
