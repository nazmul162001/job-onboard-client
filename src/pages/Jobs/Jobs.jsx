import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {
  const [getJobs, setgetJobs] = useState([])
  useEffect(() => {
    axios.get('jobs.json')
      .then((response) => setgetJobs(response.data.reverse()))
  }, [])

  return (
    <div className='my-28 container mx-auto px-5 lg:px-12'>
      <div className="grid grid-cols-1 md:grid-cols-sidebarMdWidth gap-5 lg:grid-cols-sidebarWidth ">
        {/* Filter section  */}
        <div className='card pt-10'>
          <div className='md:fixed rounded-lg border min-h-[30vh] md:min-h-[75vh] lg:min-h-[75vh] lg:px-20 pt-12 space-y-3'>
            <h2 className='text-center text-2xl md:3xl lg:5xl font-bold pt-5'>Filter Your Job</h2>
            <h3 className='text-center'>Search by name</h3>
            <input className='border border-black flex mx-auto rounded' type="search" value="" />
          </div>
        </div>

        {/* Jobs section  */}
        <div>
          <h2 className='text-center text-2xl md:3xl lg:5xl font-bold pt-5'>Total Jobs  {getJobs.length}</h2>
          <div className="grid grid-cols-1  gap-8 my-12">
            {getJobs.map((job, index) => <Job
              key={index}
              job={job}
            ></Job>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;