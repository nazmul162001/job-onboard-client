import React, { useContext, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { InitializeContext } from "../../../App";
import "./Branding.css";
const Branding = () => {
  const { theme } = useContext(InitializeContext);
  const [sliderImg, setSliderImg] = useState([]);
  useEffect(() => {
    fetch("brandingSection.json")
      .then((res) => res.json())
      .then((data) => setSliderImg(data));
  }, []);
  return (
    <section className="brandingMainSection container mx-auto z-0 relative">
      <div className="brandingContainer px-4 mb-20">
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
            <SwiperSlide
              key={singleImg._id}
              className={theme ? "dark" : "noDark"}
            >
              <img src={singleImg.picture} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Branding;
