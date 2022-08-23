import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFolderSymlink, BsLink45Deg } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";

const AppliedJobs = () => {
  useTitle("Applied Jobs");
  const { data: appliedJobs, isLoading } = useQuery(["appliedJobs"], () =>
    fetch(`${BASE_API}/applicants/applied?email=${auth?.currentUser?.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );


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
              <div className="p-5 space-y-5">
                <div className="space-y-2">
                  <div className="">
                    <h2 className="text-sm font-semibold">{job.companyName}</h2>
                    <br />
                    <p className="text-lg md:text-xl lg:text-xl font-bold ">
                      {job.jobTitle}
                    </p>
                  </div>
                </div>
                <p className="flex ">{job.location} </p>
                <div className="flex flex-col  space-y-1">
                  <span>
                    CV : {job.coverLetter.slice(0, 50)}
                    <small>/m</small>
                  </span>
                </div>
                <div className=" pt-3 flex justify-between items-center">
                  <span className="border rounded-xl px-4 py-1 bg-base-300">
                    {job.number}
                  </span>
                  <span className="flex gap-1">
                    <a href={job?.resume} target="_blank" rel="noreferrer">
                      <button className="btn btn-square btn-sm text-white">
                        <BsFolderSymlink className="text-lg" />
                      </button>
                    </a>
                    <a href={job?.linkedin} target="_blank" rel="noreferrer">
                      <button className="btn btn-square btn-sm text-white">
                        <FaLinkedinIn />
                      </button>
                    </a>
                    <a href={job?.portfolio} target="_blank" rel="noreferrer">
                      <button className="btn btn-square btn-sm text-white">
                        <BsLink45Deg className="text-xl" />
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
