import React from 'react'
import Card_img from '../assets/images/blogs_card.png'


const BlogsSingle = () => {
    return (
        <div className='flex flex-col gap-10 px-3 py-10 md:px-10 lg:px-16 xl:px-24'>
            <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
                <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>Blogs Single View</h1>
            </div>

            <div className='flex flex-col w-full gap-5'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h1>
                    <span className='text-sm'>2024.03.04</span>
                </div>
                <div className='flex flex-col w-full gap-5 lg:flex-row'>
                    <img src={Card_img} alt='/' className='w-1/2' />
                    <div className='flex flex-col w-full gap-5 lg:w-1/2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente cupiditate fuga similique, eligendi autem ipsum illo ex? Facere eligendi reiciendis, voluptatum at architecto odit fugiat deleniti atque enim, illum corrupti fuga dolore aliquam ipsum officia neque harum sunt cupiditate nulla aliquid dolorem culpa officiis exercitationem sit! Qui, delectus libero. Nemo, eveniet. Inventore illum vel quam, accusamus placeat dolor alias nihil aut, temporibus ex quasi, eaque minima delectus velit consequuntur quaerat nam. Molestias iste asperiores eos ducimus nemo, facilis qui neque saepe tempora aspernatur nobis sint nam similique odio eum a officiis libero beatae culpa. Magni deleniti molestias vel consectetur, eaque nulla ut iure cumque maxime nam blanditiis laborum nisi aut id porro ab tempora omnis rerum dicta accusamus soluta cupiditate praesentium itaque. Sed itaque minus ratione quaerat nostrum totam aut fugit enim reprehenderit nemo ad sit cumque, sequi nisi deserunt dolore fugiat earum, eveniet quidem. Possimus corrupti, veniam facere id nulla, eaque, iusto aperiam fugit natus hic necessitatibus voluptatibus voluptatem! Minima quaerat ad natus officia ut facere vitae consequuntur consectetur provident quam nam vero velit, porro hic sed quibusdam dolorum? Molestias similique minima, officiis sit dolorem, dolor voluptatibus impedit ut unde a sint, molestiae laboriosam facilis consequatur iure nam?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogsSingle
