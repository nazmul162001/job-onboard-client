import React, { useState } from 'react';
import './WhyJobOnboard.css'

const WhyJobOnboard = () => {
  const [image, setImage] = useState("https://i.ibb.co/wJYHwyH/1.png");
  const onBoardData = [
    { name: 'Easy User Interface', url: 'https://i.ibb.co/S6cndgG/2.png' , des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.' },
    { name: 'New Hire Onboarding', url: 'https://i.ibb.co/9wj2ndf/3.png', des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.'  },
    { name: 'Easy Hiring Process', url: 'https://i.ibb.co/wJYHwyH/1.png', des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.' },
    { name: 'Understand User Need', url: 'https://i.ibb.co/bNW6wgR/4.png', des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.' },
    { name: 'Employee Tracking', url: 'https://i.ibb.co/SdZcS65/5.png', des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.' },
    { name: 'Employee Database', url: 'https://i.ibb.co/Z14G3sp/6.png', des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.' },
  ]

  return (
    <div className="py-8 my-20 bg-violet-100 px-12 lg:px-0 rounded-t-[40px] container mx-auto">
      <h2 className='text-center text-2xl md:text-4xl font-bold pb-5 text-black'>Why Job Onboard ?</h2>
      <div className="hidden lg:grid lg:grid-cols-3 lg:pl-20">
        <div className='py-5 col-span-2'>
          <img className="w-full rounded-lg " src={image} alt="why-jobOnboard-img" />
        </div>
        <div className=" space-y-4 flex flex-col justify-center ">
          {onBoardData.map(button => <button  onClick={() => setImage(button.url)} className={button.url === image && ' active'}>
            {button.name}
          </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:hidden ">
        {onBoardData.map(singleData => 
          <div className='text-center space-y-2 '>
            <h3 className='text-lg md:text-2xl font-bold '>{singleData.name}</h3>
            <p>{singleData.des}</p>
            <img className="w-full rounded-lg " src={singleData.url} alt="why-jobOnboard-img" />
          </div>)}
      </div>
    </div>
  );
};

export default WhyJobOnboard;