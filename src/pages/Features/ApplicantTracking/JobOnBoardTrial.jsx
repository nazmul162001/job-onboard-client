import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobOnBoardTrial = () => {
  const navigate = useNavigate()
  return (
    <section className='applicants_tracking bg-base-100'>
      <div className="tracking text-center my-20 mx-5">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold my-3">Want to try Job Onboard Applicant Tracking Software for free? </h1>
        <h3 className="text-sm md:text-xl my-3">Well, sign up right away for a 21-day free trial, no credit card required.</h3>
        <button className='my-4 px-3 py-2 bg-indigo-600 text-white font-bold rounded' onClick={() => navigate(`/signUp/hr`)}>Sign Up Now</button>
      </div>
    </section>
  );
};

export default JobOnBoardTrial;