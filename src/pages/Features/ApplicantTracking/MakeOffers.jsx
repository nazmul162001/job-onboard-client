import React from 'react';
import openings from '../../Assets/images/applicants-tracking/tracking_icon.svg'
import offers from '../../Assets/images/applicants-tracking/makeOffer.svg'

const MakeOffers = () => {
  return (
    <section className='manage_opening_jobs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 text-black'>
    {/* openings  */}
    <div className="opening_main">
      <h2 className='my-2 text-4xl font-bold'>Access And Make Offer</h2>
      <p className='my-3'>Schedule interviews, collect feedback from the hiring team, and make offers to promising candidates.</p>
      <a className='text-blue-600 flex items-center' href="#_">Read more <span><i class="ri-arrow-right-line ml-2"></i></span> </a>
    </div>
    {/* opening positions  */}
    <div className="opening_positions">
      <div className="img w-12 h-12">
        <img src={openings} alt="/opening positions images" />
      </div>
        <span className='font-bold text-sm inline-block my-2'>Conduct Interviewers</span>
        <p className='my-3'>Found an interesting application? Schedule an interview with a panel member and notify the candidate, in the same click.</p>
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
        <img className='w-60' src={offers} alt="/opening positions images" />
      </div>
    </div>
    {/* tracing image */}
    <div className="opening_positions my-5">
      <div className="img w-12 h-12">
        <img src={openings} alt="/opening positions images" />
      </div>
        <span className='font-bold text-sm inline-block my-2'>Check Availability</span>
        <p className='my-3'>View interviewer availability while scheduling interviews with Google Calendar and Office 365 Calendar integration and pick a time that works for everyone.</p>
    </div>
    {/* tracing image */}
    <div className="opening_positions my-5">
      <div className="img w-12 h-12">
        <img src={openings} alt="/opening positions images" />
      </div>
        <span className='font-bold text-sm inline-block my-2'>Collect Structured Feedback</span>
        <p className='my-3'>Don’t make decisions based on anyone’s gut feelings; use interview scorecards to rate candidates against established criteria.</p>
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
        <span className='font-bold text-sm inline-block my-2'>Make Offers</span>
        <p className='my-3'>Make and manage offers, from your recruiting software. You can configure offer fields, generate offer letters and even record candidate decisions.</p>
    </div>
    {/* information */}
    <div className="opening_positions my-5">
      <div className="img w-12 h-12">
        <img src={openings} alt="/opening positions images" />
      </div>
        <span className='font-bold text-sm inline-block my-2'>Configure Offers Field</span>
        <p className='my-3'>Choose what kind of offer information you’d like to keep on hand, through custom offer fields.</p>
    </div>
  </section>
  );
};

export default MakeOffers;