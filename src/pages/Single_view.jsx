import React from 'react'
import User from '../assets/images/user.png'
import { Button } from '@mantine/core'
import { IoHeartOutline } from "react-icons/io5";

const Single_view = () => {
    return (
        <>
            <div className='flex flex-col gap-10 px-3 py-10 md:px-10 lg:px-16 xl:px-24'>
                <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
                    <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>Single View</h1>
                </div>

                <div className='flex flex-col justify-center w-full gap-10'>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Basic</h1>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Display Name</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Supun H.</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Birthday</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>2 / 20 / 2002</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Gender</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Male</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Height</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>6.0ft</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Ethnicity</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Sinhala</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Religion</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Buddhist</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Caste</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>none</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Civil Status</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Divorced</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Residency</h1>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Country Of Residence</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Sri Lanka</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>City</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Baduraliya</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>State / District</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Kaluthara</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Education & Profession</h1>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Education Level</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Undergraduate</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Profession</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Habits</h1>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Drinking</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>No</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Food Preference</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Vegetarian</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Smoking</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>No</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Description</h1>
                        <div className='w-full gap-5 md:gap-10'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Are you creating this ad for a differently abled person ?</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/4'>
                                    <span className='text-[#747474]'>No</span>
                                </div>
                            </div>

                        </div>

                        <div className='w-full gap-5 md:gap-10'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Description</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5]'>
                                    <span className='text-[#747474]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Images</h1>
                        <div className='grid w-full grid-cols-2 gap-5 md:gap-10 md:grid-cols-4'>
                            <img src={User} alt='/' className='rounded-md ' />
                            <img src={User} alt='/' className='rounded-md ' />
                            <img src={User} alt='/' className='rounded-md ' />
                            <img src={User} alt='/' className='rounded-md ' />
                        </div>
                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Father's Details</h1>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Ethnicity</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Sinhala</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Religion</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Buddhist</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Profession</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Engineer</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Country Of Residence</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Caste</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>none</span>
                                </div>
                            </div>

                        </div>
                        <div className='w-full gap-5 md:gap-10'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Additional Information</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5]'>
                                    <span className='text-[#747474]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Mother's Details</h1>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Ethnicity</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Sinhala</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Religion</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Buddhist</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Profession</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Engineer</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Country Of Residence</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Caste</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>none</span>
                                </div>
                            </div>

                        </div>
                        <div className='w-full gap-5 md:gap-10'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Additional Information</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5]'>
                                    <span className='text-[#747474]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Horoscope Details</h1>
                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Birthday</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>2 / 20 / 2002</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Birth Country</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Birth City</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>Gampaha</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Birth Time</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>18h 20mm 05sec</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Horoscope Matching Required ?</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>No</span>
                                </div>
                            </div>

                        </div>
                        <div className='w-full gap-5 md:gap-10'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Additional Information</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5]'>
                                    <span className='text-[#747474]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                        <h1 className='text-[#3B3B3B]  text-xl font-bold text-center pb-10'>Contact details</h1>
                        <div className='w-full gap-5 md:gap-10'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Phone Number</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>071 12 34 567</span>
                                </div>
                            </div>

                        </div>

                        <div className='w-full gap-5 md:gap-10'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-[#444444]'>Email Address</span>
                                <div className='px-2 py-1 rounded-md bg-[#E5E5E5] md:w-1/2'>
                                    <span className='text-[#747474]'>malindu@gmail.com</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-2'>
                            <IoHeartOutline size={30} className='text-rose-500' />
                            <span>Like</span>
                        </div>


                        <div className='flex items-center gap-2'>
                            <Button variant='outline' color='D5BD81'>Contact</Button>
                            <Button variant='filled' color='D5BD81'>Message</Button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Single_view
