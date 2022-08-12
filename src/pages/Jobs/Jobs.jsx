import React, { useEffect, useState } from 'react';
import EmptyJob from '../../Components/EmptyJob/EmptyJob';
import { BASE_API } from '../../config';
import useJobData from '../../Hooks/useJobData';
import Job from './Job';
import './Jobs.css';

const Jobs = ({ getJobs}) => {

  const [jobData, setJobData] = useJobData()
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const [pageJobs, setPageJobs] = useState(10)


  useEffect(() => {
    fetch(`${BASE_API}/jobs?page=${page}&pageJobs=${pageJobs}`)
      .then(res => res.json())
      .then(data => setJobData(data.reverse()))
  }, [page, pageJobs , setJobData])


  useEffect(() => {
    fetch(`${BASE_API}/jobs/jobCount`)
      .then(res => res.json())
      .then(data => {
        console.log(data.count);
        const count = data.count
        const pages = Math.ceil(count / pageJobs)
        setPageCount(pages)
      })
  }, [pageJobs])



  return (
    <div className='pb-16'>
      <h2 className='text-lg lg:text-2xl font-bold'>Jobs {jobData.length}</h2>
      {/* display products  */}
      {
        jobData?.length ?
          <div>
            {jobData.map((job) => <Job
              key={job?.id}
              job={job}
            ></Job>)}
          </div>
          :
          <div >
            <EmptyJob />
          </div>
      }

      {/* pagination  */}
      <div className='container mx-auto pagination-container'>
        {
          [...Array(pageCount).keys()]
            .map(number =>
              <button className={page === number ? 'selected' : ''}
                onClick={() => setPage(number)}
              > {number + 1} </button>)
        }
        <select className='py-1 px-2' name="" id="" onChange={e => setPageJobs(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>


    </div>
  );
};

export default Jobs;