import { Input, Table } from '@mantine/core'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5';


const elements = [
    { id: '1', userId: '#11232', paymentDate: 'Jun 29,2022', expireDate: 'Jul 29,2022', package: 'Bronse' },
    { id: '2', userId: '#11232', paymentDate: 'Jun 29,2022', expireDate: 'Jul 29,2022', package: 'Bronse' },
    { id: '3', userId: '#11232', paymentDate: 'Jun 29,2022', expireDate: 'Jul 29,2022', package: 'Bronse' },
    { id: '4', userId: '#11232', paymentDate: 'Jun 29,2022', expireDate: 'Jul 29,2022', package: 'Bronse' },
    { id: '5', userId: '#11232', paymentDate: 'Jun 29,2022', expireDate: 'Jul 29,2022', package: 'Bronse' },
];

const PaymentHistory = () => {
    
    const rows = elements.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.userId}</Table.Td>
            <Table.Td>{element.paymentDate}</Table.Td>
            <Table.Td>{element.expireDate}</Table.Td>
            <Table.Td>{element.package}</Table.Td>
            
        </Table.Tr>
    ));
    
  return (
    <div className='flex flex-col gap-10'>
    <h1 className='text-xl font-medium'>Payment History</h1>

    <div className='flex items-center justify-end w-full'>
        <Input placeholder="Search ad from UserID" rightSection={<IoSearchSharp />} />
    </div>

    <div className='overflow-x-scroll bg-white scroll-smooth scrollbar-hide'>
        <Table striped  >
            <Table.Thead >
                <Table.Tr>
                <Table.Th>Id</Table.Th>
                    <Table.Th>User Id</Table.Th>
                    <Table.Th>Payment Date</Table.Th>
                    <Table.Th>Expire Date</Table.Th>
                    <Table.Th>Package</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    </div>
</div>
  )
}

export default PaymentHistory
