import React from 'react'
import Logo from '../../assets/images/ThuhinaLogo.png'
import Logo2 from '../../assets/images/Group 1000003323.png'
import { MdLocalPhone, MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaFacebook, FaLocationDot, FaSquareInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full flex flex-col gap-5 py-5 bg-[#F4F4F4]'>
            <div className='flex flex-col gap-5 px-3 md:px-10 lg:px-16 xl:px-20'>
                <div className='flex flex-col gap-10 md:gap-16 md:flex-row'>
                    <div className='flex flex-col w-full gap-5 md:w-2/5'>
                        <div className='flex gap-2'>
                            <img src={Logo} alt='/' className='w-20 ' />
                            <img src={Logo2} alt='/' className='w-20 ' />
                        </div>
                        <p className='text-[#ABABAB] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='flex flex-col w-full gap-10 md:w-3/5 lg:flex-row'>
                        <div className='flex w-full gap-5 lg:w-2/3 lg:gap-10'>
                            <div className='flex flex-col w-1/3 gap-5'>
                                <h1 className='text-[#6C6C6C] font-bold'>Links</h1>
                                <div className='flex flex-col text-[#ABABAB]'>
                                    <ul className='flex flex-col gap-2 text-sm'>
                                        <li className='hover:text-[#D5BD81] hover:cursor-pointer'>Home</li>
                                        <li className='hover:text-[#D5BD81] hover:cursor-pointer'>Packages</li>
                                        <li className='hover:text-[#D5BD81] hover:cursor-pointer'>About Us</li>
                                        <li className='hover:text-[#D5BD81] hover:cursor-pointer'>Contact Us</li>
                                        <li className='hover:text-[#D5BD81] hover:cursor-pointer'>Magazines</li>
                                        <li className='hover:text-[#D5BD81] hover:cursor-pointer'>Blogs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex flex-col w-2/3 gap-5'>
                                <h1 className='text-[#6C6C6C] font-bold'>Contact Us</h1>
                                <div className='flex flex-col text-[#ABABAB] text-sm gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <MdLocalPhone />
                                        <span>+94 70 123 4567</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <MdAlternateEmail />
                                        <span>thuhinamanagalasewa@gmail.com</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <TbWorldWww />
                                        <span>www.thuhina.com</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaLocationDot />
                                        <span>අංක 26, කුඹුක්වැව , කැකිරාව</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-5 lg:w-1/3'>
                            <h1 className='text-[#6C6C6C] font-bold'>Social Media</h1>
                            <div className='flex flex-col text-[#ABABAB] text-sm gap-2'>
                                <div className='flex items-center gap-2'>
                                    <FaFacebook />
                                    <span>thuhina_mangala</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaSquareInstagram />
                                    <span>thuhinamanagala_sewa</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaTiktok />
                                    <span>thuhinamanagala_sewa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end gap-2'>
                <Link to='/privacy'><span className='text-[#6C6C6C] font-bold'>Privacy Policy</span></Link>
                    <span>/</span>
                    <Link to='/terms&conditions'><span className='text-[#6C6C6C] font-bold'>Terms & Conditions</span></Link>
                </div>
            </div>
            <hr className='w-full' />
            <div className='flex justify-center px-3 md:px-10 lg:px-16 xl:px-20'>
                <span className='text-[#ABABAB] text-sm md:text-base text-center'>ALL COPYRIGHTS RESERVED BY THUHINA MANGALA SEWAYA - © 2024</span>
            </div>
        </div>
    )
}

export default Footer
