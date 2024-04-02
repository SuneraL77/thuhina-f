import React from 'react'
import Card_img from '../../assets/images/magazines.png'
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'

const ManageMagazineCard = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center shadow-lg'>
            <div className='relative flex items-center justify-center overflow-hidden duration-300 '>
                <img src={Card_img} alt='/' className='w-full duration-300 ' />
                <div className='absolute top-0 left-0 flex w-full h-full gap-3 p-5 duration-300 bg-black/40'>
                    <Button color='red' >Delete</Button>
                    <Link to='/admin/Magazines_management/update'><Button color='#D5BD81' >Update</Button></Link>
                </div>
            </div>
            <div className='py-5 text-center'>
                <h1>February 2024</h1>
            </div>
        </div>
        </div>
    )
}

export default ManageMagazineCard
