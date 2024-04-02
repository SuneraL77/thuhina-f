import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'
import SentMessage from '../message/SentMessage';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { GrAttachment } from 'react-icons/gr';
import { BsSendFill } from 'react-icons/bs';
import RecieveMessage from '../message/RecieveMessage';

const MessageCard = () => {

    const [opened, { open, close }] = useDisclosure(false);
    
    return (
        <>
            <div className='rounded-md bg-[#D9D9D9] p-5 flex justify-between gap-6 flex-col md:flex-row'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-lg font-bold'>Supun Maduranga</h1>
                    <div className='flex flex-col gap-1'>
                        <span className='text-sm'>malindu@gmail.com</span>
                        <span className='text-sm'>0776655432</span>
                        <span className='text-sm'>General Inquiry</span>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <span className='text-xs'>Message</span>
                        <span className='font-medium '>Can I Know More about your website ?</span>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <Button color='#D5BD81' onClick={open}>Send Reply </Button>
                </div>
            </div>

            <Modal opened={opened} onClose={close} title="Message">
            <div className='flex flex-col w-full border rounded-md shadow-lg '>
                <div className='flex items-center gap-3 px-3 py-5 border-b'>
 
                    <h1>Himarsha S.</h1>
                </div>
                <div className='h-[60vh] flex flex-col p-5 gap-2 overflow-scroll scroll-smooth scrollbar-hide'>
                    <h1 className='text-xs text-center'>01.03.2024</h1>
                    <SentMessage />
                    <RecieveMessage />
                    <h1 className='text-xs text-center'>Today</h1>
                    <SentMessage />
                    <RecieveMessage />
                    <SentMessage />
                    <RecieveMessage />
                     
                </div>
                <div className='flex items-center justify-between gap-3 px-3 py-5 border-t'>
                    <div className='flex items-center w-5/6 gap-3'>
                        <FaRegFaceSmile size={25} />
                        <input type='text' placeholder='type here...' className='w-full bg-transparent border-b outline-none' />
                    </div>
                    <div className='flex items-center justify-end w-1/6 gap-5'>
                        <GrAttachment size={25} />
                        <BsSendFill size={25} />
                    </div>
                </div>
            </div>
            </Modal>
        </>
    )
}

export default MessageCard
