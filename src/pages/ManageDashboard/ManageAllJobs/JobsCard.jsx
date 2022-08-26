import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiDelete } from "react-icons/fi";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";

const JobsCard = ({ job, refetch }) => {
  const [expand, setExpand] = useState(false);
  const { _id, companyName, jobTitle, location, salary, jobType, value } = job;

  // console.log(job)

  const handleJobDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        fetch(`${BASE_API}/jobs/all/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result?.acknowledged) {
              toast.success(`${jobTitle} is deleted.`);
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="shadow-lg hover:shadow-2xl border-l-2 border-primary relative rounded-lg">
      <label
        className="absolute right-3 top-2 text-red-500 cursor-pointer"
        onClick={() => handleJobDelete(_id)}
      >
        <FiDelete className="text-2xl" />
      </label>

      <div className="p-5 space-y-5">
        <div className="space-y-2">
          <div>
            <h2 className="text-sm font-semibold">{companyName}</h2>
            <br />
            <p className="text-lg md:text-xl lg:text-xl font-bold ">
              {jobTitle}
            </p>
          </div>
        </div>
        
        {/* <div dangerouslySetInnerHTML={{ __html: value.slice(0, 50) }} className='prose max-w-full prose-h2:my-0 prose-h2:mb-2 prose-p:my-0 prose-h1:text-2xl prose-p:text-md  prose-p:text-[#292828] md:prose-li:text-md md:prose-ol:text-md'></div> */}

        <div>
          {!expand && value?.slice(0, 50) + "..."}{" "}
          {!expand && (
            <button
              className="text-primary underline text-[15px]"
              onClick={() => setExpand(true)}
            >
              Read more
            </button>
          )}
          {expand && value}{" "}
          {expand && (
            <button
              className="text-primary underline text-[15px]"
              onClick={() => setExpand(false)}
            >
              Show less
            </button>
          )}
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

export default JobsCard;
