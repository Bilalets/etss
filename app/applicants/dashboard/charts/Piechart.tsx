"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
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

const Piechart = () => {
  const { data: session } = useSession();
  const [getData, setData] = useState<ID>();
  const [getrecord, setrecord] = useState<Record[]>();
  const [getcurrentRecord, setcurrentRecord] = useState<Record[]>();
  const [set, seed] = useState<number>(0);

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
    fetchData();
  }, [session]);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.post("/api/Service/Subrecord", {
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

  useEffect(() => {
    const getcurrent = async () => {
      try {
        const response = await axios.post("/api/Service/getaccuracy", {
          userId: getData?.id,
        });
        setcurrentRecord(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (getData?.id) {
      getcurrent();
    }
  }, [getData]);

  useEffect(() => {
    if (getcurrentRecord && getcurrentRecord.length > 0) {
      const percentage = parseFloat(getcurrentRecord[0].Percentage);
      seed(percentage);
    }
  }, [getcurrentRecord]);

  const options = {
    legend: {
      top: "5%",
      left: "center",
      height: "50%",
      color: "green",
    },
    toolbox: {
      feature: {},
    },
    series: [
      {
        name: "Performance",
        type: "pie",
        radius: ["80%", "60%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          formatter: "{d}%",
          fontSize: 20,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          {
            value: 100, // Use the number here
            itemStyle: { borderRadius: [6, 6, 0, 0] },
          },
          {
            value:100-set, // Use the number here
            itemStyle: { color: "rgba(180, 180, 180, 0.5)" },
            borderRadius: [6, 6, 0, 0],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={options} notMerge={true} lazyUpdate={true} />
    </div>
  );
};

export default Piechart;
