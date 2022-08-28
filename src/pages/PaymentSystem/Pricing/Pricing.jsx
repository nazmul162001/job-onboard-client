import React from 'react';

const Pricing = () => {
  return (
    <section className='pricing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {/* Free Pricing */}
      <div className="our_pricing p-3">
        <h2 className='text-3xl font-bold'>Free</h2>
        <div className="button flex justify-center items-center my-3">
      <button className='px-5 py-3 text-blue-500 rounded-full w-4/5 bg-[#E6ECFF]'> <span className='font-bold'>$0.00</span> <span className='text-black'>/Lifetime</span> </button>
      </div>
        <div className="pricing_offer">
        <li className='my-2 text-sky-500'> <span className='text-black'>1 Company</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>2 Active Jobs</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>25 Active Candidates</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>No Team Account</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500'>In app messaging</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Quiz</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Detailed Analyties</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Smart Workflow</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Remote Interview</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Custom domain</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Easy.Jobs Ai(Beta)</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Screening Questions</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>24/7 Support</span> </li>
        </div>
        <button class="btn bg-[#60CE83] border-none w-4/5">Sign Up</button>
      </div>
      {/* StartUp Lifetime  */}
      <div className="our_pricing p-3">
        <h2 className='text-3xl font-bold'>Startup Lifetime</h2>
      <div className="button flex justify-center items-center my-3">
      <button className='px-5 py-3 text-blue-500 rounded-full w-4/5 bg-[#E6ECFF]'><span className='text-gray-500 line-through'>$499.99</span> <span className='font-bold'>$149.99</span> <span className='text-black'>/Lifetime</span> </button>
      </div>
        <div className="pricing_offer">
        <li className='my-2 text-sky-500'> <span className='text-black'>1 Company</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>6 Active Jobs</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>100 Active Candidates</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>3 Team Account</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>In app messaging</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Quiz</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Detailed Analyties</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Smart Workflow</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Remote Interview</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Custom domain</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Easy.Jobs Ai(Beta)</span> </li>
        <li className='my-2 text-gray-500'> <span className='text-gray-500 line-through'>Screening Questions</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>24/7 Support</span> </li>
        </div>
        <button class="btn bg-[#597DFC] border-none w-4/5">Sign Up</button>
      </div>    
      {/* Business Lifetime  */}
      <div className="our_pricing p-3">
        <h2 className='text-3xl font-bold'>Business Lifetime</h2>
        <div className="button flex justify-center items-center my-3">
        <button className='px-5 py-3 text-blue-500 rounded-full w-4/5 bg-[#E6ECFF]'><span className='text-gray-500 line-through'>$999.99</span> <span className='font-bold'>$399.99</span> <span className='text-black'>/Lifetime</span> </button>
      </div>
        <div className="pricing_offer">
        <li className='my-2 text-sky-500'> <span className='text-black'>1 Company</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Unlimited Active Jobs</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>1000 Active Candidates</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>10 Team Account</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>In app messaging</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Quiz</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Detailed Analyties</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Smart Workflow</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Remote Interview</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Custom domain</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Easy.Jobs Ai(Beta)</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>Screening Questions</span> </li>
        <li className='my-2 text-sky-500'> <span className='text-black'>24/7 Support</span> </li>
        </div>
        <button class="btn bg-[#597DFC] border-none w-4/5">Sign Up</button>
      </div>
    </section>
  );
};

export default Pricing;