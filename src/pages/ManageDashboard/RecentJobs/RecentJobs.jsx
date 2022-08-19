import React from 'react';

const RecentJobs = () => {
  return (
    <div>
      <h3 className='font-bold my-5'>Recent Jobs</h3>
      <div className="recent-application p-4 bg-orange-100 bg-opacity-40 rounded ">
        <p className='text-red-500'>No jobs found</p>
      </div>
    </div>
  );
};

export default RecentJobs;