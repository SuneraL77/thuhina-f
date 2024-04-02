import React from 'react'
import Card_img from '../../assets/images/magazines.png'
import { Button } from '@mantine/core'

const MagazineCard = () => {
    return (
        <div className='flex flex-col items-center justify-center shadow-lg'>
            <div className='relative flex items-center justify-center overflow-hidden duration-300 group'>
                <img src={Card_img} alt='/' className='w-full duration-300 group-hover:scale-110' />
                <div className='absolute flex items-center justify-center w-full h-full duration-300 bg-black/40 bottom-full group-hover:top-0 group-hover:left-0'>
                    <Button color='white' variant='outline'>View & Download</Button>
                </div>
            </div>
            <div className='py-5 text-center'>
                <h1>February 2024</h1>
            </div>
        </div>
    )
}

export default MagazineCard
