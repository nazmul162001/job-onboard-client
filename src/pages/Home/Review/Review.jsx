import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './Review.css'
import { FreeMode, Pagination } from 'swiper';
import ReviewInfo from './ReviewInfo';

const Review = () => {

  const reviews = [
    {
        "_id": 1,
        "name": "Boundless Brilliance",
        "review": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://imagizer.imageshack.com/img923/8565/KOTODH.jpg",
        "location": "Ft Lauderdale, FL, United State"
    },
    {
        "_id": 2,
        "name": "Volunteer Assistance to the Vulnerable",
        "review": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://imagizer.imageshack.com/img923/8565/KOTODH.jpg",
        "location": "Van Nuys, CA, United States"
    },
    {
        "_id": 3,
        "name": "Dance for all Bodies",
        "review": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://imagizer.imageshack.com/img923/8565/KOTODH.jpg",
        "location": "New York, NY, United States"
    }
  ]
  
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="user_reviews">
          {
            reviews.map((review)=> (
              <SwiperSlide>
                <ReviewInfo review = {review} />
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  );
};

export default Review;