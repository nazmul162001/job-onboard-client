import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";

const RecruitmentCard = ({ job, index }) => {
  const { companyName, jobTitle, location, salary, jobType } = job;

  const { data, isLoading } = useQuery(["count", auth, job?.jobTitle], () => axios.get(`${BASE_API}/applicants/appliedCandidate?email=${auth?.currentUser?.email}&jobTitle=${job?.jobTitle}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }))

  const countData = data?.data

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="shadow-lg hover:shadow-2xl border-t-2 border-primary relative"
    >
      <label class="flex justify-center items-center btn-sm btn-circle bg-red-600 text-white absolute right-2 top-2">
        {countData?.length}
      </label>

      <div className="p-5 space-y-5">
        <div className="space-y-2">
          <div className="">
            <h2 className="text-sm font-semibold">{companyName}</h2>
            <br />
            <p className="text-lg md:text-xl lg:text-xl font-bold ">
              {jobTitle}
            </p>
          </div>
        </div>
        <p className="flex ">{location} </p>
        <div className="flex flex-col  space-y-1">
          <span>
            Salary : ${salary}
            <small>/m</small>
          </span>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <span className="border rounded-xl px-4 py-1 bg-base-300">
            {jobType}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
