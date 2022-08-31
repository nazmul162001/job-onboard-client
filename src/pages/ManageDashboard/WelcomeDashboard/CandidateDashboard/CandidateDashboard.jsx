import moment from "moment";
import React, { useContext } from "react";
import { InitializeContext } from "../../../../App";
import Loading from "../../../../Components/Loading/Loading";
import useAppliedJobs from "../../../../Hooks/useAppliedJobs";
import useTitle from "../../../../Hooks/useTitle";
import { useNavigate } from "react-router-dom";
import useJobTasks from "../../../../Hooks/useJobTasks";
import RecentTasks from "./JobTask/RecentTasks/RecentTasks";

const CandidateDashboard = () => {
  useTitle("Dashboard");
  const { theme } = useContext(InitializeContext);
  const { appliedJobs, isLoading } = useAppliedJobs();
  const navigate = useNavigate();

  // Task
  const { data } = useJobTasks();
  const allTasks = data?.data;
  console.log(allTasks);
  const revRecentTask = [].concat(allTasks).reverse().slice(0, 3);

  if (isLoading) {
    return <Loading />;
  }

  const revAppliedJobs = [].concat(appliedJobs).reverse().slice(0, 4);
  // console.log(revAppliedJobs);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-screen ">
      <section className="h-full main_dashboard static z-10 ">
        {/* Dashboard Top  */}
        <div className="bg-base-300">
          <div className="dashboard_route bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-3">
            <div
              className={`card_content my-5 flex ${theme ? "bg-base-300" : "bg-orange-100 bg-opacity-60"
                } py-2 rounded cursor-pointer`}
              onClick={() => navigate(`/dashboard/appliedJobs`)}
            >
              <div className="icon p-5">
                <i className="ri-group-line text-white text-2xl rounded p-5 bg-rose-400"></i>
              </div>
              <div
                className={`card_details ${theme ? "text-white" : "text-black"
                  } flex flex-col justify-center text-start`}
              >
                <h2 className="font-bold text-xl ">
                  {appliedJobs ? appliedJobs?.length : 0}
                </h2>
                <p className="text-[14px]">Applied Job</p>
              </div>
            </div>
            <div
              className={`card_content my-5 flex ${theme ? "bg-base-300" : "bg-orange-100 bg-opacity-60"
                } py-2 rounded cursor-pointer`}
              onClick={() => navigate(`/dashboard/task`)}
            >
              <div className="icon p-5">
                <i className="ri-briefcase-line text-white text-2xl rounded p-5 bg-orange-400"></i>
              </div>
              <div
                className={`card_details ${theme ? "text-white" : "text-black"
                  } flex flex-col justify-center text-start`}
              >
                <h2 className="font-bold text-xl">
                  {allTasks ? allTasks?.length : 0}
                </h2>
                <p className="text-[14px]">All Task</p>
              </div>
            </div>

            <div
              className={`card_content my-5 flex ${theme ? "bg-base-300" : "bg-orange-100 bg-opacity-60"
                } py-2 rounded cursor-pointer`}
              onClick={() => navigate(`/dashboard/task`)}
            >
              <div className="icon p-5">
                <i className="ri-briefcase-line text-white text-2xl rounded p-5 bg-pink-500"></i>
              </div>
              <div
                className={`card_details ${theme ? "text-white" : "text-black"
                  } flex flex-col justify-center text-start`}
              >
                <h2 className="font-bold text-xl">0</h2>
                <p className="text-[14px]">Submited Task</p>
              </div>
            </div>
          </div>

          {/* Recent Applied Job */}
          <h2 className="mt-5 mb-3 pl-4 font-bold">Recent Applied Job</h2>
          {revAppliedJobs?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
              {revAppliedJobs.map((revApplicant, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-lg hover:shadow-2xl p-5  space-y-4 border rounded-lg relative"
                  >
                    <label className="absolute right-2 top-2 text-[11px] border px-2  rounded-xl">
                      {moment(revApplicant?.createdDate).format("MMMM DD")}{" "}
                    </label>
                    <div className="text-center space-y-4 py-5">
                      <h3 className="">{revApplicant?.jobTitle}</h3>
                      <h2 className="text-xl font-semibold">
                        {revApplicant?.companyName}
                      </h2>
                      <button
                        onClick={() =>
                          navigate(`/job/${revApplicant?.jobPostId}`)
                        }
                        className="btn btn-sm btn-outline text-[12px] text-secondary "
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="recent-application p-4 bg-base-200 shadow rounded ">
              <p className="text-red-500">No Applicants Found</p>
            </div>
          )}

          {/* Recent Task  */}
          <h2 className="mt-5 mb-3 pl-4 font-bold">Recent Task</h2>
          {revRecentTask?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
              {revRecentTask.map((revTask, index) => (
                <RecentTasks key={index} revTask={revTask} />
              ))}
            </div>
          ) : (
            <div className="recent-application p-4 bg-base-200 shadow rounded ">
              <p className="text-red-500">No Task Found</p>
            </div>
          )}

          {/* Submitted Task  */}
          <h2 className="mt-5 mb-3 pl-4 font-bold">Submitted Task</h2>
          <div className="recent-application p-4 bg-base-200 shadow rounded ">
            <p className="text-red-500">No Task Found</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidateDashboard;
