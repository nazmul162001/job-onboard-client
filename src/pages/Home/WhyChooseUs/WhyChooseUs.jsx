import React from 'react';
import discover from '../../../assets/images/whyChooseUs/feature11.png'
import recruit from '../../../assets/images/whyChooseUs/feature22.png'
import prescreen from '../../../assets/images/whyChooseUs/feature33.png'
import hire from '../../../assets/images/whyChooseUs/feature44.png'

const WhyChooseUs = () => {
  return (
    <section className='why_choose_us my-12 px-5 container mx-auto '>
      {/* Feature title  */}
      <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold opacity-70 pt-8 lg:pt-0'>Why Choose Us</h2>
      <div className="line w-32 rounded-full opacity-70 h-1 mx-auto bg-black mt-2"></div>
      <p className='text-center text-xl py-8'>User satisfaction is our main priority. There are many Great <br></br> reasons to trust in  Job On Board</p>
      {/* Feature card */}
      <div className="feature_card pt-5">
        <div className="feature_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3">
          {/* Feature-discover */}
          <div className="feature_discover">
            <div className=" flex flex-col items-center justify-center discover_image space-y-2">
              <img className='rounded-2xl' src={discover} alt="" />
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Your Hiring Needs </p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Your Employee Values </p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Our Recruiting Process </p>
            </div>
          </div> {/** END */}

          {/* Feature-recruit */}
          <div className="feature_recruit">
            <div className="recruit_image flex flex-col items-center justify-center space-y-2">
              <img className='rounded-2xl' src={recruit} alt="" />
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Recruit Everyday of the Week</p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span> Extensive Referral Network</p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Use Of Modern Channel</p>
            </div>
          </div> {/** END */}

          {/* Feature-prescreen  */}
          <div className="feature_prescreen">
            <div className="prescreen_image flex flex-col items-center justify-center space-y-2">
              <img className='rounded-2xl' src={prescreen} alt="prescreen_image" />
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>100% Candidates Screened</p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Multiple Interview Types</p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Background & Drug Test</p>
            </div>
          </div> {/** END */}

          {/* Feature-hire  */}
          <div className="feature_hire">
            <div className="hire_image flex flex-col items-center justify-center space-y-2">
              <img className='rounded-2xl' src={hire} alt="hiringImage" />
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Comprehensive Benefits Package</p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Motivating Performance Bonus</p>
              <p className='flex justify-center items-center'> <span className='mr-2 inline-block'><input type="checkbox" checked="checked" class="checkbox checkbox-xs" /> </span>Constant Communication</p>
            </div>
          </div> {/** END */}
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;