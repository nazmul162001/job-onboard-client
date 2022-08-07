import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
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
    <section className="brandingMainSection container mx-auto mt-5 md:mt-8 lg:mt-0">
      <div className="brandingContainer px-4">
        <Swiper
          loop={true}
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {sliderImg.map((singleImg) => (
            <SwiperSlide key={singleImg._id}>
              <img className="brandingImg" src={singleImg.picture} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Branding;
