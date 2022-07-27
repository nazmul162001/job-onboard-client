import React, { useState } from 'react';
import  './WhyJobOnboard.css'

const WhyJobOnboard = () => {
  const [image, setImage] = useState("https://i.ibb.co/wJYHwyH/1.png");
  function showImage(name) {
    if (name === "userInterface") {
      setImage("https://i.ibb.co/S6cndgG/2.png");
    }
    else if (name === "onBoarding") {
      setImage("https://i.ibb.co/9wj2ndf/3.png");
    }
    else if (name === "hiring") {
      setImage("https://i.ibb.co/wJYHwyH/1.png");
    }
    else if (name === "userNeed") {
      setImage("https://i.ibb.co/S6cndgG/2.png");
    }
    else if (name === "tracking") {
      setImage("https://i.ibb.co/9wj2ndf/3.png");
    }
    else if (name === "employeeDB") {
      setImage("https://i.ibb.co/wJYHwyH/1.png");
    }
  }
  return (
    <div className="py-8 bg-violet-100 px-16">
      <h2 className='text-center text-3xl md:text-4xl font-bold pb-5'>Why Job Onboard ?</h2>
      <div className="flex ">
        <div className="flex basis-1/4 flex-col justify-center items-start space-y-4 ">
          <button
            onClick={() => showImage("userInterface")}
            type="button"
            id="easyUi"
          >
            Easy User Interface
          </button>
          <button
            onClick={() => showImage("onBoarding")}
            type="button"
            id="hireOnboarding"
          >
            New Hire Onboarding
          </button>
          <button
            onClick={() => showImage("hiring")}
            type="button"
            id="hiringProcess"
          >
            Easy Hiring Process
          </button>
          <button
            onClick={() => showImage("userNeed")}
            type="button"
            id="usersNeed"
          >
            Understand User Need
          </button>
          <button
            onClick={() => showImage("tracking")}
            type="button"
            id="trackingTimeOff"
          >
            Employee time off tracking
          </button>
          <button
            onClick={() => showImage("employeeDB")}
            type="button"
            id="dashboardId"
          >
            Employee database
          </button>
        </div>
        <div className='p-5 flex justify-center items-center basis-3/4'>
          <img className="w-full rounded-lg " src={image} alt="why-jobOnboard-img" />
        </div>
      </div>
    </div>
  );
};

export default WhyJobOnboard;