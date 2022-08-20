import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useTitle from "../../../Hooks/useTitle";
import auth from "../../../Auth/Firebase/Firebase.init";
import RecentApplication from "../RecentApplicants/RecentApplicants";
import RecentJobs from "../RecentJobs/RecentJobs";
import HrChart from "../HrChart/HrChart";
import useHrJob from "../../../Hooks/useHrJob";
const WelcomeDashboard = () => {
  useTitle("Dashboard");
  const [user] = useAuthState(auth);

  const [hrJobs] = useHrJob()
  


  return (
    <div className="bg-base-300">
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
                <div className="card_details">
                  <h2 className="font-bold text-xl">0</h2>
                  <p className="text-[14px]">Active Candidate</p>
                </div>
              </div>
              <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                <div className="icon p-5">
                    <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-pink-500"></i>
                </div>
                <div className="card_details">
                  <h2 className="font-bold text-xl">{hrJobs?.length}</h2>
                  <p className="text-[14px]">Active Jobs</p>
                </div>
              </div>
              <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                <div className="icon p-5">
                    <i class="ri-briefcase-line text-white text-2xl rounded p-5 bg-orange-400"></i>
                </div>
                <div className="card_details">
                  <h2 className="font-bold text-xl">0</h2>
                  <p className="text-[14px]">Draft Jobs</p>
                </div>
              </div>
              <div className="card_content my-5 flex bg-orange-100 bg-opacity-60 py-2 rounded">
                <div className="icon p-5">
                    <i class="ri-team-line text-white text-2xl rounded p-5 bg-cyan-500 bg-opacity-70"></i>
                </div>
                <div className="card_details">
                  <h2 className="font-bold text-xl">0</h2>
                  <p className="text-[14px]">Team Members</p>
                </div>
              </div>
            </div>
            {/* welcome dashbord */}
            <RecentApplication />
            <RecentJobs />
            <HrChart />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default WelcomeDashboard;
