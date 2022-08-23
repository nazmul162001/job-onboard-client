import moment from 'moment';
import React from 'react';
import Loading from '../../../../Components/Loading/Loading';
import useAppliedJobs from '../../../../Hooks/useAppliedJobs';
import useTitle from '../../../../Hooks/useTitle';

const CandidateDashboard = () => {
  useTitle("Candidate Dashboard");
  const { appliedJobs, isLoading } = useAppliedJobs()

  const revAppliedJobs = [].concat(appliedJobs).reverse().slice(0, 4)
  console.log(revAppliedJobs);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <div>
      <div className="">
        <section className="h-full main_dashboard static z-10 ">

          <div className="">
            <div className="dashboard_route bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-3">
              <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                <div className="icon p-5">
                  <i class="ri-group-line text-white text-2xl rounded p-5 bg-rose-400"></i>
                </div>
                <div className="card_details text-black">
                  <h2 className="font-bold text-xl ">{appliedJobs ? appliedJobs?.length : 0}</h2>
                  <p className="text-[14px]">Applied Job</p>
                </div>
              </div>
              <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                <div className="icon p-5">
                  <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-pink-500"></i>
                </div>
                <div className="card_details text-black">
                  <h2 className="font-bold text-xl">0</h2>
                  <p className="text-[14px]">Unfinish Task</p>
                </div>
              </div>
              <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                <div className="icon p-5">
                  <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-orange-400"></i>
                </div>
                <div className="card_details text-black">
                  <h2 className="font-bold text-xl">0</h2>
                  <p className="text-[14px]">New Task</p>
                </div>
              </div>
            </div>


            {/* Recent Applied Job */}
            <h2 className="mt-5 mb-3 lg:pl-4 font-bold">Recent Applied Job</h2>
            {revAppliedJobs?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {revAppliedJobs.map((revApplicant, index) => {
                  return <div key={index} className="shadow-lg hover:shadow-2xl p-5  space-y-4 border rounded-lg relative">
                    <label class="absolute right-2 top-2 text-[11px] border px-2  rounded-xl"> {revApplicant?.createdDate.slice(11, 16)} , {moment(revApplicant?.createdDate).format("MMMM DD")} </label>
                    <div className="text-center space-y-4 py-5">
                      <h3 className=''>{revApplicant?.jobTitle}</h3>
                      <h2 className='text-xl font-semibold'>{revApplicant?.companyName}</h2>
                      <button className='btn btn-sm btn-outline text-[12px] text-secondary '>View Details</button>
                    </div>
                  </div>
                })}
              </div>
            ) : (
              <div className="recent-application p-4 bg-base-200 shadow rounded ">
                <p className='text-red-500'>No Applicants Found</p>
              </div>
            )}

            {/* Recent Jobs  */}
            <h2 className="mt-5 mb-3 lg:pl-4 font-bold">Recent Jobs</h2>
            {/* {revMyJob?.length > 0 ? (
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
              <div className="recent-application p-4 bg-base-200 shadow  rounded ">
                <p className='text-red-500'>No Jobs Found</p>
              </div>
            )}  */}


          </div>
        </section>
      </div>
    </div>
  );
};

export default CandidateDashboard;