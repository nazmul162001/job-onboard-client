import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { jobTypeList, salaryList } from '../../../data';
import Pagination from '../../../Hooks/Pagination';
import useJobData from '../../../Hooks/useJobData';
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

  const { data } = useQuery(['AllJobs', page, show, cat, salary, jobType, location, search], () => axios.get(`http://localhost:5000/jobs?search=${search}&page=${page}&show=${show}&location=${location}&cat=${cat}&salary=${salary}&type=${jobType}`))

  const jobDataArr = data?.data?.jobs
  const total = data?.data?.total;

  useEffect(() => {
    setGetJobs(jobDataArr)
  }, [page, show, cat, salary, jobType, location, search, jobDataArr])

  const showHandle = (page) => {

  }

  const categoryHandle = (e) => {
    const query = e.target.value;
    setCat(query)
  }

  const jobTypeHandle = (e) => {
    const query = e.target.value;
    const check = e.target.checked;

    if (check && !jobType?.includes(query)) {
      setJobType([...jobType, query]);
    }
    else {
      const filterJobType = jobType?.filter(t => t !== query)
      setJobType(filterJobType)
    }
  }

  const searchHandle = (e) => {
    const query = e.target.value;
    if (query) {
      setSearch(query)
    }

  }
  const locationHandle = (e) => {
    const query = e.target.value;
    if (query) {
      setLocation(query)
    }
  }

  const pageHandle = (page) => {
    setPage(page)
  }




  return (
    <div className='flex flex-col h-auto bg-base-300'>

      <div className="bg-base-100 grid grid-cols-12">

        <div className="sidebar basis-72 m-4 p-4 col-span-12 rounded-lg bg-base-100 overflow-y-auto md:col-start-3 md:col-end-6 md:shadow-md md:sticky md:top-[120px] md:h-[100vh]">
          <Sidebar
            jobType={jobType}
            jobTypeHandle={jobTypeHandle}
            locationHandle={locationHandle}
            categoryHandle={categoryHandle}
            searchHandle={searchHandle}
            cat={cat}
          />
        </div>

        <div className="jobs flex-1 p-8 col-span-12 overflow-y-auto jobsSidBarHidden md:col-start-6 md:col-end-11">
          <Jobs getJobs={getJobs} />
        </div>
      </div>
    </div>
  );
};

export default AllJob;