import React from "react";
import { useParams } from "react-router-dom";
import useJob from "../../../Hooks/useJob";

const RecruitmentJobDetails = () => {
  const { jobId } = useParams();
  const [job] = useJob(jobId);
  return (
    <div>
      <h1>Hello {jobId}</h1>
      <h1>{job?.jobTitle}</h1>
    </div>
  );
};

export default RecruitmentJobDetails;
