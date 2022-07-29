import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "./Features.css";

// import required modules
import { Pagination, Navigation } from "swiper";



export default function Features() {
  return (

    <div class="hero min-h-full bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper rounded-xl">
          <SwiperSlide><img className="rounded-xl" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></SwiperSlide>
          <SwiperSlide><img className="rounded-xl" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></SwiperSlide>
          <SwiperSlide><img className="rounded-xl" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></SwiperSlide>
        </Swiper>
        <div>
          <h1 class="text-5xl font-bold">Showcase, Network, and Build New Skills</h1>
          <ul class="steps steps-vertical">
            <li class="step step-primary">Register</li>
            <li class="step step-primary">Choose plan</li>
            <li class="step step-primary">Purchase</li>
            <li class="step step-primary">Receive Product</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// <div className='py-24 md:py-24 lg:py-20'>
//   <h1 className='text-center text-5xl font-bold opacity-70'> What's Inside?</h1>
//   <div className="line w-32 rounded-full opacity-70 h-1 mx-auto bg-black mt-2"></div>
//   <div className='grid grid-cols-on md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-4 container mx-auto px-4 lg:px-8 pt-12'>

//     <div class="card  bg-base-100 shadow-xl flex justify-center">
//       <div class="card-body">
//         <h2 class="text-start text-lg font-bold"> Smart Log In </h2>
//       </div>
//       <figure><img className='h-48' src="https://i.ibb.co/8x8L5Sy/Screenshot-2022-07-21-172536.png" alt="Shoes" /></figure>
//     </div>
//     <div class="card  bg-base-100 shadow-xl flex justify-center">
//       <div class="card-body">
//         <h2 class="text-start text-lg font-bold"> Recruiter Dashboard </h2>
//       </div>
//       <figure><img className='h-48' src="https://i.ibb.co/hYM5wb5/Screenshot-2022-07-21-173126.png" alt="Shoes" /></figure>
//     </div>
//     <div class="card bg-base-100 shadow-xl flex justify-center">
//       <div class="card-body">
//         <h2 class="text-start text-lg font-bold"> Applicant's UI </h2>
//       </div>
//       <figure><img className='h-48' src="https://i.ibb.co/Jjvszmt/Screenshot-2022-07-21-173712.png" alt="Shoes" /></figure>
//     </div>

//   </div>

// </div>



//   );
// };

// export default Features;

// https://i.ibb.co/8x8L5Sy/Screenshot-2022-07-21-172536.png
// https://i.ibb.co/dQrjWRz/Screenshot-2022-07-21-173353.png
// https://i.ibb.co/hYM5wb5/Screenshot-2022-07-21-173126.png
// https://i.ibb.co/Jjvszmt/Screenshot-2022-07-21-173712.png