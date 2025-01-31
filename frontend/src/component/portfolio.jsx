import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import SEO from './images/SEO.jpg';
import data from './images/data.jpg';
import web from './images/web.jpg';

function Portfolio() {
    return (
        <div className="portfolio-body">
            <div className="portfolio-box">
                <div className="portfolio-heading1">Our Case Study</div>
                <div className="portfolio-heading2-box">
                    <div className="portfolio-heading2-text1">Our Outstanding</div>
                    <div className="portfolio-heading2-text2">Latest <span>Projects & Work</span></div>
                </div>
                <div className="swiper-box">
                    {/* Swiper Component */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper-portfolio"
                    >
                        <SwiperSlide className="SEO">
                            <div className="SEO-overlay">
                                <div className="SEO-text1">SEO OPTIMIZATION</div>
                                <div className="SEO-text2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                                <div className="SEO-text3"><a href="#">LEARN MORE</a></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="data">
                            <div className="SEO-overlay">
                                <div className="SEO-text1">DATA PROTECTION</div>
                                <div className="SEO-text2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                                <div className="SEO-text3"><a href="#">LEARN MORE</a></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="web">
                            <div className="SEO-overlay">
                                <div className="SEO-text1">WEB DEVELOPMENT</div>
                                <div className="SEO-text2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                                <div className="SEO-text3"><a href="#">LEARN MORE</a></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
