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
            <div className="modal-box w-11/12 max-w-5xl relative overflow-x-hidden">
              <label
                for="candidatesModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full">
                        <thead class="border-b bg-primary">
                          <tr>
                            <th scope="col"></th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Candidates
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Applied For
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Phone
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Resume/Link
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Sending Mail
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {countData?.map((applicant, index) => (
                            <tr class="bg-base-100 border-b transition duration-300 ease-in-out">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                {index + 1}
                              </td>

                              <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div class="font-normal">
                                    {applicant.displayName}
                                  </div>
                                  <div class="text-sm font-semibold">
                                    {applicant.email}
                                  </div>
                                </div>
                              </td>

                              <td class="text-sm font-normal px-6 py-4 whitespace-nowrap">
                                {applicant.jobTitle}
                                <br />
                                <span class="badge badge-ghost ">
                                  {applicant.category}
                                </span>
                              </td>

                              <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-semibold">
                                  {applicant.number}
                                </div>
                              </td>

                              <td class="text-sm font-light px-14 py-4 whitespace-nowrap">
                                <a
                                  title="Resume/Link"
                                  href={applicant.resume}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaRegAddressBook size={25} />
                                </a>
                              </td>
                              <td>
                                <label
                                  htmlFor="candidate-modal"
                                  title="Click to send mail"
                                  onClick={() =>
                                    singleCandidates(applicant._id)
                                  }
                                  className="btn btn-sm text-white"
                                >
                                  Send Mail
                                </label>
                              </td>
                            </tr>
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
