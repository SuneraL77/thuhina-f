import React from 'react'
import MessageCard from '../../../components/cards/MessageCard'

const Message = () => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-medium'>Messages</h1>

            <div className='flex flex-col gap-5'>
                <MessageCard />
                <MessageCard />
            </div>

        </div>
    )
}

export default Message
