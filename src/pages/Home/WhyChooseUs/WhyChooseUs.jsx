import React from 'react';
import discover from '../../../assets/images/whyChooseUs/feature1.png'
import recruit from '../../../assets/images/whyChooseUs/feature2.png'
import prescreen from '../../../assets/images/whyChooseUs/feature3.png'
import hire from '../../../assets/images/whyChooseUs/feature4.png'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className='why_choose_us my-24'>
      <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold opacity-70'>Why Choose Us</h2>
      <div className="line w-32 rounded-full opacity-70 h-1 mx-auto bg-black mt-2"></div>
      <p className='text-center text-gray-500 my-5'>User satisfaction is our main priority. There are many Great reasons to trust in <br></br> Job On Board</p>
    <div className="feature_card">
      <div className="feature_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3">
        <div className="feature_discover">
          <div className=" flex items-center justify-center discover_image">
            <img src={discover} alt="" />
          </div>
        </div>
        <div className="feature_recruit">
        <div className="recruit_image flex items-center justify-center">
            <img src={recruit} alt="" />
          </div>
        </div>
        <div className="feature_prescreen">
        <div className="prescreen_image flex items-center justify-center">
            <img src={prescreen} alt="" />
          </div>
        </div>
        <div className="feature_hire">
        <div className="hire_image flex items-center justify-center">
            <img src={hire} alt="" />
          </div>
        </div>
      </div>
    </div>

    </section>
  );
};

export default WhyChooseUs;