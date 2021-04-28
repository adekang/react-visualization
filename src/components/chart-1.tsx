import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '兰州新区', bars: 18},
    {name: '兰州新区', bars: 20},
    {name: '兰州新区', bars: 10},
    {name: '兰州新区', bars: 50},
    {name: '兰州新区', bars: 35},
    {name: '兰州新区', bars: 23},
    {name: '兰州新区', bars: 44},
    {name: '兰州新区', bars: 41},
    {name: '兰州新区', bars: 17},
  ];

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
        {name: '兰州新区', bars: Math.random() * 50},
      ];
      x(newData);
    }, 2000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      ...baseEchartOptions,
      xAxis: {
        data: data.map(t => t.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
      },
      series: [{
        type: 'bar',
        data: data.map(t => t.bars)
      }]
    }));
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);
  return (
    <div className="管辖统计 bordered">
      <h2>案发派出所管辖统计</h2>
      <div className="chart" ref={divRef}>
      </div>
    </div>
  );
};


