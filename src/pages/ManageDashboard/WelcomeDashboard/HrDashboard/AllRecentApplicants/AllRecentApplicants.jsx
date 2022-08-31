import React from "react";
import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useCandidate from "../../../../../Hooks/useCandidate";

const AllRecentApplicants = () => {
  const { getApplicants } = useCandidate();
  const allRecentApplicants = [].concat(getApplicants).reverse();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <h2
          className="mt-5 mb-3 lg:pl-4 font-bold flex justify-center items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <span className="font-extrabold text-xl">
            <ImArrowLeft2 />
          </span>
          Recent Applicants
        </h2>
      </div>
      {allRecentApplicants?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-3">
          {allRecentApplicants?.map((revApplicant, index) => (
            <div className="shadow-lg hover:shadow-2xl p-5 text-center space-y-4 border rounded-lg ">
              <div className="avatar py-2 mx-auto relative">
                <label className="absolute left-[-60px] top-2 text-[12px] border px-2  rounded-xl">
                  Applied{" "}
                </label>
                <div className="w-16 ring-2 rounded-full ">
                  {revApplicant?.profileUrl ? (
                    <img src={revApplicant?.profileUrl} alt="candidate" />
                  ) : (
                    <img
                      src="https://i.ibb.co/xY0rfV4/avatar.jpg"
                      alt="demoCandidateImg"
                    />
                  )}
                </div>
              </div>
              <h2 className="font-semibold">{revApplicant?.displayName}</h2>
              <h3 className="text-[15px]">{revApplicant?.jobTitle}</h3>
              <button
                className="btn btn-sm btn-outline text-[12px] text-secondary"
                onClick={() =>
                  navigate(`/dashboard/candidates/${revApplicant?._id}`)
                }
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="recent-application p-4 bg-base-200 shadow rounded ">
          <p className="text-red-500">No Applicants Found</p>
        </div>
      )}
    </>
  );
};

export default AllRecentApplicants;
