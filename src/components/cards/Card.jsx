import React from 'react'
import Bg_top from '../../assets/images/bg_image_top.png'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { MdHeartBroken } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import User from '../../assets/images/user.png'
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>
            <div className='relative w-full rounded-b-3xl bg-gradient-to-r from-[#f3d17d] to-[#f9f9f9]'>
                <img src={Bg_top} alt='/' className=' w-80 md:h-[350px] h-[320px]' />
                <div className='absolute top-0 left-0 z-50 flex flex-col w-full h-full gap-5 p-3 md:p-10'>
                    <div className='flex flex-col justify-between w-full gap-3 md:items-center md:flex-row'>
                        <div className='flex items-center gap-5'>
                            <span className='text-xl font-bold'>Amal Perera</span>
                            <div className='flex items-center gap-1 text-blue-600'>
                                <AiFillSafetyCertificate />
                                <span>Verified User</span>
                            </div>
                        </div>
                        <span className='text-[#6C6C6C]'>1 Day Ago</span>

                    </div>
                    <div className='grid w-full grid-cols-2 gap-3 text-sm md:text-lg md:gap-6 md:grid-cols-4'>
                        <div className='flex items-center gap-2'>
                            <FaLocationDot />
                            <span>Gampaha</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaBirthdayCake />
                            <span>23 Years Old</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdTempleHindu />
                            <span>Buddist</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdHeartBroken />
                            <span>Devorced</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <GiBodyHeight />
                            <span>6.0ft</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdEngineering />
                            <span>Software Engineer</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoIosPeople />
                            <span>Bodu Govi</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaUserGraduate />
                            <span>Undergraduate</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full gap-3'>
                        <div className='flex items-center gap-3'>
                            <img src={User} alt='/' className='rounded-full h-14 w-14 md:h-24 md:w-24' />
                            <div className='py-2 px-4 rounded-full shadow-md shadow-black bg-[#D5BD81] flex items-center font-bold text-sm text-[#53431a]'>
                                <span>Urgent</span>
                            </div>
                        </div>

                       <Link to='/single'><Button variant='filled' color='#D5BD81'>More Details</Button></Link> 

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
