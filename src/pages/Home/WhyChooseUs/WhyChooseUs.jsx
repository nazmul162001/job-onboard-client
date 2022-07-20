import React from 'react';
import discover from '../../../assets/images/whyChooseUs/feature1.png'
import recruit from '../../../assets/images/whyChooseUs/feature2.png'
import prescreen from '../../../assets/images/whyChooseUs/feature3.png'
import hire from '../../../assets/images/whyChooseUs/feature4.png'
import arrow from '../../../assets/images/whyChooseUs/arrow.png'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className='why_choose_us my-24 px-5'>
      {/* Feature title  */}
      <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold opacity-70'>Why Choose Us</h2>
      <div className="line w-32 rounded-full opacity-70 h-1 mx-auto bg-black mt-2"></div>
      <p className='text-center text-gray-500 my-5'>User satisfaction is our main priority. There are many Great reasons to trust in <br></br> Job On Board</p>
    {/* Feature card */}
    <div className="feature_card">
      <div className="feature_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3">
        {/* Feature-discover */}
        <div className="feature_discover">
          <div className=" flex flex-col items-center justify-center discover_image">
            <img src={discover} alt="" />
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Your Hiring Needs </p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Your Employee Values </p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Our Recruiting Process </p>
          </div>
        </div> {/** END */}

        {/* Feature-recruit */}
        <div className="feature_recruit">
        <div className="recruit_image flex flex-col items-center justify-center">
            <img src={recruit} alt="" />
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Recruit Everyday of the Week</p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Extensive Referral Network</p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Use Of Modern Channel</p>
          </div>
        </div> {/** END */}

        {/* Feature-prescreen  */}
        <div className="feature_prescreen">
        <div className="prescreen_image flex flex-col items-center justify-center">
            <img src={prescreen} alt="" />
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>100% Candidates Screened</p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Multiple Interview Types</p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Background & Drug Test</p>
          </div>
        </div> {/** END */}

        {/* Feature-hire  */}
        <div className="feature_hire">
        <div className="hire_image flex flex-col items-center justify-center">
            <img src={hire} alt="" />
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Comprehensive Benefits Package</p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Motivating Performance Bonus</p>
            <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Constant Support & Communication</p>
          </div>
        </div> {/** END */}
      </div>
      <div className="feature_value">
      <div className="value_added flex justify-center items-center mx-auto my-5">
        <div className="arrow-left">
          <img src={arrow} alt="" />
        </div>
        <div className="centered text-2xl md:text-4xl font-bold opacity-70">VALUE-ADDED</div>
        <div className="arrow-right">
          <img className='rotate-180' src={arrow} alt="" />
        </div>
      </div>
      <div className="value_main flex justify-center flex-wrap">
      <p className='flex justify-center items-center mr-2 mb-1'> <span className=' mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-primary" /> </span>Dedicated Account Manage</p>

      <p className='flex justify-center items-center mr-2 mb-1'> <span className=' mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-primary" /> </span>Safety Committee Board</p>

      <p className='flex justify-center items-center mr-2 mb-1'> <span className=' mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-primary" /> </span>Certified WBE</p>

      <p className='flex justify-center items-center mr-2 mb-1'> <span className=' mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-primary" /> </span>Certified Small Business</p>
      </div>
      </div>
    </div>

    </section>
  );
};

export default WhyChooseUs;