import React from 'react';
import  './WhyJobOnboard.css'

const WhyJobOnboard = () => {
  return (
    <div className="py-8 bg-violet-100 px-16">
      <h2 className='text-center text-3xl md:text-4xl font-bold'>Why Job Onboard</h2>
      <div className="flex">
        <div className="flex basis-1/4 flex-col justify-center items-start space-y-4 ">
          <button
            type="button"
          >
            Easy User Interface
          </button>
          <button
            type="button"
          >
            New Hire Onboarding
          </button>
          <button
            type="button"
          >
            Easy Hiring Process
          </button>
          <button
            type="button"
          >
            Understand User Need
          </button>
          <button
            type="button"
          >
            Employee time off tracking
          </button>
          <button
            type="button"
          >
            Employee database
          </button>
        </div>
        <div className='p-5 flex justify-center items-center basis-3/4'>
          <img className="w-full rounded-lg h-4/5" src={'https://i.ibb.co/wJYHwyH/1.png'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyJobOnboard;