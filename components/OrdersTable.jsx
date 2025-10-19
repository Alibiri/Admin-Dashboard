"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ordersData from "../public/data/data.json"
import { Search } from 'lucide-react'

const OrdersTable = () => {

    const [searchTerm, setSearchTerm] = useState("");
    return (
        <motion.div
            className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 sm:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
                <h2 className="text-lg md:text-xl font-semibold text-gray-100 text-center md:text-left">
                Order List
                </h2>
                <div className="relative w-full sm:w-auto">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Orders..."
                className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2
                w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>{[
                            "Order ID",
                            "Client",
                            "Total",
                            "Status",
                            "Date",
                            "Country",
                            "Actions",
                        ].map((header) => (
                            <th 
                                key={header}
                                className='px-3 md:px-6 py-2 md:py3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden:table-cell'>
                                    {header}
                            </th>
                        ))}</tr>
                    </thead>

                    <tbody className='divide-y divide-gray-700'>
                        {ordersData.orders.map((order) => (
                            <motion.tr 
                                key={order.id} 
                                initial={{opacity:0, y: 10}}
                                animate={{opacity:1, y:0}}
                                transition={{ delay: 0.1, duration: 0.3}}
                                className='flex flex-col md:table-row mb-4 md:mb-0 border-b md:border-b-0 border-gray-700 md:border-none p-2 md:p-0'
                                >
                                    {}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}

export default OrdersTable