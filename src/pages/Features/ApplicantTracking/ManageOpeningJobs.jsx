import React from 'react';
import openings from '../../Assets/images/applicants-tracking/tracking_icon.svg'
import openingBig from '../../Assets/images/applicants-tracking/tracking_big.svg'

const ManageOpeningJobs = () => {
  return (
    <section className='manage_opening_jobs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 text-black'>
      {/* openings  */}
      <div className="opening_main">
        <h2 className='my-2 text-4xl font-bold'>Manage all job openings</h2>
        <p className='my-3'>Create, manage, and publish job postings, from your applicant tracking system software.</p>
        <a className='text-blue-600 flex items-center' href="#_">Read more <span><i class="ri-arrow-right-line ml-2"></i></span> </a>
      </div>
      {/* opening positions  */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>List Open Positions</span>
          <p className='my-3'>Build job postings that describe careers in your company to prospective applicants in minutes. Use the ATS to Choose where and how you want to publish them.</p>
      </div>
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Use In-build Job Description</span>
          <p className='my-3'>Choose from Job Onboard applicant tracking software's 100+ in-built job description templates or create your own. Either way, you'll be at least 10 times faster!</p>
      </div>
    </section>
  );
};

export default ManageOpeningJobs;