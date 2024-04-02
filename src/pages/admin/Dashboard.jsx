import React from 'react'
import Vector1 from '../../assets/images/Vector 4.png'
import Vector2 from '../../assets/images/Vector 5.png'
import Vector3 from '../../assets/images/Vector 6.png'


const Dashboard = () => {
  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-xl font-medium'>Dashboard</h1>

      <div className='grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3'>

        {/*  */}
        <div className='flex p-3 bg-white'>
            <div className='flex flex-col w-3/4 gap-3'>
                <span>Total Earnings</span>
                <h1 className='text-xl font-medium'>$20.4K</h1>
            </div>
            <div className='flex items-center justify-center w-1/4'>
                <img src={Vector1} alt='/'/>
            </div>
        </div>

        {/*  */}
        <div className='flex p-3 bg-white'>
            <div className='flex flex-col w-3/4 gap-3'>
                <span>Last Months Earnings</span>
                <h1 className='text-xl font-medium'>$8.4K</h1>
            </div>
            <div className='flex items-center justify-center w-1/4'>
                <img src={Vector2} alt='/'/>
            </div>
        </div>

        {/*  */}
        <div className='flex p-3 bg-white'>
            <div className='flex flex-col w-3/4 gap-3'>
                <span>Total Running Ads</span>
                <h1 className='text-xl font-medium'>1500</h1>
            </div>
            <div className='flex items-center justify-center w-1/4'>
                <img src={Vector3} alt='/'/>
            </div>
        </div>

         {/*  */}
         <div className='flex p-3 bg-white'>
            <div className='flex flex-col w-3/4 gap-3'>
                <span>All Users</span>
                <h1 className='text-xl font-medium'>5000</h1>
            </div>
            <div className='flex items-center justify-center w-1/4'>
                {/* <img src={Vector3} alt='/'/> */}
            </div>
        </div>

         {/*  */}
         <div className='flex p-3 bg-white'>
            <div className='flex flex-col w-3/4 gap-3'>
                <span>Total Male Users</span>
                <h1 className='text-xl font-medium'>2000</h1>
            </div>
            <div className='flex items-center justify-center w-1/4'>
                {/* <img src={Vector3} alt='/'/> */}
            </div>
        </div>

          {/*  */}
          <div className='flex p-3 bg-white'>
            <div className='flex flex-col w-3/4 gap-3'>
                <span>Total Female Users</span>
                <h1 className='text-xl font-medium'>3000</h1>
            </div>
            <div className='flex items-center justify-center w-1/4'>
                {/* <img src={Vector3} alt='/'/> */}
            </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Dashboard
