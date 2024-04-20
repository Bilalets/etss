import React from 'react'
import ReactECharts from "echarts-for-react";
const Pie = () => {
    const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "top-middle",
          orient:'vertical'
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
              { value: 1048, name: "No of Attempts" },
              { value: 735, name: "Top Best Attemps" },
              { value: 580, name: "Pass Attempts" },
              { value: 484, name: "Fail Attempts" },
              { value: 300, name: "Worst Attempts" },
            ],
          },
        ],
      };
  return (
    <div><ReactECharts option={option} /></div>
  )
}

export default Pie;