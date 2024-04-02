import React from 'react'

const SentMessage = () => {
    return (
        <div className='flex justify-end w-full'>
            <div className='flex flex-col p-3 rounded-md bg-[#f3dea8]'>
                <p className='font-medium'>Hi, Are you available to chat</p>
                <div className='flex justify-end gap-2 text-sm'>
                    <span>7.45pm</span>
                    <span>seen</span>
                </div>
            </div>
        </div>
    )
}

export default SentMessage
