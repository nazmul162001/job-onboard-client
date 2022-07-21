import React from 'react';

const Features = () => {
  return (

    <div>
      <h1 className='text-center text-5xl font-bold opacity-70'> What's Inside?</h1>
      <div className="line w-32 rounded-full opacity-70 h-1 mx-auto bg-black mt-2"></div>
      <div className='grid grid-cols-on md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto lg:px-8 pt-12 lg:pt-0'>

        <div class="card  bg-base-100 shadow-xl flex justify-center">
          <div class="card-body">
            <h2 class="text-start text-lg font-bold"> Smart Log In </h2>
          </div>
          <figure><img className='h-48' src="https://i.ibb.co/8x8L5Sy/Screenshot-2022-07-21-172536.png" alt="Shoes" /></figure>
        </div>
        <div class="card  bg-base-100 shadow-xl flex justify-center">
          <div class="card-body">
            <h2 class="text-start text-lg font-bold"> Recruiter Dashboard </h2>
          </div>
          <figure><img className='h-48' src="https://i.ibb.co/hYM5wb5/Screenshot-2022-07-21-173126.png" alt="Shoes" /></figure>
        </div>
        <div class="card bg-base-100 shadow-xl flex justify-center">
          <div class="card-body">
            <h2 class="text-start text-lg font-bold"> Applicant's UI </h2>
          </div>
          <figure><img className='h-48' src="https://i.ibb.co/Jjvszmt/Screenshot-2022-07-21-173712.png" alt="Shoes" /></figure>
        </div>

      </div>

    </div>



  );
};

export default Features;

// https://i.ibb.co/8x8L5Sy/Screenshot-2022-07-21-172536.png
// https://i.ibb.co/dQrjWRz/Screenshot-2022-07-21-173353.png
// https://i.ibb.co/hYM5wb5/Screenshot-2022-07-21-173126.png
// https://i.ibb.co/Jjvszmt/Screenshot-2022-07-21-173712.png