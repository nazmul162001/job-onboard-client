import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {
  const [getJobs, setgetJobs] = useState([])
  useEffect(() => {
    axios.get('jobs.json')
    .then((response) => setgetJobs(response.data))
  }, [])

  return (
    <div className='my-28 container mx-auto px-12'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-sidebarWidth ">
        <div className=''>
          <h2 className='text-center text-2xl md:3xl lg:5xl font-bold pt-5'>Filter</h2>
        </div>
        <div>
          <h2  className='text-center text-2xl md:3xl lg:5xl font-bold pt-5'>Total Jobs  {getJobs.length}</h2>
          <div className="grid grid-cols-1  gap-8 my-12">
            {getJobs.map((job,index) => <Job
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