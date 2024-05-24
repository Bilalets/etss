'use client'
import React, { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

interface Record {
  Percentage: string;
  Correctawn: string;
  Wrongawn: string;
  subjectname: string;
  createdAt: string;
}

interface ID {
  id: string;
}

const Pie = () => {
  const { data: session } = useSession();
  const [getData, setData] = useState<ID | null>(null);
  const [getRecord, setRecord] = useState<Record[]>([]);
  
  const [percent, setPercent] = useState<number[]>([]);
  const [getNumber, setNumber] = useState<number[]>([]);
  const [passValues, setPassValues] = useState<number[]>([]);
  const [worstVal, setWorstValues] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/Getuserid", { email: session?.user?.email });
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (session?.user?.email) {
      fetchData();
    }
  }, [session]);

  const displayRecord = useCallback((): void => {
    const lowValues: number[] = [];
    const numValues: number[] = [];
    const passValues: number[] = [];
    const worstValues: number[] = [];

    getRecord?.forEach((item) => {  
      const pars = parseFloat(item.Percentage);
      if (pars < 33) {
        lowValues.push(pars);
      }
      if (pars > 70) {
        numValues.push(pars);
      }
      if (pars < 60 && pars > 40) {
        passValues.push(pars);
      }
      if (pars < 40 && pars > 33) {
        worstValues.push(pars);
      }
    });

    setPercent(lowValues);
    setNumber(numValues);
    setPassValues(passValues);
    setWorstValues(worstValues);
  }, [getRecord]);

  useEffect(() => {
    if (getRecord.length > 0) {
      displayRecord();
    }
  }, [getRecord, displayRecord]);

  useEffect(() => {
    const fetchResult = async () => {
      if (getData?.id) {
        try {
          const response = await axios.post("/api/Service/Subrecord", { userId: getData.id });
          setRecord(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchResult();
  }, [getData]);

  const rec = getRecord.length;
  const totalVal = percent.length;
  const bestAttempt = getNumber.length;
  const pastAttempt = passValues.length;
  const worstValues = worstVal.length;

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "top-middle",
      orient: 'vertical'
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "100%"],
        top: "50%",
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "right",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 10,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: rec, name: "No of Attempts" },
          { value: bestAttempt, name: "Top Best Attempts" },
          { value: pastAttempt, name: "Pass Attempts" },
          { value: worstValues, name: "Fail Attempts" },
          { value: totalVal, name: "Worst Attempts" },
        ],
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
};

export default Pie;
