import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAppliedCandidates from '../../../../Hooks/useAppliedCandidates';
import useJob from '../../../../Hooks/useJob';
import RecruitmentRow from '../RecruitmentRow';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImArrowLeft2 } from "react-icons/im";

const SingleJobCandidates = () => {
  const { jobId } = useParams();
  const [job] = useJob(jobId);
  const navigate = useNavigate()
  
  const currentYear = new Date().getFullYear();

  const { data, refetch } = useAppliedCandidates(job)

  const countData = data?.data;
  // console.log(countData)

  const singleCandidates = (id) => {
    navigate(`/dashboard/recruitment/mail/${id}`);
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div>

      {/* Job Description  */}
      <div className="">
        <div className="shadow-md py-10 space-y-5 px-5">
          <div className="space-y-2">
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-1 justify-between">
              <div className="flex lg:justify-center lg:items-center gap-2 pb-4 lg:pb-0">
                <div
                  onClick={back}
                  className="flex justify-center items-center gap-x-2 cursor-pointer hover:text-primary"
                >
                  <span className="font-extrabold text-xl">
                    <ImArrowLeft2 />
                  </span>
                  <h2 className="text-xl md:text-xl font-bold ">
                    {job?.jobTitle}
                  </h2>
                </div>
                <h2 className="text-xl md:text-lg lg:text-xl font-mono md:mt-1 lg:mt-0  font-bold  hidden md:block">
                  {" "}
                  | Vacancy : {job?.openingPosition}
                </h2>
              </div>
              <p className="text-md md:text-xl lg:text-2xl md:font-bold  font-mono">
                {job?.companyName}
              </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row space-y-2 gap-3 lg:gap-0  justify-between">
              <p className="flex ">
                {" "}
                <span className="px-1 pt-1">
                  <HiOutlineLocationMarker />
                </span>{" "}
                {job?.location}{" "}
              </p>
              <p className=" text-[15px] ">
                Company Employees : {job?.employees}
              </p>
            </div>
          </div>
          <p className="">
            Salary : ${job?.salary} <small>/ m</small>
          </p>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-1">
            <span className="lg:pt-4 font-semibold">Applied Candidates : {countData?.length}</span>
            <div><button className='btn btn-sm btn-outline capitalize'>download excel</button></div>
          </div>
        </div>
      </div>

      {/* Candidate Info  */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-primary">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Candidates
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Applied For
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Resume/Link
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Send Mail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countData?.map((applicant, index) => (
                    <RecruitmentRow
                      applicant={applicant}
                      index={index}
                      refetch={refetch}
                      singleCandidates={singleCandidates}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/*Dashboard Footer  */}
      <div className='text-center mt-12 p-2 bg-base-300'>
        <h3 className=' font-[500]'>Modern Hiring Platform By <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-[#3a47db]'>CodeSamurai</a> | Copyright © {currentYear} </h3>
      </div>


    </div>
  );
};

export default SingleJobCandidates;