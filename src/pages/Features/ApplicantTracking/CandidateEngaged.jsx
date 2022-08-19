import React from 'react';
import openings from '../../Assets/images/applicants-tracking/tracking_icon.svg'
import engaged from '../../Assets/images/applicants-tracking/engaged.svg'

const CandidateEngaged = () => {
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
      {/* job descriptions */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Use In-build Job Description</span>
          <p className='my-3'>Choose from Job Onboard applicant tracking software's 100+ in-built job description templates or create your own. Either way, you'll be at least 10 times faster!</p>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img flex justify-center items-center">
          <img className='w-60' src={engaged} alt="/opening positions images" />
        </div>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Pick Where You Source</span>
          <p className='my-3'>Externally, on job boards or your career site, internally, from your career portal, or publish jobs privately and keep them visible just to you!</p>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Set Up A Hiring Team</span>
          <p className='my-3'>Every job posting can be mapped to the hiring team that is working on it. The hiring team is the hiring manager and associated panel members.</p>
      </div>
      {/* information */}
      <div className="opening_positions my-5">
          {/* Empty area  */}
      </div>
      {/* information */}
      <div className="opening_positions my-5">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Gathers Information Thant's Matters</span>
          <p className='my-3'>Make the screening process easier and more efficient, with a custom application form. This way, it’ll be easier to separate the truly qualified from the aspirational.</p>
      </div>
      {/* information */}
      <div className="opening_positions my-5">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Configure your hiring process</span>
          <p className='my-3'>Create custom workflow stages for every job posting in your applicant tracking software and accurately depict how candidates move across stages.</p>
      </div>
    </section>
  );
};

export default CandidateEngaged;