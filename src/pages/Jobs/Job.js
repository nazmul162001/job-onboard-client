import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Job = ({ job }) => {
  const { id, jobName, companyName, location,salary,jobQuality } = job
  return (
    <div className="border-2 rounded-md">
      <div className="p-5 space-y-5">
        <div className="space-y-1">
          <h2 className="text-2xl ">{jobName}</h2>
          <p className='text-md'>{companyName}</p>
        </div>
        <p className='flex '> <span className='px-2 pt-1'><HiOutlineLocationMarker /></span> {location} </p>
        <div>
          <span>Salary : ${salary}<small>/m</small></span>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <span className='border rounded-xl px-4 py-1 bg-base-300'>{jobQuality}</span>
          <Link to={'/jobs/' + id} className='text-[#1a54ac]'>
            <p className='flex justify-center items-center gap-1'> View Details <span className='text-2xl'><MdKeyboardArrowRight/></span></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;