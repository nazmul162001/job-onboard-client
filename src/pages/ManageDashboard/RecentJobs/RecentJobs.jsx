import React from 'react';
import moment from 'moment';
import { useQuery } from "@tanstack/react-query";
import auth from '../../../Auth/Firebase/Firebase.init';
import axios from 'axios';
import { BASE_API } from '../../../config';

const RecentJobs = ({ myJob,index }) => {

  const { data} = useQuery(["count", auth, myJob?.createdDate], () => axios.get(`${BASE_API}/applicants/appliedCandidate?email=${auth?.currentUser?.email}&createdDate=${myJob?.createdDate}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }))

  // console.log(data);
  const countData = data?.data

  return (
    <tr class="bg-white text-center border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <th>{index + 1}.</th>
        <td>{myJob.jobTitle}</td>
        <td>{moment(myJob?.createdDate).format("MMMM DD, YYYY")}</td>
        <td>
          ${myJob.salary} <small>/m</small>
        </td>
        <td>{myJob?.location}</td>
        <td>{countData?.length}</td>
    </tr>
  );
};

export default RecentJobs;