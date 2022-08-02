import React from 'react';
import { useParams } from 'react-router-dom';
import useJob from '../../../hooks/useJob';

const JobDescription = () => {
  const { jobId } = useParams() 
  const [job, loading] = useJob(jobId);

  // console.log(job)

  return (
    <div>
      <h2>Job description  {job?.jobName} </h2> 
    </div>
  );
};

export default JobDescription;