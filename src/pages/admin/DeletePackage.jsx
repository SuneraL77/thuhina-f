import React from 'react'
import PopularPackageCard from '../../components/cards/PopularPackageCard'
import { Button } from '@mantine/core'
import NormalPackageCard from '../../components/cards/NormalPackageCard'

const DeletePackage = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='text-xl font-medium'>Packages</h1>
            <span>Delete Package</span>

            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col gap-3'>
                    <PopularPackageCard />
                    <div className='flex justify-end md:justify-center'>
                        <Button color='red'>Delete</Button>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <NormalPackageCard />
                    <div className='flex justify-end md:justify-center'>
                        <Button color='red'>Delete</Button>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <NormalPackageCard />
                    <div className='flex justify-end md:justify-center'>
                        <Button color='red'>Delete</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DeletePackage
