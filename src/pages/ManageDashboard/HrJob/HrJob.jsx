import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";
import HrJobRow from "./HrJobRow";

const HrJob = () => {
  useTitle("Posted Job");
  const { data, isLoading, refetch } = useQuery(["AllJob"], () =>
    axios.get(`${BASE_API}/jobs/hrJobs?email=${auth?.currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  const hrJob = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5 h-screen">
      <div className="title my-2 mb-6">
        <h3 className="text-lg md:text-2xl font-semibold">Manage Company Jobs</h3>
        <span>You can update & delete the jobs which are posted by you</span>
      </div>
      {hrJob?.length > 0 ? (
        <div className="md:p-4">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="text-center">
                  <th>No</th>
                  <th>Title</th>
                  <th>Post Date</th>
                  <th>Salary</th>
                  <th>Location</th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {hrJob?.map((job, index) => (
                  <HrJobRow
                    key={index}
                    job={job}
                    index={index}
                    refetch={refetch}
                    isLoading={isLoading}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          <div className="grid place-items-center py-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS0g4KI9aJhPYuJLsGMoKRd603nvd0Ia9YxxJ8kKw93PUkrhNx6LuIIQXM05YKdIL7Zc&usqp=CAU"
              alt="order-not-found"
            />
            <h2 className="text-2xl py-3 font-semibold text-center">
              No Posted Jobs yet.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default HrJob;
