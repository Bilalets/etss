import React from 'react'
import ReactECharts from "echarts-for-react";
const Line = () => {
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
          "Dec"
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 300,200,10,50,150,100],
            type: "line",
          },
        ],
      };
  return (
    <div> <ReactECharts option={options} /></div>
  )
}

export default Line;