import React from 'react';
import openings from '../../Assets/images/applicants-tracking/tracking_icon.svg'
import engaged from '../../Assets/images/applicants-tracking/engaged.svg'

const CandidateEngaged = () => {
  return (
    <section className='manage_opening_jobs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 text-black'>
      {/* openings  */}
      <div className="opening_main">
        <h2 className='my-2 text-4xl font-bold'>Candidate engagement software</h2>
        <p className='my-3'>Build relationships with candidates even as they progress through the hiring pipeline.</p>
        <a className='text-blue-600 flex items-center' href="#_">Read more <span><i class="ri-arrow-right-line ml-2"></i></span> </a>
      </div>
      {/* opening positions  */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>ntegrated Email Conversations</span>
          <p className='my-3'>Sync your email with Freshteam to correspond with candidates, right from your ATS. You can view all candidate-hiring team correspondence from a candidate's profile.</p>
      </div>
      {/* job descriptions */}
      <div className="opening_positions">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Notify Candidates</span>
          <p className='my-3'>Keep all the hiring process stakeholders in the loop by automatically sending out notifications as soon as specific events occur.</p>
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
          <span className='font-bold text-sm inline-block my-2'>Use Canned Response</span>
          <p className='my-3'>Save frequently used responses as canned responses so you can insert them into emails and spend that time more fruitfully.</p>
      </div>
      {/* tracing image */}
      <div className="opening_positions my-5">
        <div className="img w-12 h-12">
          <img src={openings} alt="/opening positions images" />
        </div>
          <span className='font-bold text-sm inline-block my-2'>Decide when Email Got Out</span>
          <p className='my-3'>Want to send out a particular email but just not right away? Schedule emails to go out, whenever you think it’s most appropriate.</p>
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
          <span className='font-bold text-sm inline-block my-2'>Performs Action in Bulks</span>
          <p className='my-3'>Send emails to, add tags for, reject, delete, share for feedback, and archive to the talent pool, multiple candidates with a single click.</p>
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