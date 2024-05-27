'use client';
import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Chart } from 'primereact/chart';
import FiscalYear from '../core/FiscalYear';
import { Dropdown } from 'primereact/dropdown';
function Expenses() {
  const [timeperiod, setTimeperiod] = useState('');
  const [chartData] = useState({
    labels: ['', '', 'C', 'D', 'E', 'F'],
    datasets: [
      {
        data: [300, 50, 100, 300, 50, 100,],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  });

  const lightOptions = {

    plugins: {
      legend: {
        align: 'center',
        position: 'left',
        labels: {
          color: '#495057'
        }
      }
    }
  };
  return (
    <div className="w-full bg-white mb-5 p-5 shadow-md">
      <div className='flex items-center justify-between px-2 pt-2'>
        <h5 className="text-lg font-semibold  ">Expenses</h5>
        <div className='flex items-center gap-x-5 justify-between'>
          <FiscalYear setTimeperiod={setTimeperiod} />
          <Button label="Manage Transactions" className="p-button-sm float-right text-xs" icon="pi pi-pencil" />
        </div>
      </div>
      <Divider />
      <div className="flex justify-content-center">
        <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: "relative", width: '50%' }} >
        </Chart>
      </div>
    </div>
  )
}

export default Expenses