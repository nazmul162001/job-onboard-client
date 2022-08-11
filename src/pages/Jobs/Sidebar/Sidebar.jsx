import React from 'react';
import { RiEqualizerLine } from 'react-icons/ri';
import { BiSearchAlt2 } from "react-icons/bi";
import { FaSearchLocation } from "react-icons/fa";

const Sidebar = ({ jobTypeLists, checkedJobType }) => {
  return (
    <div className='space-y-5'>
      {/* filter header  */}
      <div className='flex justify-between mb-2 text-2xl font-bold font-mono'>
        <h3>Filter Here</h3>
        <span className='icon'><RiEqualizerLine /></span>
      </div>

      {/* Search By Job Title  */}
      <div>
        <h4>Search Job </h4>
        <div className='flex items-center '>
          <BiSearchAlt2 className='text-xl mr-1' />
          <input
            className='border border-slate-800 rounded-md py-1 pl-1'
            type='text'
            placeholder='React developer'
          />
        </div>
      </div>


      {/* Search By Location  */}
      <div>
        <h4>Location </h4>
        <div className='flex items-center '>
          <FaSearchLocation className='text-md mr-2' />
          <input
            className='border border-slate-800 rounded-md py-1 pl-1'
            type='text'
            placeholder='e.g USA'
          />
        </div>
      </div>


      {/* Search By Job Type  */}
      <div>
        <h4>Job Type </h4>
        {jobTypeLists.map((jobList) => {
          return <div key={jobList.id}>
            <input
              className='mr-[5px] '
              type="checkbox"
              id={jobList.id}
              checked={jobList?.checked}
              onChange={() => checkedJobType(jobList.id)}

            />
            <label className='cursor-pointer' htmlFor={jobList.id}>{jobList?.label}</label>
          </div>
        })}
      </div>





    </div>
  );
};

export default Sidebar;