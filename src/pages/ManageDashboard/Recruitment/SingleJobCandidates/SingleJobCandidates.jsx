import React from 'react';
import { useParams } from 'react-router-dom';
import useAppliedCandidates from '../../../../Hooks/useAppliedCandidates';
import useJob from '../../../../Hooks/useJob';

const SingleJobCandidates = () => {
  const { jobId } = useParams();
  const [job] = useJob(jobId);

  const { data, isLoading, refetch } = useAppliedCandidates(job)

  const countData = data?.data;
  console.log(countData)

  return (
    <div>
      <h1>Hello {jobId}</h1>
      <h1>{job?.jobTitle} {countData?.length}</h1>
    </div>
  );
};

export default SingleJobCandidates;