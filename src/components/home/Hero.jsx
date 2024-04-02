import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Hero_img from '../../assets/images/Hero.png'
import Logo from '../../assets/images/ThuhinaLogo.png'
import { Button } from '@mantine/core';
import { Link } from 'react-scroll'

const Hero = () => {

    return (
        <>
            <div className="w-full ">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        el: ".swiper-hero-pagination",
                    }}
                    loop={true}
                    className={`w-full relative`}
                >
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Hero_img} alt='/' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Hero_img} alt='/' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Hero_img} alt='/' />
                        </div>
                    </SwiperSlide>

                    <div className="w-full h-full absolute top-0 left-0 flex justify-center items-start flex-col gap-6 z-40 px-3 md:px-10 lg:px-16 xl:px-20 bg-[#00000050]">
                        <img src={Logo} alt='/' className='hidden h-28 lg:flex' />
                        <div className='w-1/2'>
                            <p className='text-white lg:text-2xl'> කපු මහත්වරු පස්සෙ ගිහින් එපා වෙලාද ?  කාටත් හොරෙන් පෞද්ගලිකත්වය රැකගෙන විස්වාසයෙන් සිතැගි සහකරු හෝ සහකාරිය  සොයාගන්න "තුහින.lk"</p>
                        </div>
                        <Link to="mainAddvertisement" smooth={true} duration={1000}><Button variant='outline' color='white'>පිවිසෙන්න</Button></Link>
                    </div>

                    <div className="absolute bottom-0 z-50 w-full">
                        <div className="swiper-hero-pagination swiper-pagination" />
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default Hero
