import { Button, TextInput, Textarea } from '@mantine/core'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const UpdateBlog = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='text-xl font-medium'>Blogs Management</h1>
            <span>Update blog</span>
            <div className='flex flex-col w-full gap-5 lg:w-2/3'>
                <TextInput
                    label="Blog Title"
                    placeholder="Eg: Best Weddings"
                />
              
                <Textarea
                    label="Description"
                    placeholder="Enter your Description"
                />
     

                <div className='flex flex-col gap-2'>
                    <span className='font-medium'>Upload Blog Image</span>
                    <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
                            <FaPlus className='text-3xl text-white' />
                        </div>
                </div>

                <div className='flex justify-end'>
                <Button color='#D5BD81'>Update Blog</Button>
                </div>
            </div>
        </div>
    )
}

export default UpdateBlog
