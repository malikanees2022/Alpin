import React from 'react';
import ZingChart from 'zingchart-react';

const DashboardBox = () => {
  let colors = {
    gray: '#EBEBEB',
    grayDark: '#3F3F3F',
  };

  // Define custom data points
  let customValues = [
    { x: 1, y: 30 },
    { x: 2, y: 10 },
    { x: 3, y: 50 },
    { x: 4, y: 20 },
    { x: 5, y: 60 },
    { x: 6, y: 15 }, // adjusted to 70 instead of -70
    { x: 7, y: 80 },
  ];

  // Define custom x-axis tick values
  let customXTicks = [1, 2, 3, 4, 5, 6, 7];

  // Define custom y-axis tick values
  let customYAxisTicks = [0, 20, 40, 60, 80];

  // Calculate the number of y-axis ticks
  let numYAxisTicks = customYAxisTicks.length;

  // Calculate the height of the chart based on the number of y-axis ticks
  let chartHeight = numYAxisTicks * 15 + 20; // 20 units per tick + additional 56 for padding

  let chartConfig = {
    type: 'area',
    height: '290px',
        width: '100%',
    plot: {
      tooltip: {
        text: "%kl<br><span style='color:%color'>%t: </span>%v<br>",
        backgroundColor: 'white',
        bold: true,
        borderColor: '#e3e3e3',
        borderRadius: '5px',
        fontColor: '#718EBF',
        fontSize: '2px',
        padding: '5px',
        shadow: true,
        shadowAlpha: 0.2,
        shadowBlur: 5,
        shadowColor: '#718EBF',
        shadowDistance: 1,
        textAlign: 'left',
        visible: true,
      },
      animation: {
        delay: 400,
        effect: 'ANIMATION_EXPAND_TOP',
        method: 'ANIMATION_BOUNCE_EASE_OUT',
        sequence: 'ANIMATION_NO_SEQUENCE',
        speed: 500,
      },
      aspect: 'spline',
      'background-color': ['#3F9AE0', 'white'], 
    },
    scaleX: {
      guide: {
        alpha: 1,
        lineColor: colors.gray,
        lineStyle: 'dashed',
      },
      item: {
        color: '#718EBF',
      },
      lineColor: colors.gray,
      lineWidth: '1px',
      tick: {
        lineColor: '#004D99',
        lineWidth: '1px',
      },
      values: customXTicks, // Specify custom x-axis tick values
    },
    scaleY: {
      guide: {
        alpha: 1,
        lineColor: colors.gray,
        lineStyle: 'dashed',
      },
      item: {
        color: "#718EBF",
      },
      lineColor: colors.gray,
      lineWidth: '1px',
      step: 20, // Set the step to 20 units
      tick: {
        lineColor: '#004D99',
        lineWidth: '1px',
        values: customYAxisTicks, // Specify custom y-axis tick values
      },
      minValue: 0, // Adjust minimum value of y-axis
      maxValue: 80, // Adjust maximum value of y-axis
    },
    series: [
      {
        values: customValues.map(point => point.y), // Extract y values from custom data points
        lineColor: '#004D99',
        lineWidth: '3px',
        marker: {
          backgroundColor: '#004D99',
          visible: 'false', // Hide markers by default
        },
      },
      {
        values: [null, null, 50, null, null, null, null], // Show marker only on the fourth point
        marker: {
          backgroundColor: '#004D99',
          
          width:'20px',
          height:'20px',
          visible: true,
        },
      },
    ],
  };

  return (
    <div className='bg-white relative p-2 pl-4 cursor-pointer mt-2 rounded-2xl h-80 shadow-xl z-20'>
      <ZingChart data={chartConfig} />
      <h1 className='text-[#004D99]  font-bold absolute top-36 -left-1  -rotate-90'>Balance</h1>
      <h1 className='text-[#004D99] font-bold absolute bottom-6 left-[47%]'>Trades</h1>
    </div>
  );
};

export default DashboardBox;
