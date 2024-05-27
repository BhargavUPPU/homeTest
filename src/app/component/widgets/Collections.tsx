'use client';
import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import 'chart.js/auto';
import { useRouter } from 'next/navigation';

function Collections() {
    const currentYear = new Date().getFullYear();
    const [timeperiod, setTimeperiod] = useState();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const router = useRouter();
    const timeperiods = [
        { name: 'Fiscal Year', code: 'FY' },
        { name: 'Calendar Year', code: 'CY' },
    ];
    const basicData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Invoiced',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
            },
            {
                label: 'Collected',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90, 40, 19, 86, 27, 90]
            }
        ]
    };
    const years =  Array.from(Array(10), (_, i) => ({
        value: currentYear - i,
        label: currentYear - i,
      }));;
    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .9,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <div className="w-full bg-white  mb-5 p-5 shadow-md">
            <div className='flex items-center justify-between px-2 pt-2'>
                <h5 className="text-lg font-semibold  ">Invoiced vs Paid</h5>
                <div className='flex items-center gap-x-5 justify-between'>
                    <Dropdown className='text-xs  p-inputtext-sm' optionLabel="name" value={timeperiod} options={timeperiods} onChange={(e) => setTimeperiod(e.value)} placeholder="Fiscal Year" />
                    <Dropdown className='text-xs  p-inputtext-sm' optionLabel="label" value={selectedYear} options={years} onChange={(e) => setSelectedYear(e.value)} />
                    <Button label="Create Invoice" className="btn" icon="pi pi-plus" onClick={() => { router.push('/invoices/new') }} />
                </div>
            </div>
            <Divider />
            <div>
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default Collections
