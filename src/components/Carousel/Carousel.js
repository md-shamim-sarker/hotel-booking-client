import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import sajek from '../../assets/images/Sajek.png';
import sreemongol from '../../assets/images/Sreemongol.png';
import sundorbon from '../../assets/images/sundorbon.png';
import {Link} from "react-router-dom";

export default function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative text-white border-4 border-transparent hover:border-yellow-300 hover:cursor-pointer rounded-[1.15rem]">
                        <h3 className="absolute bottom-4 left-3">SAJEK</h3>
                        <Link to={"/sajek"}><img src={sajek} alt="sajek" /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative text-white border-4 border-transparent hover:border-yellow-300 hover:cursor-pointer rounded-[1.15rem]">
                        <h3 className="absolute bottom-4 left-3">SREEMONGOL</h3>
                        <Link to={"/sreemongol"}><img src={sreemongol} alt="sreemongol" /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative text-white border-4 border-transparent hover:border-yellow-300 hover:cursor-pointer rounded-[1.15rem]">
                        <h3 className="absolute bottom-4 left-3">SUNDORBON</h3>
                        <Link to={"/sundorbon"}><img src={sundorbon} alt="sundorbon" /></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
