import React from 'react';
import moment from 'moment';
import { useQuery } from "@tanstack/react-query";
import auth from '../../../Auth/Firebase/Firebase.init';
import axios from 'axios';
import { BASE_API } from '../../../config';

const RecentJobs = ({ myJob, index }) => {

  const { data } = useQuery(["count", auth, myJob?.createdDate], () => axios.get(`${BASE_API}/applicants/appliedCandidate?email=${auth?.currentUser?.email}&createdDate=${myJob?.createdDate}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }))

  // console.log(data);
  const countApplicant = data?.data
  console.log(countApplicant);

  return (
    <tr class="bg-white text-center border-b transition duration-300 ease-in-out hover:bg-gray-100 py-5">
      <th className='py-3'>{index + 1}.</th>
      <td className='py-3'>{myJob.jobTitle}</td>
      <td className='py-3'>{moment(myJob?.createdDate).format("MMMM DD, YYYY")}</td>
      <td className='py-3'>
        ${myJob.salary} <small>/m</small>
      </td>
      <td className='capitalize '>{myJob?.location}</td>
      <td className='font-semibold font-mono '>{countApplicant?.length ? countApplicant?.length : 'No Applicant'}</td>
    </tr>
  );
};

export default RecentJobs;