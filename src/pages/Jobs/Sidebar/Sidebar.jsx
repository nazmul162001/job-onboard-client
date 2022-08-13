import React from 'react';
import { RiEqualizerLine } from 'react-icons/ri';
import { BiSearchAlt2 } from "react-icons/bi";
import { FaSearchLocation } from "react-icons/fa";
import { jobTypeList, salaryList } from '../../../data';

const Sidebar = ({ searchHandle, categoryHandle, jobTypeHandle, jobType, locationHandle, cat }) => {

  return (
    <div className='space-y-5'>
      {/* filter header  */}
      <div className='flex justify-between mb-2 text-2xl font-bold font-mono'>
        <h3>Filter Here</h3>
        <span className='icon'><RiEqualizerLine /></span>
      </div>

      {/* Search By Job Title  */}
      <div>
        <h4 className='text-md font-semibold pb-2'>Search Job </h4>
        <div className='flex items-center '>
          <BiSearchAlt2 className='text-xl mr-1' />
          <input
            className='border border-slate-800 rounded-md py-1 pl-1'
            type='text'
            placeholder='React developer'
            onChange={searchHandle}
          />
        </div>
      </div>
      {/* Search By Location */}
      <div>
        <h4 className='text-md font-semibold pb-2'>Location </h4>
        <div className='flex items-center '>
          <FaSearchLocation className='text-md mr-2' />
          <input
            className='border border-slate-800 rounded-md py-1 pl-1'
            type='text'
            placeholder='e.g USA'

            onChange={locationHandle}
          />
        </div>
      </div>

      {/* Search By Category */}

      <div className='flex flex-col '>
        <label htmlFor="category" className='text-sm pl-2'>Job Category <span className='text-red-500'>*</span></label>
        <select
          id='category'
          className='border py-1 rounded-lg pl-3 hover:border-primary duration-300 w-fit'
          onChange={categoryHandle}
          value={cat}
        >
          <option value="">Default</option>
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


      {/* Search By Job Type  */}
      <div>
        <h4 className='text-md font-semibold pb-2'>Job Type </h4>
        {jobTypeList?.map((jobList) => {
          return <div key={jobList.id}>
            <input
              className='mr-[5px] '
              type="checkbox"
              id={jobList.id}
              // checked={jobList?.checked}
              onChange={(e) => jobTypeHandle(e)}
              value={jobList?.label}
            />
            <label className='cursor-pointer' htmlFor={jobList.id}>{jobList?.label}</label>
          </div>
        })}
      </div>


    </div>
  );
};

export default Sidebar;