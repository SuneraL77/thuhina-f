import React from 'react'
import Card_img from '../../assets/images/blogs_card.png'
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'

const ManageBlogCard = () => {
    return (
        <div>
            <div className='flex flex-col shadow-lg rounded-b-xl'>
                <img src={Card_img} alt='/' />
                <div className='flex flex-col gap-5 p-5'>
                    <h1 className='text-xl font-bold'>Don’t Be a Joke</h1>
                    <p className='text-justify'>Be mindful of your words and actions. Prioritize professionalism, respect others, and tailor your humor to the situation. Avoid offensive jokes, balance seriousness with lightheartedness, and cultivate a positive ....</p>
                    <div className='flex items-end justify-between'>
                        <span className='text-sm'>2024.03.04</span>

                    </div>
                    <div className='flex items-center justify-end gap-3'>
                        <Link to='/admin/blogs_management/update'><Button variant='filled' color='#D5BD81'>Update Blog</Button></Link>
                        <Button variant='filled' color='red'>Delete Blog</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageBlogCard
