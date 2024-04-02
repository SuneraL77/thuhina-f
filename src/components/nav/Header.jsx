import React from 'react'
import Logo from '../../assets/images/thuhina logo6.png'
import Center_img from '../../assets/images/header_center_img.png'
import { Button, Drawer } from '@mantine/core'
import { IoMenu } from "react-icons/io5";
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from "react-icons/bi";
import { Select } from 'antd';

const Header = () => {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className='flex flex-col w-full pt-3'>
            <div className='flex w-full px-3 pb-1 border-b-2 md:px-10 lg:px-16 xl:px-20'>
                <div className='flex justify-start w-1/2 md:w-1/3'>
                    <img src={Logo} alt='/' className='h-20' />
                </div>
                <div className='items-end justify-center hidden w-1/3 md:flex'>
                    <img src={Center_img} alt='/' className='h-10' />
                </div>
                <div className='items-center justify-end hidden w-1/3 gap-3 lg:flex'>
                    <Link to='/message'><BiMessageSquareDetail size={25} /></Link>
                    <Link to='/register'><span className='text-[#D5BD81] hover:text-black hover:cursor-pointer'>Register</span></Link>
                    <Link to='/login'><Button variant='outline' color='#D5BD81' radius="xs">Login</Button></Link>
                </div>
                <div className='flex items-center justify-end w-1/2 gap-3 lg:hidden md:w-1/3'>
                <div className='flex items-center justify-end w-1/3 gap-3'>
                     
                    <Link to='/register'><span className='text-[#D5BD81] hover:text-black hover:cursor-pointer'>Register</span></Link>
                    <Link to='/login'><Button variant='outline' color='#D5BD81' radius="xs">Login</Button></Link>
                </div>
                    <IoMenu size={30} onClick={open} />
                </div>
            </div>

            <div className='justify-between hidden w-full px-3 py-2 border-b-2 lg:flex md:px-10 lg:px-16 xl:px-20'>
                <div className='flex items-center justify-start gap-2 text-sm '>
                    <span className='hover:text-[#D5BD81] hover:cursor-pointer'>English</span>
                    <span>/</span>
                    <span className='hover:text-[#D5BD81] hover:cursor-pointer'>සිංහල</span>
                    <span>/</span>
                    <span className='hover:text-[#D5BD81] hover:cursor-pointer'>தமிழ்</span>
                </div>
                <div className='flex items-center justify-center '>
                    <ul className='flex gap-10'>
                        <Link to='/'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Home</li></Link>
                        <Link to='/packages'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Packages</li></Link>
                        <Link to='/about'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>About Us</li></Link>
                        <Link to='/contact'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Contact Us</li></Link>
                        <Link to='/magazine'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Magazines</li></Link>
                        <Link to='/blogs'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Blogs</li></Link>
                    </ul>
                </div>
                <div className='flex items-center justify-end gap-3'>

                    <Select
                        style={{ width: 150 }}
                        options={[
                            { value: 'profile', label: <Link to='/profile'>My Profile</Link> },
                            { value: 'advertisement', label: <Link to='/advertisement'>My Advertisement</Link> },
                            { value: 'packages', label: <Link to='/mypackages'>My Packages</Link> },
                            { value: 'logout', label: <Link to='/'>Log Out</Link> },
                        ]}
                        defaultValue='My Account'
                    />
                </div>
            </div>

            <Drawer
                opened={opened}
                onClose={close}
                title={<img src={Logo} alt='/' className='h-14' />}
                size="80%">
                <div className='flex flex-col justify-center gap-6 '>
                 
                    <div className='flex items-center justify-between w-full gap-3'>
                    <Link to='/message'><BiMessageSquareDetail size={25} /></Link>
                        <Select
                            style={{ width: 150 }}
                            options={[
                                { value: 'profile', label: <Link to='/profile'>My Profile</Link> },
                                { value: 'advertisement', label: <Link to='/advertisement'>My Advertisement</Link> },
                                { value: 'packages', label: <Link to='/mypackages'>My Packages</Link> },
                                { value: 'logout', label: <Link to='/'>Log Out</Link> },
                            ]}
                            defaultValue='My Account'
                        />
                    </div>
                    <hr className='border-b-2 ' />
                    <div className='flex flex-col items-center justify-center gap-3 '>


                        <ul className='flex flex-col items-center gap-5 text-lg'>
                            <Link to='/'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Home</li></Link>
                            <Link to='/packages'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Packages</li></Link>
                            <Link to='/about'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>About Us</li></Link>
                            <Link to='/contact'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Contact Us</li></Link>
                            <Link to='/magazine'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Magazines</li></Link>
                            <Link to='/blogs'><li className='hover:text-[#D5BD81] hover:cursor-pointer'>Blogs</li></Link>
                        </ul>

                    </div>
                    <hr className='border-b-2 ' />
                    <div className='flex items-center justify-center gap-2 text-sm '>
                        <span className='hover:text-[#D5BD81] hover:cursor-pointer'>English</span>
                        <span>/</span>
                        <span className='hover:text-[#D5BD81] hover:cursor-pointer'>සිංහල</span>
                        <span>/</span>
                        <span className='hover:text-[#D5BD81] hover:cursor-pointer'>தமிழ்</span>
                    </div>
                </div>
            </Drawer>

        </div>
    )
}

export default Header
