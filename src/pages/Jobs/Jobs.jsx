import React from 'react';
import EmptyJob from '../../Components/EmptyJob/EmptyJob';
import Job from './Job';
import Pagination from './Pagination/Pagination';

const Jobs = ({ getJobs, lastPage, page, pageHandle }) => {
  // console.log(getJobs)
  // const reverseJob = [...getJobs].reverse()
  // console.log(reverseJob)


  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl md;text2xl text-center font-mono font-bold'>Most Popular Job</h2>

        <div>
          <Pagination lastPage={lastPage} page={eval(page)} pageHandle={pageHandle} />
        </div>
      </div>

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