import { Button, Input } from '@mantine/core'
import React from 'react'

const SignIn = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center p-3'>
            <div className='flex flex-col md:w-2/3 gap-6 bg-[#f5e8c9] p-10 w-full lg:w-1/2'>
                <h1 className='text-xl font-medium text-center'>Admin Panel</h1>
                <Input placeholder='Enter Admin Email' />
                <Input placeholder='Enter Verification code we sent to your email' />
                <div className='flex justify-center'>
                    <Button variant='filled' color='#D5BD81'>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
