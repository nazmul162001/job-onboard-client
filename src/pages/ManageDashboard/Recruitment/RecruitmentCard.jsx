import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";

const RecruitmentCard = ({ job }) => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState(null);
  const { companyName, jobTitle, location, salary, jobType } = job;
  // console.log(job)

  const { data, isLoading } = useQuery(["count", auth, job?.createdDate], () =>
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
      {countData?.length > 0 && (
        <label
          for="candidatesModal"
          className="btn btn-sm btn-circle absolute right-2 top-2 text-white"
          onClick={() =>
            setCandidates({
              jobTitle,
              jobType,
            })
          }
        >
          {countData?.length}
        </label>
      )}

      {candidates && (
        <>
          <input
            type="checkbox"
            id="candidatesModal"
            className="modal-toggle "
          />
          <div className="modal ">
            <div className="modal-box w-11/12 max-w-5xl relative">
              <label
                for="candidatesModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              {countData?.map((applicant) => (
                <div
                  className="shadow-lg hover:shadow-2xl relative"
                  key={applicant._id}
                >
                  <div className="p-5 space-y-5">
                    <div className="space-y-2">
                      <div className="">
                        <h2 className="text-xl font-semibold">
                          {applicant.displayName}
                        </h2>
                        <br />
                        <p className="text-lg md:text-xl lg:text-xl font-bold ">
                          {applicant.email}
                        </p>
                      </div>
                    </div>
                    <p className="flex font-semibold badge text-white">
                      {applicant.category}{" "}
                    </p>
                    <p className="flex">
                      {applicant.number}
                    </p>
                    <div className=" pt-3 flex justify-between items-center">
                      <span className="flex gap-2">
                        Resume: 
                      <a
                        title="Resume/Link"
                        href={applicant.resume}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaRegAddressBook size={25} />
                      </a>
                      </span>
                      <label
                        htmlFor="candidate-modal"
                        title="Click to send mail"
                        onClick={() => singleCandidates(applicant._id)}
                        className="btn btn-sm text-white"
                      >
                        Send Mail
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecruitmentCard;
