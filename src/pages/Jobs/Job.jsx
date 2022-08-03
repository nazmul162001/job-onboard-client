import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Job = ({ job }) => {
  console.log(job);
  const { _id, jobTitle, companyName, location, salary, jobType, createdDate } = job
  return (
    <div className="border-2 rounded-md">
      <div className="p-5 space-y-5">
        <div className="space-y-1">
          <div className='flex justify-between'>
            <h2 className="text-2xl ">{jobTitle}</h2>
            <span className='hidden md:block'>Posted  : {createdDate?.slice(3, 15)}</span>
          </div>
          <p className='text-md '>{companyName}</p>
        </div>
        <p className='flex '> <span className='px-2 pt-1'><HiOutlineLocationMarker /></span> {location} </p>
        <div className='flex flex-col  space-y-1'>
          <span>Salary : ${salary}<small>/m</small></span>
          <span className='md:hidden'>Posted  : {createdDate?.slice(3, 15) }</span>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <span className='border rounded-xl px-4 py-1 bg-base-300'>{jobType}</span>
          <Link to={'/job/' + _id} className=''>
            <p className='flex justify-center items-center gap-1 text-[#2169d4]'> View Details <span className='text-2xl'><MdKeyboardArrowRight /></span></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;