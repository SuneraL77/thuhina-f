import { Button, Input } from '@mantine/core'
import React from 'react'

const TopAds = () => {
    return (
        <div>
            <div className='flex flex-col gap-10'>
                <h1 className='text-xl font-medium'>Top Ads</h1>

                <div className='flex flex-col gap-10'>
                    <p>
                        Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum  Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum  Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum  Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum 
                    </p>
                    <div className='flex items-center gap-3'>
                        <span>Price (Rs.):</span>
                        <Input placeholder="price" value='1000'/>
                        <Button variant='filled' color='#D5BD81'>Update</Button>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default TopAds
