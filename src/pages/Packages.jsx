import { Select } from '@mantine/core'
import React from 'react'
import Bg_top from '../assets/images/bg_image_top.png'
import Bg_bottom from '../assets/images/bg_image_bottom.png'
import { Badge } from 'antd';
import NormalPackageCard from '../components/cards/NormalPackageCard'
import PopularPackageCard from '../components/cards/PopularPackageCard'

const Packages = () => {
    return (
        <>
            <div className='flex flex-col gap-10 px-3 py-10 md:px-10 lg:px-16 xl:px-24'>

                <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
                    <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>Packages</h1>
                </div>

                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <span>What's your country?</span>
                        <div>
                            <Select
                                placeholder="Select"
                                data={['Sri Lanka', 'India', 'Japan', 'China']}
                                className='w-52'
                            />
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <div className='rounded-lg shadow-lg  flex bg-[#F9F9F9] md:relative justify-between lg:w-4/5 w-full'>
                            <img src={Bg_top} alt='/' className='hidden md:flex' />
                            <img src={Bg_bottom} alt='/' className='hidden md:flex' />
                            <div className='top-0 left-0 grid justify-center w-full h-full grid-cols-1 gap-10 p-10 md:absolute md:grid-cols-3'>
                                <NormalPackageCard />
                                <Badge.Ribbon text="20% Offer" color="red">
                                    <PopularPackageCard />
                                </Badge.Ribbon>
                                <NormalPackageCard />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Packages
