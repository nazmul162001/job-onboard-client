import React from 'react';

const Features = () => {
  return (

    <div className='grid grid-cols-on md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto lg:px-8 pt-12 lg:pt-0'>

      <div class="card bg-base-100 shadow-xl image-full">
        <figure> <img src="https://i.ibb.co/8x8L5Sy/Screenshot-2022-07-21-172536.png" alt="Shoes" /> </figure>
        <div class="card-body">
          <h2 class="card-title"> ScreenShot-1 : Simple Log In </h2>
          <p>Any user with a google account can create account or, log in. </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/dQrjWRz/Screenshot-2022-07-21-173353.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title"> ScreenShot-2 : Recruiter's Dashboard </h2>
          <p> Recruiter will post job circular and receive notifications of job apply done by applicants  </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure> <img src="https://i.ibb.co/hYM5wb5/Screenshot-2022-07-21-173126.png" alt="Shoes" /> </figure>
        <div class="card-body">
          <h2 class="card-title">ScreenShot-3 : More about the Dashboard !</h2>
          <p> Recruiter can also monitor all of their posts and can track , regulate all of the applicants whom will apply their circular using our stored data of the applicants.</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/Jjvszmt/Screenshot-2022-07-21-173712.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">ScreenShot-4 : Explore Section </h2>
          <p> Applicant's will have a special page for seeing all job posts. </p>
        </div>
      </div>


    </div>


  );
};

export default Features;