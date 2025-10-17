"use client"

import React from 'react'
import { motion } from 'framer-motion'
import StateCard from '@/components/StateCard'
import { RotateCcw, UserCheck, UserIcon, UserPlus } from 'lucide-react'
import UsersTable from '@/components/UsersTable'

const UsersPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div 
                    initial={{opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
                >    
                    <StateCard name="Total Clients" icon={UserIcon} value="7670" />
                    <StateCard name="New Clients" icon={UserPlus} value="860" />
                    <StateCard name="Active Clients" icon={UserCheck} value="4080" />
                    <StateCard name="Returning Clients" icon={RotateCcw} value="2730" />
                </motion.div>

                <UsersTable/>
            </main>
        </div>
    )
}

export default UsersPage