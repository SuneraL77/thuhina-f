import React from 'react'
import BlogCard from '../components/cards/BlogCard'

const Blogs = () => {
    return (
        <div className='flex flex-col gap-10 px-3 py-10 md:px-10 lg:px-16 xl:px-24'>
            <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
                <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>Blogs</h1>
            </div>

            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
               <BlogCard/>
               <BlogCard/>
               <BlogCard/>
               <BlogCard/>
               <BlogCard/>
               <BlogCard/>
            </div>
        </div>
    )
}

export default Blogs
