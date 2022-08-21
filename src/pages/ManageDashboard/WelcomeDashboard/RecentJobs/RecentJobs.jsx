import React from 'react';
import moment from 'moment';
import { useQuery } from "@tanstack/react-query";
import auth from '../../../../Auth/Firebase/Firebase.init';
import axios from 'axios';
import { BASE_API } from '../../../../config';
import { useNavigate } from 'react-router-dom';
import demoImg from './demoImg.png'

const RecentJobs = ({ myJob, index }) => {

  const { data } = useQuery(["count", auth, myJob?.createdDate], () => axios.get(`${BASE_API}/applicants/appliedCandidate?email=${auth?.currentUser?.email}&createdDate=${myJob?.createdDate}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }))

  // console.log(data);
  const countApplicant = data?.data
  // console.log(countApplicant);
  // console.log(myJob?._id)

  const navigate = useNavigate();

  const navigateToJob = () => {
    navigate(`/job/${myJob?._id}`)
  }

  return (
    <tr class="bg-white text-center border-b transition duration-300 ease-in-out hover:bg-gray-100 py-5">
      <th className='py-3'>{index + 1}.</th>
      <td className='py-3'>{myJob.jobTitle}</td>
      <td className='py-3'>{moment(myJob?.createdDate).format("MMMM DD, YYYY")}</td>
      <td className='py-3'>
        ${myJob.salary} <small>/m</small>
      </td>
      <td className='capitalize '>{myJob?.location}</td>
      <td className=''>
        <div class="avatar-group -space-x-8 container ">
          <div class="avatar">
            <div class="w-12">
              <img src={demoImg} alt='Candidate'/>
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src={demoImg} alt='Candidate'/>
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="w-12 bg-neutral-focus text-neutral-content">
              <span>{countApplicant?.length ? countApplicant?.length : 0}</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <button onClick={navigateToJob} className='btn btn-sm'>View</button>
      </td>
    </tr>
  );
};

export default RecentJobs;