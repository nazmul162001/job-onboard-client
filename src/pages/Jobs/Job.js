import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Job = ({ job }) => {
  const { id, jobName, companyName, location,salary,jobQuality } = job
  return (
    <div className="border-2 rounded-md">
      <div className="p-5 space-y-5">
        <div className="space-y-1">
          <h2 className="text-2xl ">{jobName}</h2>
          <p className='text-lg'>{companyName}</p>
        </div>
        <p className='flex '> <span className='px-2 pt-1'><HiOutlineLocationMarker /></span> {location} </p>
        <div>
          <span>Salary : ${salary}<small>/m</small></span>
        </div>
        <div className=" pt-3 flex justify-between">
          <span className='border rounded-xl px-4 py-1 bg-base-300'>{jobQuality}</span>
          <Link to={'/jobs/' + id} className=''>
            <p className='pr-3'> View Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;