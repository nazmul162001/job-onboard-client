import React, { useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Jobs from '../Jobs';
import Sidebar from '../Sidebar/Sidebar';

const AllJob = () => {
  useTitle('Find Jobs')

  const [getJobs, setGetJobs] = useState([])
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);
  const [cat, setCat] = useState('')
  const [salary, setSalary] = useState([])
  const [jobType, setJobType] = useState([])
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  


  return (
    <div className='flex flex-col h-auto md:h-[100vh] bg-[#eeecec] '>
      <div className="jobs-content flex flex-col overflow-y-auto md:flex-row flex-1 bg-[#f1efef] container mx-auto md:px-8">
        <div className="sidebar basis-72 m-4 p-4 rounded-lg bg-[#fbf9f9] overflow-y-auto">
          <Sidebar/>
        </div>
        <div className="jobs flex-1 p-8 overflow-y-auto">
          <Jobs getJobs={getJobs} />
        </div>
      </div>
    </div>
  );
};

export default AllJob;