import React from 'react';
import EmptyJob from '../../Components/EmptyJob/EmptyJob';
import Job from './Job';
import Pagination from './Pagination/Pagination';

const Jobs = ({ getJobs ,lastPage,page,pageHandle}) => {

  return (
    <div>
      {getJobs?.length ?
        <h2 className='text-lg lg:text-2xl font-bold'>Jobs {getJobs?.length}</h2>
        :
        <></>}

      {/* Display Products  */}
      {
        getJobs?.length ?
          <>
            <div>
              {getJobs?.map((job) => <Job
                key={job?.id}
                job={job}
              ></Job>)}
            </div>
            <div>
              <Pagination lastPage={lastPage} page={eval(page)} pageHandle={pageHandle} />
            </div>
          </>
          :
          <div >
            <EmptyJob />
          </div>
      }
    </div>
  );
};

export default Jobs;