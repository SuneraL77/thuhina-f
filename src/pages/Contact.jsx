import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import { Radio, Group, Button } from '@mantine/core';

const Contact = () => {
    return (
        <div className='flex flex-col w-full px-3 pb-10 md:px-10 lg:px-16 xl:px-20'>
            <div className='flex flex-col w-full gap-3 py-10 text-center'>
                <h1 className='text-3xl font-bold'>Contact Us</h1>
                <span>Any question or remarks? Just write us a message!</span>
            </div>

            <div className='flex flex-col w-full gap-10 md:flex-row md:gap-0'>

                <div className='w-full rounded-md md:w-2/5 bg-[#D5BD81] flex flex-col p-5  md:p-10 justify-between gap-10'>
                    <div className='flex flex-col w-full gap-3'>
                        <h1 className='text-2xl font-bold text-white'>Contact Information</h1>
                        <span className='text-[#e6e6e6]'>Any question or remarks? Just write us a message!</span>
                    </div>

                    <div className='flex flex-col w-full gap-5 text-white'>
                        <div className='flex items-center w-full gap-2'>
                            <FaPhoneVolume />
                            <span>071 23 45 678</span>
                        </div>
                        <div className='flex items-center w-full gap-2'>
                            <MdAttachEmail />
                            <span>thuhina@gmail.com</span>
                        </div>
                        <div className='flex items-center w-full gap-2'>
                            <IoLocationSharp />
                            <span>Colombo, Sri Lanka</span>
                        </div>
                    </div>

                    <div className='flex gap-5 text-white'>
                        <FaTwitter size={25} />
                        <RiInstagramFill size={25} />
                        <BsDiscord size={25} />
                    </div>
                </div>

                <div className='flex flex-col w-full gap-10 p-5 md:p-10 md:w-3/5'>
                    <div className='grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-2'>
                        <div className='flex flex-col gap-2'>
                            <span>First Name</span>
                            <input type='text' className='border-b-2 outline-none' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span>Last Name</span>
                            <input type='text' className='border-b-2 outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>Email</span>
                        <input type='text' className='border-b-2 outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>Mobile</span>
                        <input type='text' className='border-b-2 outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>Select Subject?</span>
                        <Radio.Group
                            withAsterisk
                            className='flex'
                        >
                            <Group mt="xs">
                                <Radio value="General Inquiry" label="General Inquiry" />
                                <Radio value="General Inquiry" label="General Inquiry" />
                                <Radio value="General Inquiry" label="General Inquiry" />
                                <Radio value="General Inquiry" label="General Inquiry" />
                            </Group>
                        </Radio.Group>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>Message</span>
                        <textarea type='text' className='border-b-2 outline-none' />
                    </div>
                    <div className='flex justify-end'>
                        <Button variant='filled' color='#D5BD81'>Send Message</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
