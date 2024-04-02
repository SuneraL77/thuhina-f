import React from 'react'
// import Empty from '../components/advertisement/Empty'
import MyAdd from '../components/advertisement/MyAdd'

const Advertisement = () => {
  return (
    <div className='flex flex-col px-3 py-10 md:px-10 lg:px-16 xl:px-24'>
      <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
        <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>My Advertisement</h1>
      </div>
       <MyAdd/>
    </div>
  )
}

export default Advertisement
