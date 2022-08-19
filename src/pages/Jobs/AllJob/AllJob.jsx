import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_API } from '../../../config';
import useTitle from '../../../Hooks/useTitle';
import Jobs from '../Jobs';
import Sidebar from '../Sidebar/Sidebar';

const AllJob = () => {
  useTitle('Find Jobs')

  const [getJobs, setGetJobs] = useState([])
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);
  const [cat, setCat] = useState('')
  const [jobType, setJobType] = useState([])
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const { data } = useQuery(['AllJobs', page, show, cat,  jobType, location, search], () => axios.get(`${BASE_API}/jobs?search=${search}&page=${page}&show=${show}&location=${location}&cat=${cat}&type=${jobType}`))

  const jobDataArr = data?.data?.jobs
  const total = data?.data?.total;

  useEffect(() => {
    setGetJobs(jobDataArr)
  }, [page, show, cat,  jobType, location, search, jobDataArr])


  //Event Handle 
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


  const lastPage = Math.ceil(eval(total / show));


  return (
    <div className='flex flex-col h-auto bg-base-300'>

      <div className="container mx-auto py-5 bg-base-300 grid grid-cols-12">

        <div className="sidebar basis-64 m-4 p-4 col-span-12 rounded-lg bg-white overflow-y-auto md:col-start-1 md:col-end-5 lg:col-start-2 lg:col-end-5 md:shadow-md md:sticky md:top-[120px] md:h-[90vh]">
          <Sidebar
            jobType={jobType}
            jobTypeHandle={jobTypeHandle}
            locationHandle={locationHandle}
            categoryHandle={categoryHandle}
            searchHandle={searchHandle}
            cat={cat}
          />
        </div>

        <div className="jobs flex-1 p-8 col-span-12 overflow-y-auto jobsSidBarHidden md:col-start-6 md:col-end-12 lg:col-start-5 lg:col-end-12 ">
          <Jobs getJobs={getJobs} lastPage={lastPage} page={page} pageHandle={pageHandle}/>
        </div>
      </div>
    </div>
  );
};

export default AllJob;