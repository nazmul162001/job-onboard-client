import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useTitle from "../../../Hooks/useTitle";
import auth from "../../../Auth/Firebase/Firebase.init";
import RecentApplication from "./RecentApplicants/RecentApplicants";
import RecentJobs from "./RecentJobs/RecentJobs";
import HrChart from "../HrChart/HrChart";
import useHrJob from "../../../Hooks/useHrJob";
import useCandidate from "../../../Hooks/useCandidate";
import useEmployeeInfo from "../../../Hooks/useEmployeeInfo";


const WelcomeDashboard = () => {
  useTitle("Dashboard");
  const [user] = useAuthState(auth);

  const { data } = useEmployeeInfo()
  const allEmployeDetails = data?.data

  const [hrJobs] = useHrJob()
  let revMyJob = [].concat(hrJobs).reverse().slice(0, 3);
  // console.log(revMyJob);


  const { getApplicants } = useCandidate()
  const revGetApplicants = [].concat(getApplicants).reverse().slice(0, 4)
  // console.log(revGetApplicants);

  return (
    <div className="bg-base-300 ">
      {user && (
        <div className="">
          <section className="h-full main_dashboard static z-10 ">
            {/* main dashboard  */}
            <div className="">
              <div className="dashboard_route bg-white grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-3">
                <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                  <div className="icon p-5">
                    <i class="ri-group-line text-white text-2xl rounded p-5 bg-rose-400"></i>
                  </div>
                  <div className="card_details text-black">
                    <h2 className="font-bold text-xl ">{getApplicants ? getApplicants?.length : 0}</h2>
                    <p className="text-[14px]">Active Candidate</p>
                  </div>
                </div>
                <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                  <div className="icon p-5">
                    <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-pink-500"></i>
                  </div>
                  <div className="card_details text-black">
                    <h2 className="font-bold text-xl">{hrJobs ? hrJobs?.length : 0}</h2>
                    <p className="text-[14px]">Active Jobs</p>
                  </div>
                </div>
                <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                  <div className="icon p-5">
                    <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-orange-400"></i>
                  </div>
                  <div className="card_details text-black">
                    <h2 className="font-bold text-xl">0</h2>
                    <p className="text-[14px]">Draft Jobs</p>
                  </div>
                </div>
                <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                  <div className="icon p-5">
                    <i class="ri-team-line text-white text-2xl rounded p-5 bg-cyan-500 bg-opacity-70"></i>
                  </div>
                  <div className="card_details text-black">
                    <h2 className="font-bold text-xl">{allEmployeDetails ? allEmployeDetails?.length : 0}</h2>
                    <p className="text-[14px]">Team Members</p>
                  </div>
                </div>
              </div>
              {/* welcome dashbord */}


              {/* Recent Applicants */}
              <h2 className="mt-5 mb-3 font-bold">Recent Applicants</h2>
              {revGetApplicants?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {revGetApplicants.map((revApplicant,index) => (
                    <RecentApplication 
                    key={index}
                    revApplicant={revApplicant}
                    />
                  ))}
                </div>
              ) : (
                <div className="recent-application p-4 bg-orange-100 bg-opacity-40 rounded ">
                  <p className='text-red-500'>No Applicants Found</p>
                </div>
              )}



              {/* Recent Jobs  */}
              <h2 className="mt-5 mb-3 font-bold">Recent Jobs</h2>
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
                                scope="col">No</th>
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
                              <RecentJobs
                                key={index}
                                myJob={myJob}
                                index={index}
                              />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="recent-application p-4 bg-orange-100 bg-opacity-40 rounded ">
                  <p className='text-red-500'>No Jobs Found</p>
                </div>
              )}

              <HrChart />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default WelcomeDashboard;
