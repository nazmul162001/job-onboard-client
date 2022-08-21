import React from 'react';
import CandidateEngaged from './CandidateEngaged';
import JobOnBoardTrial from './JobOnBoardTrial';
import ManageOpeningJobs from './ManageOpeningJobs';
import ResumeScreening from './ResumeScreening';
import SmartCandidate from './SmartCandidate';
import Footer from '../../../Shared/Footer/Footer'
import MakeOffers from './MakeOffers';
import './ApplicantsTracking.css'

const ApplicantTracking = () => {
  return (
    <>
    <section className='applicants_tracking bg-[#FFFFFF]'>
      <div className="tracking text-center my-20 mx-5 md:mx-52 text-black">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold my-3">Modern Applicants Tracking Software</h1>
        <h3 className="text-sm md:text-xl my-3">Start with a 21-days free trial of Job OnBoard applicant tracking software, pick any plan. Decide later if you want to upgrade or continue with the free version.</h3>
        <button className='my-4 px-3 py-2 bg-indigo-600 text-white font-bold rounded'>GET YOUR FREE ATS ACCOUNT</button>
      </div>
    </section>
    <ManageOpeningJobs />
    <SmartCandidate />
    <ResumeScreening />
    <JobOnBoardTrial />
    <CandidateEngaged />
    <MakeOffers />
    <Footer />
    </>
  );
};

export default ApplicantTracking;