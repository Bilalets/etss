'use client';
import { Button, Card, Modal, Table, TextInput } from 'flowbite-react';
import { Edit, Save, SquarePen, Trash2, XCircle } from 'lucide-react';
import React, { useState } from 'react';

const CreateCat = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const data = [
    {
      id: 1,
      name: 'Self Assessment Test',
      subject: 'Inspector',
      username: 'FIA',
      subcategory: 'Assisstant Director',
    },
    {
      id: 2,
      name: 'Self Assessment Test',
      subject: 'Bio',
      username: 'FIA',
      subcategory: 'Inspector',
    },
    {
      id: 3,
      name: 'Self Assessment Test',
      subject: 'Programming',
      username: 'FIA',
      subcategory: 'LDC',
    },
  ];

  return (
    <>
      <Modal
        show={openAdd}
        size="md"
        popup
        onClose={() => setOpenAdd(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-medium font-medium text-gray-700 dark:text-white">
              Edit Subcategory
            </h3>
            <TextInput id="name" placeholder="Subcategory Name" required />
          </div>
          <div className="flex justify-between w-full mt-5">
            <div className="flex-wrap mt-10 gap-2">
              <Button onClick={() => setOpenAdd(false)}>
                <Save className="mr-2" />
                Save
              </Button>
            </div>
            <div className="flex-wrap mt-10 gap-2">
              <Button onClick={() => setOpenAdd(false)}>
                <XCircle className="mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className='flex flex-row gap-10'>
        <div className='ml-20'>
          <select className="bg-white rounded-lg w-[440px] h-[45px] text-gray-800 border-0 p-2 mb-6 focus:bg-gray-200 focus:outline-none focus:ring-1 transition ease-in-out duration-150 shadow-xl" id="product">
            <option value="" disabled selected hidden>Select a Category</option>
            <option value="product-1">FIA</option>
            <option value="product-2">CSS</option>
            <option value="product-3">PMS</option>
            <option value="product-4">ISSB</option>
          </select>
        </div>
        <div className='flex flex-row gap-5 justify-center'>
          <div className="relative rounded-lg overflow-hidden bg-white shadow-xl w-[440px] h-[45px]">
            <input
              type="text"
              name="text"
              placeholder="Create SubCategory"
              className="input bg-transparent outline-none border-none w-[440px] h-[45px] font-sans text-lg font-semibold"
            />
          </div>
        </div>
        <div className='mt-[-40px]'>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Create Subcategory
          </button>
        </div>
      </div>

      <div className='ml-52'>
        {data.map((item, index) => (
          <Card key={item.id} className="m-5 w-full lg:max-w-[800px] h-[150px]">
            <Table>
              <Table.Head>
                <Table.HeadCell>S No</Table.HeadCell>
                <Table.HeadCell>Service</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Subcategory</Table.HeadCell>
                <Table.HeadCell>
                  <div className="flex gap-5">
                    <SquarePen className="text-2xl text-yellow-400 cursor-pointer" />
                    <Trash2 className="text-2xl text-red-500 cursor-pointer" />
                  </div>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.username}</Table.Cell>
                  <Table.Cell>{item.subcategory}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CreateCat;
