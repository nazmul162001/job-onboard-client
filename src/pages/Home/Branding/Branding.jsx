import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Branding.css";
const Branding = () => {
  const [sliderImg, setSliderImg] = useState([]);
  useEffect(() => {
    fetch("brandingSection.json")
      .then((res) => res.json())
      .then((data) => setSliderImg(data));
  }, []);
  return (
    <>
      <div className="titleContainer">
        <h1 className="bSectionTitle">Branding Section</h1>
        <span></span>
      </div>
      <div className="brandingContainer">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderImg.map((singleImg) => (
            <SwiperSlide className="mb-8 py-8" key={singleImg._id}>
              <img className="brandingImg" src={singleImg.picture} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Branding;
