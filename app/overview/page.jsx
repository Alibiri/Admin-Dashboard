"use client"

import StateCard from '@/components/StateCard'
import { DollarSign, ShoppingBag, SquareActivity, Users } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import SalesOverviewChart from '@/components/SalesOverviewChart'
import CategoryDistributionChart from '@/components/CategoryDistributionChart'
import OrderDistributionChart from '@/components/OrderDistributionChart'
import ProductPerformanceChart from '@/components/ProductPerformanceChart'

const OverviewPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <main className='max-w-7xl mx-auto py-4 px-4 lg:px-8'>
                <motion.div 
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StateCard name="Total Sales" icon={DollarSign} value="$200,540"/>
                    <StateCard name="Total Clients" icon={Users} value="2,698"/>
                    <StateCard name="Total Products" icon={ShoppingBag} value="964"/>
                    <StateCard name="Stock" icon={SquareActivity} value="20,798"/>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <SalesOverviewChart/>
                    <CategoryDistributionChart/>
                    <OrderDistributionChart/>
                    <ProductPerformanceChart/>
                </div>
            </main>
        </div>
    )
}

export default OverviewPage
