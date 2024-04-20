import React from 'react'
import ReactECharts from "echarts-for-react";
const Gauge = () => {

    const optionss = {
        series: [
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 10,
            max: 1000,
            splitNumber: 5,
            itemStyle: {
              color: "#FFAB91",
            },
            progress: {
              show: true,
              width: 30,
            },
    
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 30,
              },
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 1,
                color: "#999",
              },
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 1,
                color: "#999",
              },
            },
           
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              width: "40%",
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, "-15%"],
              fontSize: 25,
              fontWeight: "bolder",
              formatter: "{value} Hours",
              color: "inherit",
            },
            data: [
              {
                value: 20,
              },
            ],
          },
    
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
              color: "#FD7347",
            },
            progress: {
              show: true,
              width: 8,
            },
    
            pointer: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 20,
              },
            ],
          },
        ],
      };
    
      setInterval(function () {
        const random = +(Math.random() * 60).toFixed(2);
      }, 2000);


  return (
    <div>
        <ReactECharts option={optionss} />
    </div>
  )
}

export default Gauge;