import React, { useEffect, useState, useCallback } from "react";
import ReactECharts from "echarts-for-react";
import { useSession } from "next-auth/react";
import axios from "axios";

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

const Line = () => {
  const { data: session } = useSession();
  const [getData, setData] = useState<ID | null>(null);
  const [getrecord, setrecord] = useState<Record[]>([]);
  const [getcurrentRecord, setcurrentRecord] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/Getuserid", {
          email: session?.user?.email,
        });
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

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.post("/api/Service/Getyearlyrecord", {
          userId: getData?.id,
        });
        setrecord(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (getData?.id) {
      fetchResult();
    }
  }, [getData]);

  const displaydataonline = useCallback((): void => {
    const lowValues: number[] = [];
    getrecord?.forEach((item) => {
      const pars = parseFloat(item.Percentage);
      lowValues.push(pars);
    });
    setcurrentRecord(lowValues);
  }, [getrecord]);

  useEffect(() => {
    displaydataonline();
  }, [getrecord, displaydataonline]);

  const totalPercentage =
    getrecord?.reduce((total, item) => {
      return total + parseInt(item.Percentage);
    }, 0) ?? 0;

  const averagePercentage = totalPercentage / (getrecord?.length || 1);

  const formattedAveragePercentage = averagePercentage.toFixed(2);

  const options = {
    xAxis: {
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          0, 0, 0, 0, formattedAveragePercentage, 0, 0, 0, 0, 0, 0, 0,
        ],
        type: "line",
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
};

export default Line;
