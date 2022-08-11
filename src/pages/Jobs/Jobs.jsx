import React from 'react';

const Jobs = ({getJobs}) => {

  return (
    <div>
      <h2>Jobs {getJobs.length}</h2>
    </div>
  );
};

export default Jobs;