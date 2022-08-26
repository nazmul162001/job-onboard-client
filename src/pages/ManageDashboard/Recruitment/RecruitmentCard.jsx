import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import RecruitmentRow from "./RecruitmentRow";

const RecruitmentCard = ({ job }) => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState(null);
  const { companyName, jobTitle, location, salary, jobType, jobPostId } = job;
  // const hrUserEmail = auth?.currentUser?.email;

  const { data, isLoading, refetch } = useQuery(
    ["count", auth, job?.createdDate],
    () =>
      axios.get(
        `${BASE_API}/applicants/appliedCandidate?email=${auth?.currentUser?.email}&createdDate=${job?.createdDate}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
  );

  const countData = data?.data;
  // console.log(data?.data)

  const singleCandidates = (id) => {
    navigate(`${id}`);
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
            onClick={() => navigate(`/job/${jobPostId}`)}
          >
            See Details
          </button>
        </div>
      </div>
      {countData?.length > 0 && (
        <label
          for="candidatesModal"
          className="btn btn-sm btn-circle absolute right-2 top-2 text-white"
          onClick={() => setCandidates(job)}
        >
          {countData?.length}
        </label>
      )}

      {candidates && (
        <>
          <input
            type="checkbox"
            id="candidatesModal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-6xl relative overflow-x-hidden">
              <label
                for="candidatesModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecruitmentCard;
