import { Button, Input } from '@mantine/core'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ManageMagazineCard from '../../components/cards/ManageMagazineCard'

const MagazineManagement = () => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-medium'>Magazines Management</h1>

            <div className='flex items-center justify-between w-full'>
                <Input placeholder="Search magazine from title" rightSection={<IoSearchSharp />} />
                <Link to='/admin/Magazines_management/add_new'><Button variant='filled' color='#D5BD81'>Add New Magazine</Button></Link>
            </div>

            <div className='grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
                <ManageMagazineCard/>
                <ManageMagazineCard/>
                <ManageMagazineCard/>
            </div>
                
        </div>
    )
}

export default MagazineManagement
