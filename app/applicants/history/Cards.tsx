'use client'
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Card, Table } from "flowbite-react";
import { SquarePen } from "lucide-react";
interface record{
  Percentage: string
  Correctawn: string
  Wrongawn: string
  subjectname: string
  createdAt:string
}

interface ID{
  id:string
}
const Cards = () => {
  const { data: session, status } = useSession();
  const [getData,setData]=useState<ID>()
  const [getrecord,setrecord]=useState<record[]>()
  const [percent,setpercent]=useState<string>()
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
const formatDate = (dateString:string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
};

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
console.log(getrecord)
  return (
    <>
      <div className=" flex flex-row w-[1200px] p-4 items-center ml-20 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between ">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            History
          </h5>
        </div>
      </div>
<div className="flex flex-col items-center">
      {getrecord?.map((item, index) => (
  <Card key={index} className="m-5 w-full lg:max-w-[900px]">
    <div className="flex justify-between">
      <p>{index + 1}</p>
    </div>
    <hr />
    <Table>
      <Table.Head>
        <Table.HeadCell>Percentage</Table.HeadCell>
        <Table.HeadCell>Subject Name</Table.HeadCell>
        <Table.HeadCell>Wrong Awnsers</Table.HeadCell>
        <Table.HeadCell>Correct Awnsers</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{item.Percentage}%</Table.Cell>
          <Table.Cell>{item.subjectname}</Table.Cell>
          <Table.Cell>{item.Wrongawn}</Table.Cell>
          <Table.Cell>{item.Correctawn}</Table.Cell>
          <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Card>
))}
</div>
    </>
  );
};

export default Cards;
