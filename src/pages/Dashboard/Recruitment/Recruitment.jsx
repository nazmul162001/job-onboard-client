import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API } from '../../../config';


const Recruitment = () => {
    const [getJobs, setgetJobs] = useState([])
    useEffect(() => {
        axios.get(`${BASE_API}/jobs`)
            .then((response) => setgetJobs(response.data.reverse()))
    }, [])
    return (
        <div>
            <h2 className='text-center text-md md:text-xl font-bold pt-5'>Total Jobs  {getJobs.length}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 gap-5 my-8">
                {getJobs.map((job, index) =>

                    <div key={index} className="shadow-lg hover:shadow-2xl border-t-2 border-primary relative">

                        <label class="flex justify-center items-center btn-sm btn-circle bg-red-600 text-white absolute right-2 top-2">19</label>

                        <div className="p-5 space-y-5">
                            <div className="space-y-2">
                                <div className=''>
                                    <h2 className="text-sm font-semibold">{job.jobTitle}</h2>
                                    <br />
                                    <p className='text-lg md:text-xl lg:text-xl font-bold '>{job.companyName}</p>
                                </div>
                            </div>
                            <p className='flex '>{job.location} </p>
                            <div className='flex flex-col  space-y-1'>
                                <span>Salary : ${job.salary}<small>/m</small></span>
                            </div>
                            <div className=" pt-3 flex justify-between items-center">
                                <span className='border rounded-xl px-4 py-1 bg-base-300'>{job.jobType}</span>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Recruitment;