import { Button } from '@mantine/core'
import React from 'react'
import { MdOutlineDone } from 'react-icons/md'

const PopularPackageCard = () => {
    return (
        <div className='flex flex-col justify-between w-full h-fit gap-3 p-5 text-center duration-300 bg-[#D5BD81] shadow-xl rounded-xl hover:scale-105'>
            <span className='text-lg'>2 Month</span>
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-medium'>Rs. 1150</h1>
                <span className='text-xs'>Per Month</span>
            </div>
            <div className='flex flex-col px-6 text-start'>
                <div className='flex items-center gap-2'>
                    <MdOutlineDone className='text-green-500' />
                    <span>Unlimited profile view</span>
                </div>
                <div className='flex items-center gap-2'>
                    <MdOutlineDone className='text-green-500' />
                    <span>Unlimited send proposals</span>
                </div>
                <div className='flex items-center gap-2'>
                    <MdOutlineDone className='text-green-500' />
                    <span>Unlimited chats</span>
                </div>


            </div>
            <div className='w-full'>
                <Button variant='outline' color='black'>Buy</Button>
            </div>
        </div>
    )
}

export default PopularPackageCard
