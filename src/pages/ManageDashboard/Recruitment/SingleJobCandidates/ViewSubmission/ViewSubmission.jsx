import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../../../Components/Loading/Loading';
import { BASE_API } from '../../../../../config';

const ViewSubmission = () => {
  const {applicantId} = useParams()
  const { data, isLoading } = useQuery(["candidates"], () =>
    axios.get(`${BASE_API}/submittedTask/candidate/${applicantId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  const submissionData = data?.data
  console.log(submissionData)

  if(isLoading ){
    return <Loading/>
  }


  return (
    <div>
      <h2>Submitted By {submissionData?.displayName} </h2>
      <h2>Submitted Info {submissionData?.taskInformation} </h2>
    </div>
  );
};

export default ViewSubmission;