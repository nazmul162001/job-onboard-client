import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import JobPostEditor from './JobPostEditor';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Auth/Firebase/Firebase.init';
import { BASE_API } from '../../../config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddNewJob = () => {
  const [user] = useAuthState(auth)
  const [value, setValue] = useState()
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const hrName = user?.displayName
  const hrEmail = user?.email

  var time = new Date().getTime(); 
  var date = new Date(time); 
  var createdDate = date.toString()

  const navigate = useNavigate();

  const navigateToJobs = () => {
    navigate('/jobs')
  }

  const onSubmit = async (data) => {
    const jobData = { ...data, value, hrName , hrEmail , createdDate}
    // console.log(jobData);
    await fetch(`${BASE_API}/jobs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    }).then(res => res.json())
      .then(data => {
        // console.log('Success:', data);
        if (data.insertedId) {
          Swal.fire({
            text: 'New job added successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          reset()
          setValue("")
          navigateToJobs()
        }
        else {
          Swal.fire({
            text: `Something is wrong`,
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
        }
      })
  };

  return (
    <div className='card container mx-auto border p-5 my-2'>
      <h2 className='text-center pt-5 pb-3 text-[17px] md:text-2xl'>What's the job you're hiring for? </h2>
      <div className="line w-40 md:w-52 rounded-full  h-1 mx-auto bg-primary mb-8"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5 space-y-1  md:px-8 lg:px-28'
      >
        <div className='grid grid-cols-1  gap-5'>
          <div className='flex flex-col space-y-1 gap-y-1'>
            <input
              type="text"
              placeholder='Enter Job Title Here'
              className='border-b py-1 text-2xl pl-3 '
              {...register('jobTitle', {
                required: {
                  value: true,
                  message: 'Job Title is required'
                }
              })}
            />
            <p className='text-[13px] text-red-500 pl-3'>{errors.jobTitle?.message}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='flex flex-col space-y-1 gap-y-1'>
            <label className='text-sm pl-2'>Company Name <span className='text-red-500'>*</span></label>
            <input
              type="text"
              placeholder='Enter Company Name'
              className='border py-1 rounded-lg pl-3 '
              {...register('companyName', {
                required: {
                  value: true,
                  message: 'Company Name is required'
                }
              })}
            />
            <p className='text-[13px] text-red-500 pl-3'>{errors.companyName?.message}</p>
          </div>

          <div className='flex flex-col space-y-1 gap-y-1'>
            <label className='text-sm pl-2'>Work Location <span className='text-red-500'>*</span></label>
            <input
              type="text"
              placeholder='Work Location'
              className='border py-1 rounded-lg pl-3 '
              {...register('location', {
                required: {
                  value: true,
                  message: 'Location is required'
                }
              })}
            />
            <p className='text-[13px] text-red-500 pl-3'>{errors.location?.message}</p>
          </div>
        </div>

        <JobPostEditor value={value} setValue={setValue} />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pt-20 md:pt-16'>

          <div className='flex flex-col gap-y-1'>
            <label htmlFor="category" className='text-sm pl-2'>Job Category <span className='text-red-500'>*</span></label>
            <select
              id='category'
              className='border py-1 rounded-lg pl-3 '
              {...register('category', {
                required: true
              })}
            >
              <option value="Web Development">Web Developer</option>
              <option value="Front End">Front End Dev</option>
              <option value="Backend Dev">Backend Dev</option>
              <option value="Full Stack Dev">Full Stack Dev</option>
              <option value="Blockchain Development">Blockchain Development</option>
              <option value="Animator">Animator</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Data Entry">Data Entry</option>
              <option value="Flutter Development">Flutter Development</option>
              <option value="Game Development">Game Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="PHP Development">PHP Development</option>
              <option value="WordPress">WordPress</option>
            </select>
          </div>

          <div className='flex flex-col  gap-y-1'>
            <label htmlFor="jobType" className='text-sm pl-2'>Job Type <span className='text-red-500'>*</span></label>
            <select
              id='jobType'
              className='border py-1 rounded-lg pl-3 '
              {...register('jobType', {
                required: true
              })}
            >
              <option value="Full Time"> Full Time </option>
              <option value="Part Time"> Part Time </option>
              <option value="Internship"> Internship </option>
              <option value="Contract"> Contract </option>
              <option value="Volunteer"> Volunteer </option>
              <option value="Other"> Other </option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Salary (USD )<span className='text-red-500'>*</span></label>
            <input
              type="number"
              placeholder='Salary'
              min={300}
              className='border py-1 rounded-lg pl-3 '
              {...register('salary', {
                required: {
                  value: true,
                  min: 300,
                  message: 'Salary is required'
                }
              })}
            />
            <p className='text-[13px] text-red-500 pl-3'>{errors.salary?.message}</p>
          </div>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Employees <span className='text-red-500'>*</span></label>
            <input
              type="number"
              placeholder='Company Employee'
              min={1}
              className='border py-1 rounded-lg pl-3 '
              {...register('employees', {
                required: {
                  value: true,
                  min: 1,
                  message: 'Employees is required'
                }
              })}
            />
            <p className='text-[13px] text-red-500 pl-3'>{errors.employees?.message}</p>
          </div>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Position Opening <span className='text-red-500'>*</span></label>
            <input
              type="number"
              placeholder='Vacancy'
              min={1}
              className='border py-1 rounded-lg pl-3 '
              {...register('openingPosition', {
                required: {
                  value: true,
                  min: 1,
                  message: 'This field is required'
                }
              })}
            />
            <p className='text-[13px] text-red-500 pl-3'>{errors.openingPosition?.message}</p>
          </div>

        </div>

        <div className='pb-8'>
          <button className='px-5 py-3 border bg-primary rounded-lg text-white'>
            Create Job
          </button>
        </div>
      </form>

    </div>
  );
};

export default AddNewJob;