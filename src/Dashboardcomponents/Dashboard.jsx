
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

import { Chart } from 'primereact/chart';


const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
       
        const nftData = {
            labels: ['Purchased', 'Sold', 'Remaining'],
            datasets: [
                {
                    data: [80, 50, 30], 
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };

        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                    },
                },
            },
        };

        setChartData(nftData);
        setChartOptions(options);
    }, []);

    const [chartDatas, setChartDatas] = useState({});
    const [chartOptionss, setChartOptionss] = useState({});
    useEffect(() => {
        // Placeholder data for illustration purposes
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'NFTs Sold',
                    borderColor: '#36A2EB',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    data: [10, 15, 20, 25, 30, 35, 40],
                },
            ],
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1.5,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of NFTs Sold',
                    },
                },
            },
        };

        setChartDatas(data);
        setChartOptionss(options);
    }, []);

    return (
      <div>
        <Sidebar />
        <h1 style={{ marginRight: '1350px', paddingBottom: '10px' }}>Dashboard</h1>
        <div  className="surface-0" style={{ marginLeft: '350px'}}>
    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span className="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div className="font-medium text-3xl text-900">Customers</div>
            <div className="flex align-items-center text-700 flex-wrap">
                <div className="mr-5 flex align-items-center mt-3">
                    <i className="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div className="mr-5 flex align-items-center mt-3">
                    <i className="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div className="flex align-items-center mt-3">
                    <i className="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        
    </div>
</div>
  
  
  
<div className="grid" style={{marginLeft:"200px"}}>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Orders</span>
                    <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">24 new </span>
            <span className="text-500">since last visit</span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Revenue</span>
                    <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">%52+ </span>
            <span className="text-500">since last week</span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Customers</span>
                    <div className="text-900 font-medium text-xl">28441</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">520  </span>
            <span className="text-500">newly registered</span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Comments</span>
                    <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">85 </span>
            <span className="text-500">responded</span>
        </div>
    </div>
</div>
    
<div className="card flex justify-content-center" style={{marginLeft:"200px"}}>
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
        <div className="card" style={{marginLeft:"200px"}}>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>





      </div>
    );
  }

export default Dashboard