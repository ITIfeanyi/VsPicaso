import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./swiper.css";

import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";

SwiperCore.use([Navigation, Pagination]);

const SwiperBox = () => {
  return (
    <>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <Swiper tag='section' wrapperTag='ul' id='main' navigation pagination>
            <SwiperSlide tag='li' key={1}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={img1}
                alt='img'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={2}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={img2}
                alt='img'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={3}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={img3}
                alt='img'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperBox;
