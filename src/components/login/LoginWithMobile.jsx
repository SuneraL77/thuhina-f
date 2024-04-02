import React from 'react'
import Bg_top from '../../assets/images/bg_image_top.png'
import Bg_bottom from '../../assets/images/bg_image_bottom.png'
import { Button, Select } from '@mantine/core'
import { Link } from 'react-router-dom'

const LoginWithMobile = () => {
    return (
        <>
            <div className='w-full h-[100vh] flex flex-col justify-between gap-10'>

                <div className='flex flex-col gap-3 py-5 text-center w-full bg-[#D5BD81] javanese_font'>
                    <span className='text-lg text-white'>Welcome to</span>
                    <h1 className='text-3xl text-white '>Thihina Mangala Sewaya</h1>
                </div>

                <div className='flex justify-center w-full'>
                    <div className='relative rounded-lg shadow-lg  flex bg-[#F9F9F9]'>
                        <img src={Bg_top} alt='/' className='' />
                        <img src={Bg_bottom} alt='/' className='hidden md:flex' />

                        <div className='absolute top-0 left-0 flex flex-col justify-center w-full h-full gap-5 py-10'>
                            <h1 className='text-[#3B3B3B] text-center text-2xl font-medium'>Welcome Back !</h1>
                            <div className='flex flex-col gap-3 px-3 md:px-20'>
                                <span className='text-[#3B3B3B]'>Enter Your Mobile Number Here</span>
                                <div className='flex gap-5'>
                                    <Select
                                        data={['+94', '+56', '+876', '+45']}
                                        defaultValue='+94'
                                        className='w-28'
                                        checkIconPosition="right"
                                    />
                                    <input type='text' className='w-full bg-transparent border-b outline-none' placeholder='Ex: +94 71 23 45 678' />
                                </div>
                            </div>
                            <div className='flex justify-center w-full'>
                                <div className='w-1/3 md:w-1/5'>
                                    <Button variant='filled' color='#D5BD81' className='text-black' fullWidth>Send Code</Button>
                                </div>
                            </div>
                            <span className='text-[#3B3B3B] underline text-center text-sm'>Log In With Email Verification</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full py-5 text-center text-[#595959]'>
                    <span className=''>By signing up you are agreeing to our</span>
                    <div className='flex justify-center w-full gap-1 text-center'>
                        <Link to='/privacy'><span>Privacy Policy </span></Link>
                        <span>and</span>
                        <Link to='/terms&conditions'><span>Terms of Use.</span></Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginWithMobile
