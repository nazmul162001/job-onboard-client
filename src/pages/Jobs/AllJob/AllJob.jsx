import React, { useEffect, useState } from 'react';
import {  jobTypeList, salaryList } from '../../../data';
import useJobData from '../../../Hooks/useJobData';
import useTitle from '../../../Hooks/useTitle';
import Jobs from '../Jobs';
import Sidebar from '../Sidebar/Sidebar';

const AllJob = () => {
  useTitle('Find Jobs')
  const [jobData] = useJobData() 
  const [jobSearch, setJobSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [jobTypeLists, setJobTypeList] = useState(jobTypeList)
  const [salaryLists, setSalaryLists] = useState(salaryList)
  const [getJobs, setGetJobs] = useState([])
  const [ifCheckJobType, setIfCheckJobType] = useState(null)
  const [ifCheckSalary, setIfCheckSalary] = useState(null)

  console.log(getJobs)

  // Handle Check Job Type 
  const handleCheckedJobType = (id) => {
    const checkedJobType = jobTypeLists.map((jobType) =>
      jobType.id === id ? { ...jobType, checked: !jobType.checked } : jobType
    );
    const findJobType = checkedJobType?.find(jobType => jobType?.checked)
    setIfCheckJobType(findJobType)
    // console.log(checkedJobType);
    setJobTypeList(checkedJobType);
  };

  //Handle Check Salary
  const handleCheckedSalary = (id) => {
    const checkedSalary = salaryLists.map((salaryList) =>
      salaryList.id === id ? { ...salaryList, checked: !salaryList.checked } : salaryList
    );
    const checkSalary = checkedSalary?.find(check => check?.checked);
    setIfCheckSalary(checkSalary)
    // console.log(checkedSalary);
    setSalaryLists(checkedSalary);
  };


  // Handle Filtering 
  const filtering = () => {
    let updatedJob = jobData ;
    setGetJobs(jobData)
    console.log(updatedJob)

    // Job Search Filter
    if (jobSearch) {
      updatedJob = updatedJob.filter(
        (getJob) => getJob.jobTitle.toLowerCase().search(jobSearch.toLowerCase().trim()) !== -1
      );
      // console.log(updatedJob)
      setGetJobs(updatedJob);
    }


    // Location Search Filter
    if (locationSearch) {
      updatedJob = updatedJob.filter(
        (getLocation) => getLocation.location.toLowerCase().search(locationSearch.toLowerCase().trim()) !== -1
      );
      // console.log(updatedJob)
      setGetJobs(updatedJob);
    }


    // Job Type Wise Filter
    const jobTypeFilter = jobTypeLists
      .filter((jobType) => jobType.checked)
      .map((jobType) => jobType.label.toLowerCase());

    if (jobTypeFilter.length && ifCheckJobType) {
      updatedJob = updatedJob.filter((job) =>
        jobTypeFilter.includes(job.jobType)
      );
      setGetJobs(updatedJob);
    }
    // console.log(jobTypeFilter)


    // Salary Wise Filter
    const salaryFilter = updatedJob?.filter(salary => {
      const getPrice = salary?.salary;
      for (const check of salaryLists) {
        if (check?.checked) {
          const { low, high } = check;
          if (getPrice >= low && getPrice <= high) {
            return salary
          }
        }
      }
    })
    // console.log(salaryFilter)
    salaryFilter?.length && setGetJobs(salaryFilter)
    ifCheckSalary && setGetJobs(salaryFilter)
    // setGetJobs(updatedJob)
  }


  useEffect(() => {
    filtering();
  }, [jobSearch, locationSearch, jobTypeLists, salaryLists , jobData]);


  return (
    <div className='flex flex-col h-auto md:h-[100vh] bg-[#eeecec] '>
      <div className="jobs-content flex flex-col overflow-y-auto md:flex-row flex-1 bg-[#f1efef] container mx-auto md:px-8">
        <div className="sidebar basis-72 m-4 p-4 rounded-lg bg-[#fbf9f9] overflow-y-auto">
          <Sidebar
            jobTypeLists={jobTypeLists}
            checkedJobType={handleCheckedJobType}
            valueJ={jobSearch}
            valueL={locationSearch}
            setJobSearch={(e) => setJobSearch(e.target.value)}
            setLocationSearch={(e) => setLocationSearch(e.target.value)}
            salaryLists={salaryLists}
            handleCheckedSalary={handleCheckedSalary}

          />
        </div>
        <div className="jobs flex-1 p-8 overflow-y-auto">
          <Jobs getJobs={getJobs} />
        </div>
      </div>
    </div>
  );
};

export default AllJob;