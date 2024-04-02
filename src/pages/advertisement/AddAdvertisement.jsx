import { Button, Select, TextInput, Textarea } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import { IoAlertCircle } from "react-icons/io5";

const AddAdvertisement = () => {
    return (
        <div className='flex flex-col gap-10 px-3 py-10 md:px-10 lg:px-16 xl:px-32'>
            <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
                <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>New Add</h1>
            </div>
            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Basic</h1>
                <div className='flex p-3 bg-[#eefce8] gap-3'>
                    <IoAlertCircle size={25} />
                    <p className='text-justify text-[#747474]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='w-full mt-3 rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <TextInput
                            label="First Name"
                            placeholder="Enter your first name"
                            className='md:w-1/2'
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Enter your last name"
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Display Name Format"
                            placeholder="Select"
                            data={['Only First Name', 'First Name and Last Name first letter', 'First Name and Last Name']}
                            className='md:w-1/2'
                        />
                        <DateInput
                            label="Birthday"
                            placeholder="Your birthday"
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Gender"
                            placeholder="Select your gender"
                            data={['Male', 'Female']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Ethnicity"
                            placeholder="Select your ethnicity"
                            data={['Sinhala', 'Tamil', 'Muslim']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Height"
                            placeholder="Select your Height"
                            data={['4ft', '4.5ft', '5ft']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Religion"
                            placeholder="Select your religion"
                            data={['Buddhist', 'Cristian', 'Hindu']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Civil Status"
                            placeholder="Select your Height"
                            data={['Never Married', 'Divorced']}
                            className='md:w-1/2'
                        />
                        <TextInput
                            label="Caste"
                            placeholder="(Optional)"
                            className='md:w-1/2'
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Residency</h1>
                <div className='flex p-3 bg-[#eefce8] gap-3'>
                    <IoAlertCircle size={25} />
                    <p className='text-justify text-[#747474]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='w-full mt-3 rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>


                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Country Of Residence"
                            placeholder="Select your country"
                            data={['Sri Lanka', 'Japan']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="State / District"
                            placeholder="Select your district"
                            data={['Kalutara', 'Colombo', 'Gampaha']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="City"
                            placeholder="Select your city"
                            data={['Baduraliya', 'Mathugama']}
                            className='md:w-1/2'
                        />
                        <div className='md:w-1/2'></div>
                    </div>


                </div>

            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Education & Profession</h1>

                <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>

                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Education Level"
                            placeholder="Select your education level"
                            data={['Up to O/L', 'Undergraduate']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Profession"
                            placeholder="Select your profession"
                            data={['Teacher', 'Doctor', 'Engineer']}
                            className='md:w-1/2'
                        />
                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Habits</h1>

                <div className='w-full  rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>

                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Drinking"
                            placeholder="Select"
                            data={['Yes', 'No']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Smoking"
                            placeholder="Select"
                            data={['Yes', 'No']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Food Preference"
                            placeholder="Select"
                            data={['Vagitarian', 'Non-vegitarian']}
                            className='md:w-1/2'
                        />
                        <div className='md:w-1/2'></div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Add Description</h1>

                <div className='w-full  rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>

                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Are you creating this ad for a differently abled person ?"
                            placeholder="Select"
                            data={['Yes', 'No']}
                            className='md:w-1/2'
                        />
                        <div className='md:w-1/2'></div>
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Textarea
                            label="Description"
                            placeholder="Write a description"
                            autosize
                            minRows={5}
                            className='w-full'
                        />

                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Upload Images</h1>

                <div className='w-full  rounded-md shadow-md bg-[#F9F9F9] flex px-5 gap-5 py-10 flex-col md:flex-row items-center justify-center'>

                    <div className='flex gap-5'>
                        <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
                            <FaPlus className='text-3xl text-white' />
                        </div>
                        <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
                            <FaPlus className='text-3xl text-white' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
                            <FaPlus className='text-3xl text-white' />
                        </div>
                        <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
                            <FaPlus className='text-3xl text-white' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Parent's Informations</h1>
                <div className='flex p-3 bg-[#eefce8] gap-3'>
                    <IoAlertCircle size={25} />
                    <p className='text-justify text-[#747474]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <h1 className='text-[#3B3B3B]  mt-3 font-medium'>Father</h1>
                <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Ethnicity"
                            placeholder="Select your ethnicity"
                            data={['Sinhala', 'Tamil', 'Muslim']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Religion"
                            placeholder="Select your religion"
                            data={['Buddhist', 'Cristian', 'Hindu']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Country Of Residence"
                            placeholder="Select your country"
                            data={['Sri Lanka', 'Japan']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Profession"
                            placeholder="Select your profession"
                            data={['Teacher', 'Doctor', 'Engineer']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <TextInput
                            label="Caste"
                            placeholder="(Optional)"
                            className='md:w-1/2'
                        />
                        <div className='md:w-1/2'></div>
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Textarea
                            label="Additional Information"
                            placeholder="Write your description"
                            autosize
                            minRows={5}
                            className='w-full'
                        />

                    </div>

                </div>

                <h1 className='text-[#3B3B3B]  mt-3 font-medium'>Mother</h1>
                <div className='w-full rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Ethnicity"
                            placeholder="Select your ethnicity"
                            data={['Sinhala', 'Tamil', 'Muslim']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Religion"
                            placeholder="Select your religion"
                            data={['Buddhist', 'Cristian', 'Hindu']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Country Of Residence"
                            placeholder="Select your country"
                            data={['Sri Lanka', 'Japan']}
                            className='md:w-1/2'
                        />
                        <Select
                            label="Profession"
                            placeholder="Select your profession"
                            data={['Teacher', 'Doctor', 'Engineer']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <TextInput
                            label="Caste"
                            placeholder="(Optional)"
                            className='md:w-1/2'
                        />
                        <div className='md:w-1/2'></div>
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Textarea
                            label="Additional Information"
                            placeholder="Write your description"
                            autosize
                            minRows={5}
                            className='w-full'
                        />

                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Horoscope Informations</h1>
                <div className='flex p-3 bg-[#eefce8] gap-3'>
                    <IoAlertCircle size={25} />
                    <p className='text-justify text-[#747474]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='w-full  rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>

                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <DateInput
                            label="Birthday"
                            placeholder="Your birthday"
                            className='md:w-1/2'
                        />
                        <Select
                            label="Birth Country"
                            placeholder="Select your birth country"
                            data={['Sri Lanka', 'Japan']}
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <TextInput
                            label="Birth City"
                            placeholder="(Optional)"
                            className='md:w-1/2'
                        />
                        <TimeInput
                            label="Birth Time"
                            placeholder="Birth Time"
                            className='md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Select
                            label="Horoscope Matching Required ?"
                            placeholder="Select"
                            data={['Yes', 'No']}
                            className='md:w-1/2'
                        />
                        <div className='md:w-1/2'></div>
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <Textarea
                            label="Additional Information"
                            placeholder="Write your description"
                            autosize
                            minRows={5}
                            className='w-full'
                        />

                    </div>

                </div>

            </div>

            <div className='flex flex-col justify-center w-full gap-3'>
                <h1 className='text-[#3B3B3B]  text-lg font-medium'>Contact Informations</h1>


                <div className='w-full  rounded-md shadow-md bg-[#F9F9F9] flex flex-col px-5 gap-5 py-10'>

                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <TextInput
                            label="Phone Number"
                            placeholder="+94 345 56 78"
                            className=''
                        />
                    </div>
                    <div className='flex p-3 bg-[#eefce8] gap-3'>
                        <IoAlertCircle size={25} />
                        <p className='text-justify text-[#747474]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                        <TextInput
                            label="Email"
                            placeholder="test@gmail.com"
                            className=''
                        />
                    </div>
                    <div className='flex p-3 bg-[#eefce8] gap-3'>
                        <IoAlertCircle size={25} />
                        <p className='text-justify text-[#747474]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>


                </div>

            </div>

            <div className='flex justify-between'>
                <Button variant='outline' color='#9D9D9D'>Back</Button>
                <div className='w-44'>
                    <Button variant='filled' color='#D5BD81' fullWidth>Add</Button>
                </div>
            </div>

        </div>
    )
}

export default AddAdvertisement
