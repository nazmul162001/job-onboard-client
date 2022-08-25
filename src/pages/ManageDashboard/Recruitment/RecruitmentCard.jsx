import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";

const RecruitmentCard = ({ job }) => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState(null);
  const { companyName, jobTitle, location, salary, jobType } = job;
  // console.log(job)

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

  const handleUpdateStatus = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Hire!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${BASE_API}/applicants/status?id=${id}`, {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: true }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount) {
              refetch();
              toast.success("Your Candidate is hired.");
              // setCandidates(null);
            }
          });
      }
    });
  };

  const handleUpdateStatusFalse = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Hire!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${BASE_API}/applicants/status?id=${id}`, {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: false }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount) {
              refetch();
              toast.success("Your Candidate is UnHired.");
              // setCandidates(null);
            }
          });
      }
    });
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
                            <tr className="bg-base-100 border-b transition duration-300 ease-in-out">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                {index + 1}
                              </td>
                              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div className="font-normal">
                                    {applicant?.displayName}
                                  </div>
                                  <div className="text-sm font-semibold">
                                    {applicant?.email}
                                  </div>
                                </div>
                              </td>

                              <td className="text-sm font-normal px-6 py-4 whitespace-nowrap">
                                {applicant?.jobTitle}
                                <br />
                                <span className="badge badge-ghost ">
                                  {applicant?.category}
                                </span>
                              </td>

                              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-semibold">
                                  {applicant?.number}
                                </div>
                              </td>
                              <td className="text-sm font-light px-6 py-4">
                                <div className="text-sm font-semibold flex gap-1">
                                  <button
                                    onClick={() =>
                                      handleUpdateStatus(applicant?._id)
                                    }
                                    className={`${
                                      applicant?.status
                                        ? "hidden"
                                        : "flex"
                                    } btn btn-xs btn-success text-white`}
                                  >
                                    {applicant?.status ? "UnHire" : "Hire"}
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleUpdateStatusFalse(applicant?._id)
                                    }
                                    className={`${
                                      applicant?.status
                                        ? "flex"
                                        : "hidden"
                                    } btn btn-xs btn-error text-white`}
                                  >
                                    {applicant?.status ? "UnHire" : "Hire"}
                                  </button>
                                </div>
                              </td>

                              <td className="text-sm font-light px-14 py-4 whitespace-nowrap">
                                <a
                                  title="Resume/Link"
                                  href={applicant?.resume}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaRegAddressBook size={25} />
                                </a>
                              </td>
                              <td className="flex justify-center items-center mt-5">
                                <label
                                  htmlFor="candidate-modal"
                                  title="Click to send mail"
                                  onClick={() =>
                                    singleCandidates(applicant?._id)
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
