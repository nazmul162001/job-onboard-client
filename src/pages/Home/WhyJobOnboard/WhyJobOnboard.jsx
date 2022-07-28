import React, { useState } from 'react';
import './WhyJobOnboard.css'

const WhyJobOnboard = () => {
  const [image, setImage] = useState("https://i.ibb.co/wJYHwyH/1.png");
  const buttonUrl = [
    { name: 'Easy User Interface', url: 'https://i.ibb.co/S6cndgG/2.png' },
    { name: 'New Hire Onboarding', url: 'https://i.ibb.co/9wj2ndf/3.png' },
    { name: 'Easy Hiring Process', url: 'https://i.ibb.co/wJYHwyH/1.png' },
    { name: 'Understand User Need', url: 'https://i.ibb.co/bNW6wgR/4.png' },
    { name: 'Employee time off tracking', url: 'https://i.ibb.co/SdZcS65/5.png' },
    { name: 'Employee database', url: 'https://i.ibb.co/Z14G3sp/6.png' },
  ]

  return (
    <div className="py-8 bg-violet-100 px-16 rounded-t-[40px] container mx-auto">
      <h2 className='text-center text-3xl md:text-4xl font-bold pb-5'>Why Job Onboard ?</h2>
      <div className="hidden lg:grid lg:grid-cols-3 ">
        <div className='py-5 col-span-2'>
          <img className="w-full rounded-lg " src={image} alt="why-jobOnboard-img" />
        </div>
        <div className=" space-y-4 flex flex-col justify-center ">
          {buttonUrl.map(button => <button  onClick={() => setImage(button.url)} className={button.url === image && ' active'}>
            {button.name}
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default WhyJobOnboard;