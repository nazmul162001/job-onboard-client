import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../../Components/Loading/Loading';
import { BASE_API } from '../../../config';

const EditJobInfo = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, refetch } = useQuery(['AllJob'], () => axios.get(`${BASE_API}/jobs/${jobId}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }
  }))

  const jobInfo = data?.data
  // console.log(jobInfo);

  const handleUpdate = event => {
    event.preventDefault()
    const updateInfo = {
      jobTitle: event.target.jobTitle.value,
      jobType: event.target.jobType.value,
      location: event.target.location.value,
      salary: event.target.salary.value,
      employees: event.target.employees.value,
      openingPosition: event.target.openingPosition.value,
    }
    // console.log(updateInfo);

    fetch(`${BASE_API}/jobs/${jobId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(updateInfo),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        Swal.fire({
          text: `Successfully update`,
          icon: 'success',
          confirmButtonText: 'Thank you.'
        })
        refetch()
        navigate(`/job/${jobId}`)

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  if(isLoading){
    return <Loading/>
  }



  return (
    <div className='card container mx-auto px-5 my-16 shadow-xl border-t-4 border-primary rounded-2xl'>
      <h2 className='text-center pt-5 pb-3 text-[17px] md:text-2xl'>Edit  {jobInfo?.jobTitle} </h2>
      <div className="line w-40 md:w-52 rounded-full  h-1 mx-auto bg-primary mb-8"></div>

      <form
        onSubmit={handleUpdate}
        className='flex flex-col gap-5 space-y-1  md:px-8 lg:px-28'
      >
        <div className='grid grid-cols-1  gap-5'>
          <div className='flex flex-col space-y-1 gap-y-1'>
            <input type="text" defaultValue={jobInfo?.jobTitle} name='jobTitle' className="border-b py-1 text-2xl pl-3 hover:border-primary duration-300" required />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='flex flex-col space-y-1 gap-y-1'>
            <label className='text-sm pl-2'>Job Type <span className='text-red-500'>*</span></label>
            <input type="text" defaultValue={jobInfo?.jobType} name='jobType' className="border py-1 rounded-lg pl-3 hover:border-primary duration-300" required />
          </div>

          <div className='flex flex-col space-y-1 gap-y-1'>
            <label className='text-sm pl-2'>Work Location <span className='text-red-500'>*</span></label>
            <input type="text" defaultValue={jobInfo?.location} name='location' className="border py-1 rounded-lg pl-3 hover:border-primary duration-300" required />
          </div>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Salary (USD )<span className='text-red-500'>*</span></label>
            <input type="number" min={300} defaultValue={jobInfo?.salary} name='salary' className="border py-1 rounded-lg pl-3 hover:border-primary duration-300" required />
          </div>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Employees <span className='text-red-500'>*</span></label>
            <input type="number" min={1} defaultValue={jobInfo?.employees} name='employees' className="border py-1 rounded-lg pl-3 hover:border-primary duration-300" required />
          </div>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Position Opening <span className='text-red-500'>*</span></label>
            <input type="number" min={1} defaultValue={jobInfo?.openingPosition} name='openingPosition' className="border py-1 rounded-lg pl-3 hover:border-primary duration-300" required />
          </div>

        </div>

        <div className='pb-8'>
          <button className='px-5 py-3 border bg-primary duration-300 hover:bg-[#6746b3] rounded-lg text-white'>
            Update Now
          </button>
        </div>
      </form>

    </div>
  );
};

export default EditJobInfo;