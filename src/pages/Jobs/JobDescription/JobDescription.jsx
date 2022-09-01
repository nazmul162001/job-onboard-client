import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImArrowLeft2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { fetchAppliedJobs } from "../../../Features/AppliedJobs/AppliedJobsSlice";
import useAdmin from "../../../Hooks/useAdmin";
import useHrManager from "../../../Hooks/useHrManager";
import useJob from "../../../Hooks/useJob";
import Footer from "../../../Shared/Footer/Footer";
import ApplicantModal from "./ApplicantModal";
const JobDescription = () => {
  const { jobId } = useParams();
  const [job] = useJob(jobId);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [hr] = useHrManager(user);
  const location = useLocation();
  // const { appliedJobs, isLoading } = useAppliedJobs([]);
  // console.log(appliedJobs)
  //Handle Modal Disable When Job Already Applied
  const { isLoading, appliedJobs } = useSelector((state) => state.appliedJobs);
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  // console.log(exists)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppliedJobs());
  }, [dispatch]);

  console.log(appliedJobs);

  useEffect(() => {
    if (user) {
      const applied = appliedJobs?.map((appliedJ) => appliedJ?.jobPostId);
      const exists = applied?.find((j) => j === jobId);
      if (exists) {
        setAlreadyApplied(true);
      } else {
        setAlreadyApplied(false);
      }
    }
  }, [appliedJobs, jobId, user]);
  // console.log(alreadyApplied);

  // console.log(job)

  const guestNavigate = () => {
    navigate("/login?return=" + location.pathname);
  };

  const back = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      {/* Description Top Section  */}
      <div className="bg-[#222223] ">
        <div className="shadow-md py-10 px-8 md:px-28 lg:px-12 space-y-5 container mx-auto text-white">
          <div className="space-y-2">
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-1 justify-between">
              <div className="flex lg:justify-center lg:items-center gap-2 pb-4 lg:pb-0">
                <div
                  onClick={back}
                  className="flex justify-center items-center gap-x-2 cursor-pointer hover:text-primary"
                >
                  <span className="font-extrabold text-xl">
                    <ImArrowLeft2 />
                  </span>
                  <h2 className="text-xl md:text-xl font-bold ">
                    {job?.jobTitle}
                  </h2>
                </div>
                <h2 className="text-xl md:text-lg lg:text-xl font-mono md:mt-1 lg:mt-0  font-bold  hidden md:block">
                  {" "}
                  | Vacancy : {job?.openingPosition}
                </h2>
              </div>
              <p className="text-md md:text-xl lg:text-2xl md:font-bold text-white font-mono">
                {job?.companyName}
              </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row space-y-2 gap-3 lg:gap-0  justify-between">
              <p className="flex text-white ">
                {" "}
                <span className="px-1 pt-1">
                  <HiOutlineLocationMarker />
                </span>{" "}
                {job?.location}{" "}
              </p>
              <p className=" text-white text-[15px] ">
                Company Employees : {job?.employees}
              </p>
            </div>
          </div>
          <p className="text-white">
            Salary : ${job?.salary} <small>/ m</small>
          </p>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-1">
            <span className="lg:pt-4">Work Type : {job?.jobType}</span>
            {user ? (
              <div>
                {hr || admin ? (
                  <></>
                ) : (
                  <>
                    {alreadyApplied ? (
                      <button className="btn bg-gray-400 hover:bg-gray-400 border-none cursor-not-allowed text-white">
                        Already Applied
                      </button>
                    ) : (
                      <label
                        htmlFor="applicant-modal"
                        className="flex justify-center px-5 py-3 bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-xl text-white cursor-pointer w-1/2 md:w-[10rem]"
                      >
                        Apply Now
                      </label>
                    )}
                  </>
                )}
              </div>
            ) : (
              <>
                <label
                  className="flex justify-center px-5 py-3 bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-xl text-white cursor-pointer w-1/2 md:w-[10rem]"
                  onClick={guestNavigate}
                >
                  Apply Now
                </label>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Description Section  */}
      <div className=" py-8 px-5 md:px-28 lg:px-12 space-y-5 container mx-auto">
        <h2 className="text-2xl lg:text-2xl lg:pb-5 font-bold">
          Job Description :{" "}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: job?.value }}
          className="prose max-w-full prose-h2:my-0 prose-h2:mb-2 prose-p:my-0 prose-h1:text-2xl prose-p:text-md md:prose-li:text-md md:prose-ol:text-md"
        ></div>

        {/* Modal  */}
        <div className="flex justify-center items-center pt-5 md:mt-0 text-center md:py-8 ">
          {user ? (
            <div>
              {hr || admin ? (
                <></>
              ) : (
                <>
                  {alreadyApplied ? (
                    <button className="btn bg-gray-400 hover:bg-gray-400 border-none cursor-not-allowed text-white">
                      Already Applied
                    </button>
                  ) : (
                    <label
                      htmlFor="applicant-modal"
                      className="flex justify-center px-5 py-3 bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-xl text-white cursor-pointer w-1/2 md:w-[10rem]"
                    >
                      Apply Now
                    </label>
                  )}
                </>
              )}
            </div>
          ) : (
            <>
              <label
                className="flex justify-center px-5 py-3 bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-xl text-white cursor-pointer w-1/2 md:w-[10rem]"
                onClick={guestNavigate}
              >
                Apply Now
              </label>
            </>
          )}
        </div>
      </div>

      {/* Applicant Aodal  */}
      {job && <ApplicantModal job={job}></ApplicantModal>}

      <Footer />
    </div>
  );
};

export default JobDescription;
