import React from 'react';
import EmptyJob from '../../Components/EmptyJob/EmptyJob';
import Job from './Job';
import './Jobs.css';
import Pagination from './Pagination';

const Jobs = ({ getJobs, setGetJob }) => {
  
  const pageCount = Math.ceil(getJobs.length / 5)
  const page = 3

  return (
    <div className='pb-16'>
      <h2 className='text-lg lg:text-2xl font-bold'>Jobs {getJobs.length}</h2>
      {/* display products  */}
      {
        getJobs?.length ?
          <div>
            {getJobs.map((job) => <Job
              key={job?.id}
              job={job}
            ></Job>)}
          </div>
          :
          <div >
            <EmptyJob />
          </div>
      }

      {pageCount > 1 && (
        [...new Array(pageCount)].map((_, index) => {
          return <Pagination number={index + 1} key={index} active={page === index + 1} />
        })
      )}


    </div>
  );
};

export default Jobs;