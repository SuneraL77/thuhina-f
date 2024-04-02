import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Empty = () => {
  return (
    <div>
        <div className='w-full h-[60vh] flex flex-col justify-center items-center gap-10'>
        <h1 className='text-[#797979]  text-2xl font-medium text-center'>Add your Advertisement</h1>
        <div className='w-20 h-20 rounded-md bg-[#797979] flex justify-center items-center cursor-pointer active:scale-105'>
          <FaPlus className='text-3xl text-white' />
        </div>
      </div>
    </div>
  )
}

export default Empty
 