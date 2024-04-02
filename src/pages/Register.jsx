import React, { useState } from 'react'
import Header from '../components/nav/Header'
import Bg_top from '../assets/images/bg_image_top.png'
import Bg_bottom from '../assets/images/bg_image_bottom.png'
import { Button, Modal, Radio } from '@mantine/core'
import { FaPhone } from 'react-icons/fa6'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import { Upload } from 'antd'
import { register } from 'react-scroll/modules/mixins/scroller'

const Register = () => {

    const [opened, { open, close }] = useDisclosure(false);

    const [first_name,setFisrtName] = useState('');
    const[last_name,setLastname] = useState('');
    const [mobile,setMobile] = useState('');
    const [email,setEmail] = useState('');
    const [bithday,setBirtDay] = useState('');
    const [gender,setGender] = useState('');
    const [front,idImage] = useState([]) 

const submit = async () =>{
    const response = await register(first_name,last_name,mobile,email,bithday,gender)
  
}




    return (
        <>
            <Header />

            <div className='flex flex-col justify-between w-full gap-10'>

                <div className='flex flex-col gap-3 py-5 text-center w-full bg-[#D5BD81] javanese_font'>
                    <span className='text-lg text-white'>Welcome to</span>
                    <h1 className='text-3xl text-white '>Thihina Mangala Sewaya</h1>
                </div>

                <div className='flex justify-center w-full'>
                    <div className='relative rounded-lg shadow-lg  flex bg-[#F9F9F9] h-full  justify-between lg:w-1/2 w-full md:w-4/5'>
                        <img src={Bg_top} alt='/' className='absolute top-0 left-0' />
                        <img src={Bg_bottom} alt='/' className='absolute bottom-0 right-0' />

                        <div className='z-50 flex flex-col w-full h-full gap-5 py-10'>
                            <h1 className='text-[#3B3B3B] text-center text-2xl font-medium'>Create Account</h1>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-2 px-3'>
                                    <span className='text-[#3B3B3B]'>First Name</span>
                                    <input  value={first_name} onChange={(e) => setFisrtName(e.target.value)}type='text' className='w-full bg-transparent border-b outline-none' placeholder='Ex: Malindu' />
                                </div>
                                <div className='flex flex-col gap-2 px-3'>
                                    <span className='text-[#3B3B3B]'>Last Name</span>
                                    <input type='text' value={last_name} onChange={(e) => setLastname(e.target.value) } className='w-full bg-transparent border-b outline-none' placeholder='Ex: Ishan' />

                                </div>
                                <div className='flex flex-col gap-2 px-3'>
                                    <span className='text-[#3B3B3B]'>Mobile Number</span>
                                    <div className='flex gap-5'>
                                        <input type='text' className='w-full bg-transparent border-b outline-none' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Ex: +94 71 23 45 678' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 px-3'>
                                    <span className='text-[#3B3B3B]'>Email Address</span>
                                    <input type='email' className='w-full bg-transparent border-b outline-none' placeholder='Ex: malindu@gmail.com' value={email} onChange={(e) =>setEmail(e.target.value)} />

                                </div>
                                <div className='flex flex-col gap-2 px-3'>
                                    <span className='text-[#3B3B3B]'>Birthday</span>
                                  <input className='w-full bg-transparent border-b outline-none'  value={bithday}  onChange={(e) => setBirtDay(e.target.value)}/>
                                </div>
                                <div className='flex flex-col gap-2 px-3'>
                                    <span className='text-[#3B3B3B]'>Gender</span>

                                    <div className='flex gap-5'>
                                        <Radio value="Male" label="Male" onChange={(value) => setGender(value)} />
                                        <Radio value="Female" label="Female"  onChange={(value) => setGender(value)}/>
                                    </div>


                                </div>
                                <div className='flex flex-col gap-2 px-3'>
                                    <span className='text-[#3B3B3B]'>Upload Your Identity Card Images</span>

                                    <div className='flex gap-5 text-white'>
                                       
                                        <div>
                                            <Upload
                                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                                listType="picture-card"

                                            >
                                                { '+ Front Side'}
                                            </Upload>
                                        </div>
                                        <div>
                                            <Upload
                                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                                listType="picture-card"

                                            >
                                                { '+ Back Side'}
                                            </Upload>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex justify-center w-full mt-6'>
                                    <div className='w-1/3 md:w-1/5'>
                                        <Button variant='filled' color='#D5BD81' className='text-black' fullWidth onClick={() => submit()}>Create Account</Button>
                                    </div>

                                </div>
                                <div className='flex justify-center w-full px-3'>
                                    <div className='flex bg-[#D5BD81] gap-3 px-10 md:w-2/3 w-full py-2 items-center justify-center lg:w-1/2' onClick={open}>
                                        <FaPhone />
                                        <span className='font-bold'>Call Us To Create Your Account</span>
                                    </div>
                                </div>

                                <Modal opened={opened} onClose={close}
                                    title="Contact Us">
                                    <h1>+94 77 55 66 345</h1>
                                </Modal>
                            </div>


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

export default Register
