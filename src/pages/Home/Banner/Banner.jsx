import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="mb-5">
            <Swiper
                style={{ zIndex: 0 }}
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="p-8  bg-gray-200">
                        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center lg:h-[400px]">
                            <div className="lg:ml-36">
                                <img width="800" height="700" src="https://i.ibb.co/41bTXnf/slider1.jpg" className="rounded-lg shadow-2xl" />
                            </div>
                            <div className="space-y-4 pl-12 text-center md:text-left">
                                <h1 className="text-5xl font-bold mb-12">Find Your Perfect Match</h1>
                                <p>"Discover your soulmate from our extensive database of eligible singles."</p>
                                <NavLink to={'/sign-up'}>
                                    <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded uppercase mt-4">Join Now</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-gray-200">
                        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center lg:h-[400px]">
                            <div className="lg:ml-36">
                                <img width="800" height="700" src="https://i.ibb.co/1dskGhS/slider2.jpg" className="rounded-lg shadow-2xl" />
                            </div>
                            <div className="space-y-4 pl-12 text-center md:text-left">
                                <h1 className="text-5xl font-bold mb-12">Verified Profiles</h1>
                                <p>"Experience a safe and secure platform with verified profiles."</p>
                                <NavLink to={'/sign-up'}>
                                    <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded uppercase mt-4">Join Now</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8  bg-gray-200">
                        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center lg:h-[400px]">
                            <div className="lg:ml-36">
                                <img width="800" height="700" src="https://i.ibb.co/k4qC79n/slider3.jpg" className="rounded-lg shadow-2xl" />
                            </div>
                            <div className="space-y-4 pl-12 text-center md:text-left">
                                <h1 className="text-5xl font-bold mb-12">Advanced Matching Algorithm</h1>
                                <p>"Let our advanced matching algorithm connect you with compatible matches based on your preferences, values, and interests."</p>
                                <NavLink to={'/sign-up'}>
                                    <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded uppercase mt-4">Join Now</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8  bg-gray-200">
                        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center lg:h-[400px]">
                            <div className="lg:ml-36">
                                <img width="800" height="700" src="https://i.ibb.co/vQXBwzs/slider4.jpg" className="rounded-lg shadow-2xl" />
                            </div>
                            <div className="space-y-4 pl-12 text-center md:text-left">
                                <h1 className="text-5xl font-bold mb-12">Success Stories</h1>
                                <p>"Read inspiring success stories from couples who found love through our platform. Your love story could be next"</p>
                                <NavLink to={'/sign-up'}>
                                    <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded uppercase mt-4">Join Now</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;