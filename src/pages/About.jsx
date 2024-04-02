import React from 'react'
import About_img1 from '../assets/images/about_img1.png'

const About = () => {
    return (
        <div className='flex flex-col gap-10 px-3 py-10 md:px-10 lg:px-16 xl:px-24'>
            <div className='w-full bg-gradient-to-r from-[#e8dfc9] to-[#f9f9f9] py-5 shadow-xl rounded-md'>
                <h1 className='text-[#3B3B3B]  text-xl font-medium text-center'>About Us</h1>
            </div>

            <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                <div className='w-full md:w-1/4 md:hidden'>
                    <img src={About_img1} alt='/' />
                </div>
                <div className='w-full md:w-3/4'>
                    <p className='text-[#D5BD81] text-justify text-lg'>ආදරනීය හදවත් රාශියක අතැගිලි එක් කල අපි පස් වසරක සේවා අත්දැකීම් තුලින් ඔබට සිතැගි සහකරු හෝ සහකාරිය ඉක්මනින්ම සොයා ගැනිමට "තුහින.lk"අපි කැපවෙන්නෙමු.ඔබ තුහින.lk වෙත පිය නැගීමෙන් ඔබගෙ විවහා අපේක්ෂාවන් ඉතා ඉක්මනින් ආරක්ෂාකාරීව ඉටු කර දිමට තුහින.lk කාර්‍ය්ලමංඩලය වන අපි ඔබ සමග අත්වැල් බැද ගන්නෙමු</p>
                </div>
                <div className='hidden w-full md:w-1/4 md:flex'>
                    <img src={About_img1} alt='/' />
                </div>
            </div>
            <div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
                <div className='w-full md:w-1/4'>
                    <img src={About_img1} alt='/' />
                </div>
                <div className='w-full md:w-3/4'>
                    <p className='text-[#D5BD81] text-justify text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                 
            </div>
        </div>
    )
}

export default About
