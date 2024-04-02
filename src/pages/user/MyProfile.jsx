import React from 'react'
import Photo from '../../assets/images/user.png'
import { AiFillSafetyCertificate } from "react-icons/ai"
import { Button, PasswordInput, Select } from '@mantine/core'
import Front from '../../assets/images/blogs_card.png'

const MyProfile = () => {
    return (
        <div className='flex justify-center py-10'>
            <div className='flex flex-col md:flex-row w-full    lg:w-2/3 bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] md:p-10 p-3 gap-10  '>
                <h1 className='text-[#3B3B3B]  text-xl font-medium md:hidden'>My Profile</h1>
                <div className='flex flex-col items-center w-full gap-2 md:w-1/5'>
                    <img src={Photo} alt="/" className='w-32 h-32 border rounded-full' />
                    <div className='flex items-center gap-1 text-blue-600'>
                        <AiFillSafetyCertificate />
                        <span>Verified</span>
                    </div>
                    <Button variant='filled' color='#D5BD81'>Upload</Button>
                </div>
                <div className='flex flex-col w-full h-full gap-10 md:w-4/5'>
                    <h1 className='text-[#3B3B3B] text-center text-2xl font-medium hidden md:flex '>My Profile</h1>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-6 md:gap-10 md:flex-row'>
                            <div className='flex flex-col gap-2 px-3 md:w-1/2'>
                                <span className='text-[#3B3B3B]  '>First Name</span>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder=' Malindu' />
                            </div>
                            <div className='flex flex-col gap-2 px-3 md:w-1/2'>
                                <span className='text-[#3B3B3B]'>Last Name</span>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder='Ishan' />

                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3'>
                            <span className='text-[#3B3B3B]'>NIC</span>
                            <div className='flex gap-5'>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder='200320032003' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3'>
                            <span className='text-[#3B3B3B]'>Mobile Number</span>
                            <div className='flex gap-5'>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder='+94 71 23 45 678' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3'>
                            <span className='text-[#3B3B3B]'>Email Address</span>
                            <div className='flex gap-5'>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder='malindu@gmail.com' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3 border-b-2'>
                            <span className='text-[#3B3B3B]'>Password</span>
                            <div className='flex w-full gap-5'>

                                <PasswordInput variant='unstyled' value='123456' className='w-full' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3'>
                            <span className='text-[#3B3B3B]'>Birthday</span>
                            <div className='flex gap-5'>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder=' 11.02.2000' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3'>
                            <span className='text-[#3B3B3B]'>Religion</span>
                            <div className='flex gap-5'>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder='Buddhism' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3'>
                            <span className='text-[#3B3B3B]'>Mother Tongue</span>
                            <div className='flex gap-5'>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder='Sinhala' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3'>
                            <span className='text-[#3B3B3B]'>Gender</span>
                            <div className='flex gap-5'>
                                <input type='text' className='w-full bg-transparent border-b-2 outline-none' placeholder='Male' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 md:gap-10 md:flex-row'>
                            <div className='flex flex-col gap-2 px-3 border-b-2 md:w-1/2'>
                                <span className='text-[#3B3B3B]'>City</span>
                                <Select
                                    placeholder="Select"
                                    data={['Mathugama', 'Kalutara', 'Panadura', 'Moratuwa']}
                                    variant='unstyled'
                                />
                            </div>
                            <div className='flex flex-col gap-2 px-3 border-b-2 md:w-1/2'>
                                <span className='text-[#3B3B3B]'>District</span>
                                <Select
                                    placeholder="Select"
                                    data={['Kalutara', 'Colombo', 'Gampaha', 'Galle']}
                                    variant='unstyled'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 md:gap-10 md:flex-row'>
                            <div className='flex flex-col gap-2 px-3 border-b-2 md:w-1/2'>
                                <span className='text-[#3B3B3B]'>Province</span>
                                <Select
                                    placeholder="Select"
                                    data={['Western', 'Uva', 'Southern', 'Central']}
                                    variant='unstyled'
                                />
                            </div>
                            <div className='flex flex-col gap-2 px-3 border-b-2 md:w-1/2'>
                                <span className='text-[#3B3B3B]'>Country</span>
                                <Select
                                    placeholder="Select"
                                    data={['Sri Lanka', 'Dubai', 'Japan', 'Singapore']}
                                    variant='unstyled'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 md:gap-10 md:flex-row'>
                            <div className='flex flex-col gap-2 px-3 md:w-1/2'>
                                <span className='text-[#3B3B3B]  '>NIC Images</span>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-[#3B3B3B] text-sm'>Front Side</span>
                                    <img src={Front} alt='/'/>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 px-3 md:w-1/2'>
                            <span className='text-[#3B3B3B]  '>NIC Images</span>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-[#3B3B3B] text-sm'>Back Side</span>
                                    <img src={Front} alt='/'/>
                                </div>

                            </div>
                        </div>

                        <div className='flex justify-end w-full mt-10'>
                            <Button variant='filled' color='#D5BD81'>Save Details</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
