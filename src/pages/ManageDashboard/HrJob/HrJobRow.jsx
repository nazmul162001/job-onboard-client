import React from 'react';
import Swal from 'sweetalert2';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BASE_API } from '../../../config';

const HrJobRow = ({ job, index, refetch }) => {
  const { _id } = job

  const handleDelete = () => {
    const url = `${BASE_API}/jobs/${_id}`;
    Swal.fire({
      text: `Are you sure delete this job ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
        }).then(data => {
          // console.log(data);
          if (data.status) {
            Swal.fire({
              text: `Successfully Delete `,
              icon: 'success',
              confirmButtonText: 'Okay'
            })
            refetch()
          }
        })
      }
    })

  }

  const handleUpdate = () => {
    console.log('update')
  }


  return (
    <tr className='text-center'>
      <th>{index + 1}.</th>
      <td>{job.jobTitle}</td>
      <td>{job.createdDate?.slice(3, 15)}</td>
      <td>${job.salary} <small>/m</small></td>
      <td>{job?.location}</td>
      <td className='flex justify-evenly'>
        <button onClick={handleUpdate} className='text-[22px]'><FiEdit/></button>
        <button onClick={handleDelete} className='text-[24px] text-red-500'><AiOutlineDelete/></button>
      </td>
    </tr>
  );
};

export default HrJobRow;