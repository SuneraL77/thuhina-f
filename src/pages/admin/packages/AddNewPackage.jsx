import { Button, Radio, TextInput, Textarea } from '@mantine/core'
import React from 'react'

const AddNewPackage = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='text-xl font-medium'>Packages</h1>
            <span>Add New Package</span>
            <div className='flex flex-col w-full gap-5 lg:w-2/3'>
                <TextInput
                    label="Package Name"
                    placeholder="Eg: Basic"
                />
                <TextInput
                    label="Package Price"
                    placeholder="Eg: 2000 LKR"
                />
                <Textarea
                    label="Package Description"
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <div className='flex flex-col gap-2'>
                    <TextInput
                        label="Add Package Option"
                        placeholder="Lorem Ipsum is simply dummy"
                    />
                    <TextInput
                        placeholder="Lorem Ipsum is simply dummy"
                    />
                    <TextInput
                        placeholder="Lorem Ipsum is simply dummy"
                    />
                    <TextInput
                        placeholder="Lorem Ipsum is simply dummy"
                    />
                    <TextInput
                        placeholder="Lorem Ipsum is simply dummy"
                    />
                    <TextInput
                        placeholder="Lorem Ipsum is simply dummy"
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <span className='font-medium'>Select Highlight One</span>
                    <div className='flex gap-5'>
                        <Radio value="Popular" label="Most Popular" />
                        <Radio value="Normal" label="Normal Package" />
                    </div>
                </div>

                <div className='flex justify-end'>
                <Button color='#D5BD81'>Publish</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewPackage
