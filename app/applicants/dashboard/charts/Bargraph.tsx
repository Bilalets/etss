"use client";
import React, { useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react';
import { useSession } from "next-auth/react";
import axios from "axios";
interface record{
  Percentage: string
  Correctawn: string
  Wrongawn: string
  subjectname: string
}

interface ID{
  id:string
}


const Bargraph = () => {
  const { data: session, status } = useSession();
  const [getData,setData]=useState<ID>()
  const [getrecord,setrecord]=useState<record[]>()
  const [getmathsrec,setmathsrec]=useState<record[]>()
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
      const response = await axios.post("/api/Service/Getenglishrecord",{userId:getData?.id,subjectname:'English'});
      setrecord(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchresult()
},[getData])

useEffect(()=>{
  const fetchresult=async()=>{
    try {
      const response = await axios.post("/api/Service/Getenglishrecord",{userId:getData?.id,subjectname:'English'});
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

const averagePercentage = getrecord?.length ? totalPercentage / getrecord.length : 0;

    const options = {
        tooltip: {
          // Configure tooltip
          trigger: 'axis', // Show tooltip on hover over bars
          formatter: '{b}: {c}%', // Display series name (label) and data value in the tooltip
          axisPointer: {
            type: 'shadow', // Show tooltip shadow
          },
        },
        toolbox: {
          
        },
        xAxis: {
          type: 'category',
          data: [
            'English',
            'Urdu',
            'Maths',
            'General Knowledge',
            'Pak Study',
            'Computer Science',
            'Biology',
            'Chemistry',
          ],
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
        },
        series: [
          {
            data: [averagePercentage, 0, 50, 0, 65, 0, 0, 0],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
            barWidth: 25,
            itemStyle: {
              color: 'rgba(0, 0, 0, 1)', // each bar color Dark gray
              barBorderRadius: [5, 5, 0, 0], // Top-left and top-right corners rounded
              label: {
                show: true,
                position: 'top',
                formatter: '{c}%',
              },
            },
          },
        ],
      };



  return (
    <div>

<ReactECharts option={options}  />

    </div>
  )
}

export default Bargraph;