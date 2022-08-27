import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import useAppliedCandidates from "../../../Hooks/useAppliedCandidates";
import RecruitmentRow from "./RecruitmentRow";

const RecruitmentCard = ({ job }) => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState(null);
  const { companyName, jobTitle, location, salary, jobType, _id } = job;

  // const hrUserEmail = auth?.currentUser?.email;

  const { data, isLoading, refetch } = useAppliedCandidates(job)

  const countData = data?.data;
  // console.log(data?.data)

  const singleCandidates = (id) => {
    navigate(`mail/${id}`);
  };

  const singleJob = (id) => {
    navigate(`job/${id}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="shadow-lg hover:shadow-2xl border-t-2 border-primary relative">
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
        <p className="flex ">Location : {location} </p>
        <div className="flex flex-col  space-y-1">
          <span>
            Salary : ${salary}
            <small>/m</small>
          </span>
        </div>
        <div className="flex flex-col  space-y-1">
          <span>Job Type : {jobType}</span>
        </div>
        <div className=" pt-3 flex justify-between items-center">
          <button
            className="btn btn-sm btn-outline capitalize rounded-lg px-4 py-1 "
            onClick={() => singleJob(_id)}
          >
            See Details
          </button>
        </div>
      </div>
      {countData?.length > 0 && (
        <label
          for="candidatesModal"
          className="btn btn-sm btn-circle absolute right-2 top-2 text-white"
          onClick={() => singleJob(_id)}
        >
          {countData?.length}
        </label>
      )}

      
    </div>
  );
};

export default RecruitmentCard;
