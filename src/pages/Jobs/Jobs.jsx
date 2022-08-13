import React from 'react';
import EmptyJob from '../../Components/EmptyJob/EmptyJob';
import Job from './Job';

const Jobs = ({ getJobs }) => {

  return (
    <div>
      {/* <h2 className='text-lg lg:text-2xl font-bold'>Jobs {getJobs.length}</h2> */}
      {/* display products  */}
      {
        // getJobs?.length ?
          <div className='display-products'>
            {getJobs?.map((job) => <Job
              key={job?.id}
              job={job}
            ></Job>)}
          </div>
          // :
          // <div >
          //   <EmptyJob />
          // </div>
      }
    </div>
  );
};

export default Jobs;