import React from 'react'
import { Button, Input, Switch, Table, Tabs } from '@mantine/core';
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

import { Popover } from '@mantine/core';


const elements = [
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-green-500' /> <span>Active</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-red-500' /> <span>Deactive</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-green-500' /> <span>Active</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-green-500' /> <span>Active</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-green-500' /> <span>Active</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-green-500' /> <span>Active</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-green-500' /> <span>Active</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
    { id: '#11232', username: 'Malindu', joineddate: 'Jun 29,2022', ad_running: 'yes', status: <div className='flex items-center gap-2'><GoDotFill className='text-green-500' /> <span>Active</span></div>, package: 'Bronse', action: <HiOutlineDotsHorizontal /> },
];


const UserManagement = () => {

    const PendingUsersRows = elements.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.username}</Table.Td>
            <Table.Td>{element.joineddate}</Table.Td>
            <Table.Td>{element.ad_running}</Table.Td>
 
            <Table.Td>{element.package}</Table.Td>
            <Popover trapFocus position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Table.Td>{element.action}</Table.Td>
                </Popover.Target>
                <Popover.Dropdown>
                    <div className='flex flex-col gap-3'>
                        <h1 className='cursor-pointer hover:text-[#D5BD81]'>View User Profile</h1>
                        <div className='flex items-center gap-2'>
                            <span className='cursor-pointer hover:text-[#D5BD81]'>Verify User</span>
                            <Switch />
                        </div>
                    </div>
                </Popover.Dropdown>
            </Popover>
        </Table.Tr>
    ));

    const ActiveUsersRows = elements.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.username}</Table.Td>
            <Table.Td>{element.joineddate}</Table.Td>
            <Table.Td>{element.ad_running}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
            <Table.Td>{element.package}</Table.Td>
            <Popover trapFocus position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Table.Td>{element.action}</Table.Td>
                </Popover.Target>
                <Popover.Dropdown>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2'>
                            <span className='cursor-pointer hover:text-[#D5BD81]'>Block User</span>
                            <Switch />
                        </div>
                        <h1 className='cursor-pointer hover:text-[#D5BD81]'>View User Profile</h1>
                        <h1 className='cursor-pointer hover:text-[#D5BD81]'>Delete User</h1>
                    </div>
                </Popover.Dropdown>
            </Popover>
        </Table.Tr>
    ));

 
    
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-medium'>User Management</h1>

            <Tabs defaultValue="Pending" variant="pills" color='#D5BD81'>
                <Tabs.List>
                    <Tabs.Tab value="Pending" >
                        Pending Users
                    </Tabs.Tab>
                    <Tabs.Tab value="Active" >
                        Active Users
                    </Tabs.Tab>


                </Tabs.List>

                <Tabs.Panel value="Pending">
                    <div className='flex flex-col w-full gap-10 py-10'>
                        <div className='flex items-center justify-between w-full'>
                            <Input placeholder="Search users from ID" rightSection={<IoSearchSharp />} />
                            <Button variant='filled' color='#D5BD81'>Register New user</Button>
                        </div>

                        <div className='overflow-x-scroll bg-white scroll-smooth scrollbar-hide'>
                            <Table striped  >
                                <Table.Thead >
                                    <Table.Tr>
                                        <Table.Th>User Id</Table.Th>
                                        <Table.Th>User Name</Table.Th>
                                        <Table.Th>Joined Date</Table.Th>
                                        <Table.Th>Ad Running</Table.Th>
                             
                                        <Table.Th>Package</Table.Th>
                                        <Table.Th>Action</Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>{PendingUsersRows}</Table.Tbody>
                            </Table>
                        </div>
                    </div>
                </Tabs.Panel>

                <Tabs.Panel value="Active">
                <div className='flex flex-col w-full gap-10 py-10'>
                        <div className='flex items-center justify-end w-full'>
                            <Input placeholder="Search users from ID" rightSection={<IoSearchSharp />} />
                       
                        </div>

                        <div className='overflow-x-scroll bg-white scroll-smooth scrollbar-hide'>
                            <Table striped  >
                                <Table.Thead >
                                    <Table.Tr>
                                        <Table.Th>User Id</Table.Th>
                                        <Table.Th>User Name</Table.Th>
                                        <Table.Th>Joined Date</Table.Th>
                                        <Table.Th>Ad Running</Table.Th>
                                        <Table.Th>Status</Table.Th>
                                        <Table.Th>Package</Table.Th>
                                        <Table.Th>Action</Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>{ActiveUsersRows}</Table.Tbody>
                            </Table>
                        </div>
                    </div>
                </Tabs.Panel>



            </Tabs>

        </div>
    )
}

export default UserManagement
