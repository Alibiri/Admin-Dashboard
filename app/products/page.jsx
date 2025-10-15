"use client"

import React from 'react'
import { motion } from 'framer-motion'
import StateCard from '@/components/StateCard'
import { ChartBarStacked, DollarSign, ShoppingBag, SquareActivity } from 'lucide-react'
import ProductsTable from '@/components/ProductsTable'

const ProductsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div 
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
                    initial={{ opacity:0, y:20 }}
                    animate={{ opacity: 1, y:0 }}
                    transition={{duration: 1}}
                >
                    <StateCard name="Total Products" icon={ShoppingBag} value={"7,612"} />
                    <StateCard name="Total Stocl" icon={SquareActivity} value={"20,738"}/>
                    <StateCard name="Total Sold" icon={DollarSign} value={"17,352"}/>
                    <StateCard name="Total Categories" icon={ChartBarStacked} value={"8"}/>
                </motion.div>

                <ProductsTable/>
            </main>
        </div>
    )
}

export default ProductsPage
