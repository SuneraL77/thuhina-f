 
import React from 'react'
import MyPhoto from '../..//assets/images/user.png'
// import { Link } from 'react-router-dom'

const DeclineAdCard = () => {
    return (
        <div className='flex w-full bg-[#d9b967] p-3 rounded-md flex-col lg:flex-row gap-3 lg:gap-0'>
            <div className='flex w-full lg:w-2/5'>
                <div className='flex items-center justify-center w-1/3'>
                    <img src={MyPhoto} alt="" className='w-20 h-20 rounded-full md:h-24 md:w-24' />
                </div>
                <div className='flex flex-col justify-center w-2/3'>
                    <h1 className='font-bold'>Malindu Ishan</h1>
                    <span className='text-sm'>24 Years Old</span>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm'>User ID :</span>
                        <span className='text-sm font-medium'>12345</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm'>Ad ID :</span>
                        <span className='text-sm font-medium'>12345</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end w-full gap-3 lg:w-3/5'>
                <div className='flex items-center gap-2'>
                    <span className='font-bold text-red-500'>Declined</span>
                    {/* <Switch/> */}
                </div>
                 
            </div>

        </div>
    )
}

export default DeclineAdCard
