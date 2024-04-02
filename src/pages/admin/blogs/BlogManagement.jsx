import { Button, Input } from '@mantine/core'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import ManageBlogCard from '../../../components/cards/ManageBlogCard'
import { Link } from 'react-router-dom'

const BlogManagement = () => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-medium'>Blogs Management</h1>

            <div className='flex items-center justify-between w-full'>
                <Input placeholder="Search blogs from title" rightSection={<IoSearchSharp />} />
                <Link to='/admin/blogs_management/add_new'><Button variant='filled' color='#D5BD81'>Add New Blog</Button></Link>
            </div>

            <div className='grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
                <ManageBlogCard/>
                <ManageBlogCard/>
                <ManageBlogCard/>
            </div>
                
        </div>
    )
}

export default BlogManagement
