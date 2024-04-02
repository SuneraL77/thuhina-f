import React from 'react'
import { Button, Tabs } from '@mantine/core';
import Bg_top from '../../assets/images/bg_image_top.png'
import Bg_bottom from '../../assets/images/bg_image_bottom.png'

const MyPackages = () => {



    return (
        <div className='flex flex-col gap-10 px-3 py-10 md:px-10 lg:px-16 xl:px-24'>
            <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
                <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>My Packages</h1>
            </div>

            <div>
                <Tabs variant="outline" defaultValue="Active">
                    <Tabs.List>
                        <Tabs.Tab value="Active">
                            Active
                        </Tabs.Tab>
                        <Tabs.Tab value="All">
                            All
                        </Tabs.Tab>

                    </Tabs.List>

                    <Tabs.Panel value="Active">
                        <div className='p-3'>
                        <div className='flex justify-center w-full'>
                                <div className='rounded-lg shadow-lg  flex bg-[#F9F9F9] md:relative justify-between lg:w-4/5 w-full'>
                                    <img src={Bg_top} alt='/' className='hidden md:flex' />
                                    <img src={Bg_bottom} alt='/' className='hidden md:flex' />
                                    <div className='top-0 left-0 flex justify-center w-full h-full gap-10 p-10 md:absolute '>
                                       
                                        <div className='flex flex-col justify-between w-72 gap-3 p-5 text-center duration-300 bg-[#D5BD81] shadow-xl rounded-xl hover:scale-105'>
                                            <span className='text-lg'>2 Month</span>
                                            <div className='flex flex-col gap-1'>
                                                <h1 className='text-2xl font-medium'>Rs. 1150</h1>
                                                <span className='text-xs'>Per Month</span>
                                            </div>
                                            <span className='text-lg'>Rs. 1150 .00</span>
                                            <div className='w-full'>
                                                <span className='font-medium'>26 Days More</span>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Tabs.Panel>

                    <Tabs.Panel value="All">
                        <div>
                            <div className='flex justify-center w-full'>
                                <div className='rounded-lg shadow-lg  flex bg-[#F9F9F9] md:relative justify-between lg:w-4/5 w-full'>
                                    <img src={Bg_top} alt='/' className='hidden md:flex' />
                                    <img src={Bg_bottom} alt='/' className='hidden md:flex' />
                                    <div className='top-0 left-0 grid justify-center w-full h-full grid-cols-1 gap-10 p-10 md:absolute md:grid-cols-3'>
                                        <div className='flex flex-col justify-between w-full gap-3 p-5 text-center duration-300 bg-white shadow-xl rounded-xl hover:scale-105'>
                                            <span className='text-lg'>1 Month</span>
                                            <div className='flex flex-col gap-1'>
                                                <h1 className='text-2xl font-medium'>Rs. 1350</h1>
                                                <span className='text-xs'>Per Month</span>
                                            </div>
                                            <span className='text-lg'>Rs. 1350 .00</span>
                                            <div className='w-full'>
                                                <Button variant='outline' color='#D5BD81'>Buy</Button>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-between w-full gap-3 p-5 text-center duration-300 bg-[#D5BD81] shadow-xl rounded-xl hover:scale-105'>
                                            <span className='text-lg'>2 Month</span>
                                            <div className='flex flex-col gap-1'>
                                                <h1 className='text-2xl font-medium'>Rs. 1150</h1>
                                                <span className='text-xs'>Per Month</span>
                                            </div>
                                            <span className='text-lg'>Rs. 1150 .00</span>
                                            <div className='w-full'>
                                                <Button variant='outline' color='black'>Buy</Button>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-between w-full gap-3 p-5 text-center duration-300 bg-white shadow-xl rounded-xl hover:scale-105'>
                                            <span className='text-lg'>3 Month</span>
                                            <div className='flex flex-col gap-1'>
                                                <h1 className='text-2xl font-medium'>Rs. 1000</h1>
                                                <span className='text-xs'>Per Month</span>
                                            </div>
                                            <span className='text-lg'>Rs. 1000 .00</span>
                                            <div className='w-full'>
                                                <Button variant='outline' color='#D5BD81'>Buy</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs.Panel>


                </Tabs>
            </div>
        </div>
    )
}

export default MyPackages
