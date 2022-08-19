import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsStopwatch } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import moment from 'moment';

const Job = ({ job }) => {
  // console.log(job);
  const { _id, jobTitle, companyName, location, salary, jobType, createdDate } = job
  
  return (
    <div className="border bg-white rounded-md my-5 shadow-lg">
      <div className="p-5 space-y-5">
        <div className="space-y-2">
          <div className='flex flex-col lg:flex-row space-y-1  justify-between'>
            <h2 className="text-2xl font-mono font-bold ">{jobTitle}</h2>
          <p className='text-lg md:text-xl lg:text-xl font-semibold '>{companyName}</p>
          </div>
            <p className='flex items-center gap-2 '> <span><BsStopwatch/></span> {moment(createdDate).format("MMMM DD, YYYY")}</p>
        </div>
        <p className='flex '> <span className='px-2 pt-1'><HiOutlineLocationMarker /></span> {location} </p>
        <div className='flex flex-col  space-y-1'>
          <span>Salary : ${salary}<small>/m</small></span>
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