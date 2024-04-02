import React from 'react'
import {  Input, Tabs } from '@mantine/core';
import { IoSearchSharp } from 'react-icons/io5';
 
import PendingAdCard from '../../../components/cards/PendingAdCard';
import ActiveAdCard from '../../../components/cards/ActiveAdCard';
import DeclineAdCard from '../../../components/cards/DeclineAdCard';

const AdManagement = () => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-medium'>Ad Management</h1>

            <div>
                <Tabs defaultValue="Pending" variant="pills" color='#D5BD81'>
                    <Tabs.List>
                        <Tabs.Tab value="Pending" >
                            Pending Ads
                        </Tabs.Tab>
                        <Tabs.Tab value="Active" >
                            Active Ads
                        </Tabs.Tab>
                        <Tabs.Tab value="Decline" >
                            Decline Ads
                        </Tabs.Tab>

                    </Tabs.List>

                    <Tabs.Panel value="Pending">
                        <div className='flex flex-col w-full gap-10 py-10'>
                            <div className='flex justify-end w-full'>
                                <Input placeholder="Search users from ID" rightSection={<IoSearchSharp />} />
                            </div>

                            <div className='flex flex-col gap-5'>

                                <PendingAdCard />
                                <PendingAdCard />
                                <PendingAdCard />

                            </div>

                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="Active">
                        <div className='flex flex-col w-full gap-10 py-10'>
                            <div className='flex justify-end w-full'>
                                <Input placeholder="Search users from ID" rightSection={<IoSearchSharp />} />
                            </div>

                            <div className='flex flex-col gap-5'>

                                <ActiveAdCard/>
                                <ActiveAdCard/>
                                <ActiveAdCard/>

                            </div>

                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="Decline">
                        <div className='flex flex-col w-full gap-10 py-10'>
                            <div className='flex justify-end w-full'>
                                <Input placeholder="Search users from ID" rightSection={<IoSearchSharp />} />
                            </div>

                            <div className='flex flex-col gap-5'>

                                <DeclineAdCard/>
                                <DeclineAdCard/>
                                <DeclineAdCard/>

                            </div>

                        </div>
                    </Tabs.Panel>


                </Tabs>
            </div>

        </div>
    )
}

export default AdManagement
