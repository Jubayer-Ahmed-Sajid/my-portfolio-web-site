import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
// import './Slider.css'
const MyWorks = () => {
    useEffect(() => {
        Aos.init({
            duration: 1800,
        })
    }, [])
    return (
        <div id='myWorks' className='bg-black p-8'>
            <h2 className="text-4xl font-bold text-center my-8 text-[#058472]" data-aos='fade-in'>My Works</h2>
            <div >
                <div className='min-h-80 '>
                    <div className='lg:flex flex-row-reverse  justify-center items-center gap-12'>
                        <div className=' lg:w-1/2 ' data-aos='fade-down-left'>

                            <Swiper

                                slidesPerView={2}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}


                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >

                                <SwiperSlide>
                                    <img src=" https://i.ibb.co/4MfFLjW/Library-1.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://i.ibb.co/tx3shdc/LIbrary-2.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://i.ibb.co/gzxkfFs/LIbrary-3.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://i.ibb.co/MD9CZkF/Library-4.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div data-aos='fade-up-right'>
                            <h2 className="text-white text-2xl font-semibold  my-4">Library Management Site</h2>
                            <h2 className=' text-white'> It’s a responsive library management platform with Firebase-based authentication, dynamic category organization, and admin controls for  book updates, offering users a seamless reading experience with a stylish dark/light mode interface. <br />
                                The project is built using React, DaisyUI, Tailwind CSS for the frontend, and Express.js, Node.js, MongoDB and JWT for the backend. </h2>


                        </div>
                    </div>
                    <div className='md:w-1/2 mx-auto grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 items-center space-y-1 justify-center my-4'>
                    <div>

                            <Link to='https://github.com/Jubayer-Ahmed-Sajid/Library-management-client-site' className='btn w-full   btn-secondary '>Client Repo</Link>
                        </div>
                        <div>
                            <Link to='https://github.com/Jubayer-Ahmed-Sajid/Library-management-server-site' className='btn w-full btn-secondary '>Server Repo</Link>

                        </div>
                        <div className='lg:col-span-1 col-span-2'>

                            <Link to='https://assignment-11-3e9b0.web.app' className='btn lg:bg-secondary  bg-[#058472] border-none w-full  btn-secondary '>Live Preview</Link>
                        </div>
                    </div>
                </div>



                <div className='mt-8'>

                    <div className='lg:flex justify-center items-center gap-12'>
                        <div className='lg:w-1/2' data-aos='fade-down-left'>

                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >

                                <SwiperSlide>
                                    <img src=" https://i.ibb.co/9yByvZg/pet-adoption-1.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://i.ibb.co/W5Ps5Zy/pet-adoption-2.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://i.ibb.co/9bxS1Qs/pet-adoption-3.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://i.ibb.co/xC5hp7y/pet-adoption-4.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src=" https://i.ibb.co/f9BbbBP/pet-adoption-5.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src=" https://i.ibb.co/MSM4yJS/pet-adoption-6.jpg" className='h-[150px] object-cover' alt="" />
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div>
                            <div data-aos='fade-up-right'>
                                <h2 className="text-white text-2xl font-semibold  my-4">Library Management Site</h2>
                                <h2 className=' text-white'> It’s a responsive library management platform with Firebase-based authentication, dynamic category organization, and admin controls for  book updates, offering users a seamless reading experience with a stylish dark/light mode interface. <br />
                                    The project is built using React, DaisyUI, Tailwind CSS for the frontend, and Express.js, Node.js, MongoDB and JWT for the backend. </h2>


                            </div>
                        </div>
                    </div>
                    <div className='grid md:w-1/2 mx-auto grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 items-center space-y-1 justify-center my-4'>

                   
                        <div>
                             <Link to='https://github.com/Jubayer-Ahmed-Sajid/Pet-adoption-client-site' className='btn w-full btn-secondary '>Client Repo</Link>
                        </div>
                        <div>
                         <Link to='https://github.com/Jubayer-Ahmed-Sajid/Pet-adoption-server-site' className='btn w-full btn-secondary '>Server Repo</Link>
                        
                        </div>
                       
                        <div className='lg:col-span-1 col-span-2'>
                            <Link to='https://pet-adaption-11a4b.web.app' className='btn w-full lg:bg-secondary bg-[#058472] border-none  btn-secondary '>Live Preview</Link>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default MyWorks;