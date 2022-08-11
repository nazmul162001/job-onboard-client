import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_API } from '../../../config';
import { jobTypeList } from '../../../data';
import useTitle from '../../../Hooks/useTitle';
import Jobs from '../Jobs';
import Sidebar from '../Sidebar/Sidebar';

const AllJob = () => {
  useTitle('Find Jobs')
  const [jobTypeLists, setJobTypeList] = useState(jobTypeList)
  const [ifCheckJobType, setIfCheckJobType] = useState(null)
  const [getJobs, setGetJobs] = useState([])


  useEffect(() => {
    axios.get(`${BASE_API}/jobs`)
      .then((response) => setGetJobs(response.data.reverse()))
  }, [])

  // console.log(getJobs)

  // Handle Check Job Type 
  const handleCheckedJobType = (id) => {
    const checkedJobType = jobTypeLists.map((jobType) =>
      jobType.id === id ? { ...jobType, checked: !jobType.checked } : jobType
    );
    const findJobType = checkedJobType?.find(jobType => jobType?.checked)
    setIfCheckJobType(findJobType)
    setJobTypeList(checkedJobType);
  };


  




  return (
    <div className='flex flex-col h-auto md:h-[100vh] bg-[#eeecec] py-6'>
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row flex-1 ">
        <div className="basis-72 md:h-[80vh] p-4 m-4 rounded-[10px] bg-[#fafafa] overflow-y-auto">
          <Sidebar
            jobTypeLists={jobTypeLists}
            checkedJobType={handleCheckedJobType}

          />
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          <Jobs getJobs={getJobs}/>
        </div>
      </div>
    </div>
  );
};

export default AllJob;