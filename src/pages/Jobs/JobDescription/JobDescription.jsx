import React from 'react';
import { useParams } from 'react-router-dom';
import useJob from '../../../hooks/useJob';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const JobDescription = () => {
  const { jobId } = useParams()
  const [job, loading] = useJob(jobId);

  console.log(job)
  // const {category,companyName,createdDate,employees,hrEmail,hrName,jobTitle,jobType,location,openingPosition,salary, value , _id} = job 

  return (
    <div className=''>
      <div className="bg-[#222223]">
        <div className="shadow-md py-10 px-8 md:px-28 lg:px-12 space-y-5 container mx-auto text-white">
          <div className="space-y-2">
            <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-1 justify-between'>
              <div className="flex gap-2">
                <h2 className="text-xl md:text-3xl lg:text-3xl font-bold ">{job?.jobTitle}</h2>
                <h2 className='text-xl md:text-lg md:mt-1 lg:mt-0 lg:text-3xl font-bold  hidden md:block'> | Vacancy : {job?.openingPosition}</h2>
              </div>
              <p className='text-md md:text-xl lg:text-3xl md:font-bold text-white'>{job?.companyName}</p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row space-y-2 gap-3 lg:gap-0  justify-between'>
              <p className='flex text-white '> <span className='px-1 pt-1'><HiOutlineLocationMarker /></span> {job?.location} </p>
              <p className=' text-white text-[15px] md:text-lg'>Company Employees : {job?.employees}</p>
            </div>
          </div>
          <p className='text-white'>Salary  : ${job?.salary} <small>/ m</small></p>
          <div className='flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-1'>
            <span className='lg:pt-4'>Work Type : {job?.jobType}</span>
            <button className='px-5 py-3 bg-primary rounded-lg text-xl text-white'>Apply Now</button>
          </div>
        </div>
      </div>
      <div className=' py-8 px-5 md:px-28 lg:px-12 space-y-5 container mx-auto'>
        <h2 className='text-2xl lg:text-4xl lg:pb-5 font-bold'>Job Description : </h2>
        <div dangerouslySetInnerHTML={{ __html: job?.value }} className='prose max-w-full prose-h2:my-0 prose-h2:mb-2 prose-p:my-0 prose-p:text-xl prose-p:text-[#292828] md:prose-li:text-xl md:prose-ol:text-xl'></div>
      </div>
    </div>
  );
};

export default JobDescription;