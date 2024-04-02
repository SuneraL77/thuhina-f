import { Button, Select, Switch } from '@mantine/core'
import React from 'react'
import { IoAlertCircle } from 'react-icons/io5'
import Card from '../cards/Card'
import { Link } from 'react-router-dom'

const MyAdd = () => {
    return (
        <div className='flex flex-col w-full gap-10 py-10'>
            <div className='flex flex-col justify-between w-full gap-6 md:flex-row'>
                <div className='flex w-full gap-2'>
                    <span className='font-bold'>Advertisement ID :</span>
                    <span className=''>12345678</span>
                </div>
                <div className='flex justify-end w-full'>
                    <Select
                        defaultValue='Last 30 Days'
                        data={['Last 1 Days', 'Last 10 Days', 'Last 20 Days', 'Last 30 Days']}
                        className=''
                    />
                </div>
            </div>

            <div className='grid grid-cols-3 gap-3 text-center md:gap-6 md:grid-cols-6'>
                <div className='flex flex-col items-center justify-center p-5 bg-[#D9D9D9] rounded-md gap-3'>
                    <span className='text-[#747474]'>Appeared On Search</span>
                    <span>10</span>
                </div>
                <div className='flex flex-col items-center justify-center p-5 bg-[#D9D9D9] rounded-md gap-3'>
                    <span className='text-[#747474]'>Clicks</span>
                    <span>10</span>
                </div>
                <div className='flex flex-col items-center justify-center p-5 bg-[#D9D9D9] rounded-md gap-3'>
                    <span className='text-[#747474]'>Preference Mismatches</span>
                    <span>10</span>
                </div>
                <div className='flex flex-col items-center justify-center p-5 bg-[#D9D9D9] rounded-md gap-3'>
                    <span className='text-[#747474]'>Interests Received </span>
                    <span>10</span>
                </div>
                <div className='flex flex-col items-center justify-center p-5 bg-[#D9D9D9] rounded-md gap-3'>
                    <span className='text-[#747474]'>Interests Sent </span>
                    <span>10</span>
                </div>
                <div className='flex flex-col items-center justify-center p-5 bg-[#D9D9D9] rounded-md gap-3'>
                    <span className='text-[#747474]'>Matches</span>
                    <span>10</span>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <div className='flex p-3 bg-[#eefce8] gap-3'>
                    <IoAlertCircle size={25} />
                    <p className='text-justify text-[#747474]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex items-center justify-between gap-6'>
                    <div className='flex items-center gap-3'>
                         
                        <span className='font-medium'>Hide Add</span>
                        <Switch />
                    </div>
                    <div className='flex items-center gap-6'>
                        <Button variant='filled' radius={'xl'} color='#D5BD81'>Get Top Add</Button>
                        <Link to='/advertisement/edit'> <span className='font-medium underline'>Edit Add</span></Link>
                    </div>

                </div>
            </div>

            <div>
                <Card />
            </div>

        </div>
    )
}

export default MyAdd
