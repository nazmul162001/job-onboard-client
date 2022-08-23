import React from "react";
import axios from "axios";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";
import JobsCard from "./JobsCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";

const ManageAllJobs = () => {
  useTitle("Manage All Jobs");
  const { data, isLoading, refetch } = useQuery(["AllJob"], () =>
    axios.get(`${BASE_API}/jobs/all`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  const hrJobs = data?.data?.result;

  if (isLoading || !hrJobs || !hrJobs.length) {
    return <Loading />;
  }

  return (
    <div className="p-5 overflow-x-hidden">
      <div className="title my-2 mb-6">
        <h3 className="text-lg md:text-2xl font-semibold">Manage All Posted Jobs</h3>
        <span>You can manage all the jobs which are posted by Hr Managers</span>
      </div>
      {hrJobs?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 my-8">
          {hrJobs?.map((job) => (
            <JobsCard job={job} refetch={refetch} />
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
              Not Posted Jobs yet.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageAllJobs;
