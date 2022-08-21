import React from 'react';

const RecentApplicants = () => {
  return (
    <div>
      <h3 className='font-bold my-3'>Recent Application</h3>
      <div className="recent-application p-4 bg-orange-100 bg-opacity-40 rounded ">
        <p className='text-red-500'>No applicants found</p>
      </div>
    </div>
  );
};

export default RecentApplicants;