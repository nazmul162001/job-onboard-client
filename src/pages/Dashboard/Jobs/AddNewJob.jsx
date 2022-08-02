import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import JobPostEditor from './JobPostEditor';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../components/Firebase/Firebase.init';

const AddNewJob = () => {
  const [user] = useAuthState(auth)
  // console.log(user);
  const [value, setValue] = useState()
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const addJob = async (data) => {
    const getData = { ...data, value }
    console.log(getData);
  }
  return (
    <div className='card container mx-auto border p-5 my-2'>
      <h2 className='text-center pt-5 pb-3 text-md md:text-2xl'>What's the job you're hiring for? </h2>
      <div className="line w-28 md:w-40 rounded-full opacity-70 h-1 mx-auto bg-primary mb-8"></div>

      <form
        onSubmit={handleSubmit(addJob)}
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
            <label className='text-sm pl-2'>Company Location <span className='text-red-500'>*</span></label>
            <input
              type="text"
              placeholder='Company Location'
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

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

          <div className='flex flex-col gap-y-1'>
            <label htmlFor="category" className='text-sm pl-2'>Job Category <span className='text-red-500'>*</span></label>
            <select
              id='category'
              className='border py-1 rounded-lg pl-3 '
              {...register('category', {
                required: true
              })}
            >
              <option value="web-development">Web Developer</option>
              <option value="front-end">Front End Dev</option>
              <option value="backend">Backend Dev</option>
              <option value="full-stack">Full Stack Dev</option>
              <option value="wordPress">WordPress</option>
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
              <option value="full-time"> Full Time </option>
              <option value="part-time"> Part Time </option>
              <option value="internship"> Internship </option>
              <option value="contract"> Contract </option>
              <option value="volunteer"> Volunteer </option>
              <option value="other"> Other </option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Salary <span className='text-red-500'>*</span></label>
            <input
              type="number"
              placeholder='Salary'
              min={300}
              className='border py-1 rounded-lg pl-3 '
              {...register('salary', {
                required: {
                  value: true,
                  min:300,
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
                  min:1,
                  message: 'Employees is required'
                }
              })}
            />
            <p className='text-[13px] text-red-500 pl-3'>{errors.employees?.message}</p>
          </div>

          <div className='flex flex-col space-y-1 '>
            <label className='text-sm pl-2'>Contact Email <span className='text-red-500'>*</span></label>
            <input
              type="text"
              defaultValue={user?.email}
              className='border py-1 rounded-lg pl-3 '
              {...register('contactEmail', {
                required: {
                  value: true,
                }
              })}
            />
          </div>


        </div>

        {/* <JobPostEditor value={value} setValue={setValue}  /> */}

        <div>
          <button className='px-5 py-3 border bg-primary rounded-lg text-white'>
            Create Job
          </button>
        </div>
      </form>

    </div>
  );
};

export default AddNewJob;