import { Button,TextInput } from '@mantine/core'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddNewMagazine = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='text-xl font-medium'>Magazines Management</h1>
            <span>Add New Magazine</span>
            <div className='flex flex-col w-full gap-5 lg:w-2/3'>
                <TextInput
                    label="Magazine Title"
                    placeholder="Eg: February 2024"
                />
              

                <div className='flex flex-col gap-2'>
                    <span className='font-medium'>Upload Magazine Image</span>
                    <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
                            <FaPlus className='text-3xl text-white' />
                        </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-medium'>Upload Magazine PDF</span>
                    <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
                            <FaPlus className='text-3xl text-white' />
                        </div>
                </div>
                

                <div className='flex justify-end'>
                <Button color='#D5BD81'>Publish</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewMagazine
