import React from 'react';
import openings from '../../Assets/images/applicants-tracking/tracking_icon.svg'
import resumeTrack from '../../Assets/images/applicants-tracking/resume_tracking.svg'

const ResumeScreening = () => {
  return (
    <section className='manage_opening_jobs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 my-16'>
      {/* openings  */}
      <div className="opening_main">
        <h2 className='my-2 text-4xl font-bold'>Resume Screening and Talent Pool</h2>
        <p className='my-3'>Optimize your resume screening process so that you can sort through applications in a fast, efficient manner.</p>
        <a className='text-blue-600 flex items-center' href="#_">Read more <span><i class="ri-arrow-right-line ml-2"></i></span> </a>
      </div>
      {/* opening positions  */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Parse Resume</span>
          <p className='my-3'>Every resume you upload to your applicant tracking system software is automatically parsed and its contents populated in the candidate profile.</p>
      </div>
      {/* job descriptions */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Candidate 360</span>
          <p className='my-3'>Everything you need to know about a candidate - resume, emails, interaction history, interview scores, feedback and notes - in one place.</p>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img flex justify-center items-center">
          <img className='w-60' src={resumeTrack} alt="/opening positions images" />
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
          <span className='font-bold text-sm inline-block my-2'>Manage Tag</span>
          <p className='my-3'>Tag candidate profiles with keywords so that you can pull up similar candidates in a jiffy. These tags can be used to maintain and manage candidate lists.</p>
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
          <span className='font-bold text-sm inline-block my-2'>Archive To Talent Pool</span>
          <p className='my-3'>Found a promising not-right-now candidate? Or a right-fit-wrong-job candidate? Archive them so their profiles can be surfaced at the right time.</p>
      </div>
      {/* information */}
      <div className="opening_positions my-5">
        {/* Empty area  */}
      </div>
    </section>
  );
};

export default ResumeScreening;