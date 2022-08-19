import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BASE_API } from "../../../config";
import Loading from "../../../Components/Loading/Loading";

const HrJobRow = ({ job, index, refetch, isLoading }) => {
  const [editJobs, setEditJobs] = useState(null);
  const { _id, jobTitle, jobType, salary, location, employees, openingPosition } = job;

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateInfo = {
      jobTitle: e.target.jobTitle.value,
      jobType: e.target.jobType.value,
      location: e.target.location.value,
      salary: e.target.salary.value,
      employees: e.target.employees.value,
      openingPosition: e.target.openingPosition.value,
    };

    fetch(`${BASE_API}/jobs/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          text: `Successfully update`,
          icon: "success",
          confirmButtonText: "Thank you.",
        });
        refetch();
        setEditJobs(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = () => {
    const url = `${BASE_API}/jobs/${_id}`;
    Swal.fire({
      text: `Are you sure delete this job ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((data) => {
          // console.log(data);
          if (data.status) {
            Swal.fire({
              text: `Successfully Delete `,
              icon: "success",
              confirmButtonText: "Okay",
            });
            refetch();
          }
        });
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <tr className="text-center">
        <th>{index + 1}.</th>
        <td>{job.jobTitle}</td>
        <td>{job.createdDate?.slice(3, 15)}</td>
        <td>
          ${job.salary} <small>/m</small>
        </td>
        <td>{job?.location}</td>
        <td className="flex justify-evenly">
          <label
            for="editJobs"
            className="btn btn-sm btn-circle "
            onClick={() =>
              setEditJobs({
                _id,
                jobTitle,
                salary,
                location,
                employees,
                openingPosition,
              })
            }
          >
            <FiEdit className="text-white" />
          </label>
          <button onClick={handleDelete} className="text-[24px] text-red-500">
            <AiOutlineDelete />
          </button>
        </td>
      </tr>
      {editJobs && (
        <>
          <input type="checkbox" id="editJobs" className="modal-toggle " />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box relative">
              <label
                for="editJobs"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>

              <form
                onSubmit={handleUpdate}
                className="flex flex-col gap-5 space-y-1"
              >
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex flex-col space-y-1 gap-y-1">
                    <span className="py-1 text-2xl pl-3 hover:border-primary duration-300">
                      {jobTitle}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <div className="flex flex-col space-y-1 gap-y-1">
                    <label className="text-sm pl-2">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={jobTitle}
                      name="jobTitle"
                      className="border py-1 rounded-lg pl-3 hover:border-primary duration-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1 gap-y-1">
                    <label className="text-sm pl-2">
                      Job Type <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={jobType}
                      name="jobType"
                      className="border py-1 rounded-lg pl-3 hover:border-primary duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1 gap-y-1">
                    <label className="text-sm pl-2">
                      Work Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={location}
                      name="location"
                      className="border py-1 rounded-lg pl-3 hover:border-primary duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  <div className="flex flex-col space-y-1 ">
                    <label className="text-sm pl-2">
                      Salary (USD )<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min={300}
                      defaultValue={salary}
                      name="salary"
                      className="border py-1 rounded-lg pl-3 hover:border-primary duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1 ">
                    <label className="text-sm pl-2">
                      Employees <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min={1}
                      defaultValue={employees}
                      name="employees"
                      className="border py-1 rounded-lg pl-3 hover:border-primary duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1 ">
                    <label className="text-sm pl-2">
                      Position Opening <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min={1}
                      defaultValue={openingPosition}
                      name="openingPosition"
                      className="border py-1 rounded-lg pl-3 hover:border-primary duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="pb-8">
                  <button className="px-5 py-3 border bg-primary duration-300 hover:bg-[#6746b3] rounded-lg text-white">
                    Update Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HrJobRow;
