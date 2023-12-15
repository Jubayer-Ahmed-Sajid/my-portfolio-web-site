import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import './Slider.css'
const MyWorks = () => {
    return (
        <div className='bg-black py-12'>
            <h2 className="text-4xl text-white text-center pb-12">My Works</h2>
            <div className='lg:grid grid-cols-2 gap-12'>
                <div className='min-h-80'>
                    <h2 className="text-white my-6 text-2xl  text-center">Library Management Site</h2>

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
                    <div className='flex justify-center my-4'>
                        <Link to='https://assignment-11-3e9b0.web.app/' className='btn btn-secondary '>Live Preview</Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-white my-6 text-2xl  text-center">Library Management Site</h2>
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
                    <div className='flex justify-center my-4'>
                        <Link to='https://pet-adaption-11a4b.web.app' className='btn btn-secondary '>Live Preview</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyWorks;