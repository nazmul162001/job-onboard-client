import React from "react";
import { BsFolderSymlink, BsLink45Deg } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Loading from "../../../Components/Loading/Loading";
import useAppliedJobs from "../../../Hooks/useAppliedJobs";
import useTitle from "../../../Hooks/useTitle";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

const AppliedJobs = () => {
  useTitle("Applied Jobs");
  const { appliedJobs, isLoading } = useAppliedJobs()
  const navigate = useNavigate();
  // console.log(appliedJobs)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5 h-screen">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Applied Jobs</h3>
        <span>You can manage all the jobs which are applied by you</span>
      </div>
      {appliedJobs?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-8">
          {appliedJobs?.map((job, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-2xl border-t-2 border-primary relative"
            >
              <div className="p-5 space-y-4">
                <div className="space-y-2">
                  <div className="">
                    <h2 className="text-sm font-semibold">{job.companyName}</h2>
                    <br />
                    <p className="text-lg md:text-xl lg:text-xl font-bold ">
                      {job.jobTitle}
                    </p>
                  </div>
                </div>
                <div className="font-mono space-y-1">
                  <p className="flex "> Vacancy : {job?.job?.openingPosition} </p>
                  <p className="flex "> Applied : {moment(job?.appliedDate).format("MMMM DD")}</p>
                </div>
                <div className="gap-2 md:gap-0 pt-3 flex justify-between items-center">
                  <button className="btn btn-sm btn-outline capitalize rounded-xl px-4 py-1 " onClick={() => navigate(`/job/${job?.jobPostId}`)}>
                    See Job Details
                  </button>
                  <span className="flex gap-1">
                    <a href={job?.resume} target="_blank" rel="noreferrer">
                      <button className="btn btn-square btn-sm text-white">
                        <BsFolderSymlink className="text-lg text-center" />
                      </button>
                    </a>
                    <a href={job?.linkedinUrl} target="_blank" rel="noreferrer">
                      <button className="btn btn-square btn-sm text-white hidden lg:block">
                        <FaLinkedinIn className="text-xl pl-2" />
                      </button>
                    </a>
                    <a href={job?.portfolioUrl} target="_blank" rel="noreferrer">
                      <button className="btn btn-square btn-sm text-white  hidden md:block">
                        <BsLink45Deg className="text-2xl pl-1" />
                      </button>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid place-items-center py-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS0g4KI9aJhPYuJLsGMoKRd603nvd0Ia9YxxJ8kKw93PUkrhNx6LuIIQXM05YKdIL7Zc&usqp=CAU"
              alt="order-not-found"
            />
            <h2 className="text-2xl py-3 font-semibold text-center">
              Not Applied Jobs yet.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default AppliedJobs;
