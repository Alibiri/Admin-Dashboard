"use client"

import React, { useEffect, useState } from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer } from 'recharts';

const SalesOverviewChart = () => {

    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        fetch("data/data.json")
        .then((res) => res.json)
        .then((data) => setSalesData(data.sales));
    },[])
    return (
        <div className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f]'>
            <h2 className='text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left'>
                Sales Overview
            </h2>

            <div className='h-64 md:h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4b5563"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SalesOverviewChart
