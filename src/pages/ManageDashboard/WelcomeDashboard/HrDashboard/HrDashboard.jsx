import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import HrChart from "../../HrChart/HrChart";
import RecentApplicants from "./RecentApplicants/RecentApplicants";
import RecentJobs from "./RecentJobs/RecentJobs";

const HrDashboard = ({
  getApplicants,
  hrJobs,
  hrLoading,
  allEmployeDetails,
  revGetApplicants,
  revMyJob,
  allRecentApplicants
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="h-full main_dashboard static z-10 ">
        {/* main dashboard  */}
        <div className="">
          <div className="dashboard_route bg-base-100 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center lg:gap-3 pt-3">
            <div
              className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded cursor-pointer"
              onClick={() => navigate(`/dashboard/candidates`)}
            >
              <div className="icon p-5">
                <i class="ri-group-line text-white text-2xl rounded p-5 bg-rose-400"></i>
              </div>
              <div className="card_details text-black ">
                <h2 className="font-bold text-xl ">
                  {getApplicants ? getApplicants?.length : 0}
                </h2>
                <p className="text-[14px]">Active Candidate</p>
              </div>
            </div>
            <div
              className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded cursor-pointer"
              onClick={() => navigate(`/dashboard/hr-jobs`)}
            >
              <div className="icon p-5">
                <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-pink-500"></i>
              </div>
              <div className="card_details text-black flex flex-col justify-center text-start">
                <h2 className="font-bold text-xl">
                  {hrJobs ? hrJobs?.length : 0}
                </h2>
                <p className="text-[14px]">Active Jobs</p>
              </div>
            </div>
            <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
              <div className="icon p-5">
                <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-orange-400"></i>
              </div>
              <div className="card_details text-black flex flex-col justify-center text-start">
                <h2 className="font-bold text-xl">0</h2>
                <p className="text-[14px]">Draft Jobs</p>
              </div>
            </div>
            <div
              className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded cursor-pointer"
              onClick={() => navigate(`/dashboard/employee`)}
            >
              <div className="icon p-5">
                <i class="ri-team-line text-white text-2xl rounded p-5 bg-cyan-500 bg-opacity-70"></i>
              </div>
              <div className="card_details text-black flex flex-col justify-center text-start">
                <h2 className="font-bold text-xl">
                  {" "}
                  {hrLoading ? (
                    <Loading />
                  ) : allEmployeDetails ? (
                    allEmployeDetails.length
                  ) : (
                    0
                  )}
                </h2>
                <p className="text-[14px]">Team Members</p>
              </div>
            </div>
          </div>
          {/* welcome dashbord */}

          {/* Recent Applicants */}
          <div className="flex justify-between items-center">
            <h2 className="mt-5 mb-3 lg:pl-4 font-bold">Recent Applicants</h2>
            {allRecentApplicants?.length > 4 && (
              <button className="btn btn-sm btn-outline text-[12px] text-secondary lg:mr-4" onClick={() =>
                navigate(`/dashboard/allRecentApplicants`)
              }>
                See All Applicants
              </button>
            )}
          </div>
          {revGetApplicants?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
              {revGetApplicants.map((revApplicant, index) => (
                <RecentApplicants key={index} revApplicant={revApplicant} />
              ))}
            </div>
          ) : (
            <div className="recent-application p-4 bg-base-200 shadow rounded ">
              <p className="text-red-500">No Applicants Found</p>
            </div>
          )}

          {/* Recent Jobs  */}
          <h2 className="mt-5 mb-3 pl-4 font-bold">Recent Jobs</h2>
          {revMyJob?.length > 0 ? (
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="border-b bg-primary ">
                        <tr className="text-center">
                          <th
                            class="text-sm font-medium text-white px-6 py-4 "
                            scope="col"
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4 "
                          >
                            Job Title
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4 "
                          >
                            Posted Date
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4 "
                          >
                            Salary
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4 "
                          >
                            Location
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-left font-medium text-white px-6 py-4 "
                          >
                            Applicants
                          </th>
                          <th
                            scope="col"
                            class="text-sm  font-medium text-white px-6 py-4 "
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {revMyJob?.map((myJob, index) => (
                          <RecentJobs key={index} myJob={myJob} index={index} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="recent-application p-4 bg-base-200 shadow  rounded ">
              <p className="text-red-500">No Jobs Found</p>
            </div>
          )}

          <HrChart />
        </div>
      </section>
    </div>
  );
};

export default HrDashboard;
