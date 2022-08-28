import React from 'react';
import openings from '../../Assets/images/applicants-tracking/tracking_icon.svg'
import candidate from '../../Assets/images/applicants-tracking/smart_candidate.svg'

const SmartCandidate = () => {
  return (
    <>
      <section className='manage_opening_jobs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 my-16'>
      {/* openings  */}
      <div className="opening_main">
        <h2 className='my-2 text-4xl font-bold'>Smart Candidate Sourcing </h2>
        <p className='my-3'>Create, manage, and publish job postings, from your applicant tracking system software.</p>
        <a className='text-blue-600 flex items-center' href="#_">Read more <span><i class="ri-arrow-right-line ml-2"></i></span> </a>
      </div>
      {/* opening positions  */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Brand your career site</span>
          <p className='my-3'>Stand out from the crowd by creating a beautiful, mobile-friendly career site that advertises your employer brand to applicants.</p>
      </div>
      {/* job descriptions */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Track email applicants</span>
          <p className='my-3'>Sync your career email inbox with your applicant tracking software and convert every email you receive into an application and its sender, an applicant.</p>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img flex justify-center items-center">
          <img className='w-60' src={candidate} alt="/opening positions images" />
        </div>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Recruit On social channels</span>
          <p className='my-3'>Spread news of your open positions far and wide by sharing it on your favorite social media channels like LinkedIn, Facebook, Twitter and Google+.</p>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Sourcing Through Job Board</span>
          <p className='my-3'>Take your jobs to a wider base of talent by posting them to your favourite free job boards from Freshteam in a single click - Adzuna, LinkedIn, ZipRecruiter and Glassdoor.</p>
      </div>
      {/* information */}
      <div className="">
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
    </>
  );
};

export default SmartCandidate;