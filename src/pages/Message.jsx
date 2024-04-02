import React from 'react'
import Photo from '../assets/images/user.png'
import { FaRegFaceSmile } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import { BsSendFill } from "react-icons/bs";
import SentMessage from '../components/message/SentMessage';
import RecieveMessage from '../components/message/RecieveMessage';

const Message = () => {
    return (
        <div className='flex flex-col items-center w-full gap-10 pb-10'>

            <div className='flex flex-col gap-3 py-5 text-center w-full bg-[#D5BD81] javanese_font'>
                <span className='text-xl text-white uppercase'>Chat Box</span>
            </div>

            <div className='flex flex-col w-full border rounded-md shadow-lg lg:w-3/5 md:w-4/5'>
                <div className='flex items-center gap-3 px-3 py-5 border-b'>
                    <img src={Photo} alt='/' className='w-20 h-20 rounded-full' />
                    <h1>Himarsha S.</h1>
                </div>
                <div className='h-[60vh] flex flex-col p-5 gap-2 overflow-scroll scroll-smooth scrollbar-hide'>
                    <h1 className='text-xs text-center'>01.03.2024</h1>
                    <SentMessage />
                    <RecieveMessage />
                    <SentMessage />
                    <h1 className='text-xs text-center'>Today</h1>
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

        </div>
    )
}

export default Message
