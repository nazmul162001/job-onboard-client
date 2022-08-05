import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useTitle from "../../../hooks/useTitle";
import auth from "../../../components/Firebase/Firebase.init";
import './WelcomeDashboard.css'
import DashboardReferrals from "../DashboardReferrals/DashboardReferrals";
import DashboardCelebration from "../DashboardCelebration/DashboardCelebration";
import DashboardNewJoinees from "../DashboardNewJoinees/DashboardNewJoinees";

const WelcomeDashboard = () => {
  useTitle("Dashboard");
  const [user] = useAuthState(auth);
  return (
    <div className="">
      {user && (
        <div className="">
          <section className="h-full main_dashboard static z-10 ">
            {/* main dashboard  */}
            <div className="content_left">
            <div className="dashboard_route h-72 bg-white m-5">
              <h2 className="p-5 text-xl">Interview for me</h2>
            </div>
              <DashboardReferrals />
              <DashboardCelebration />
              <DashboardNewJoinees />
            </div>
            {/* aside bar  */}
            <aside className="bg-white h-full">
              <h2 className="text-center p-5">My sidebar</h2>
            </aside>
          </section>
        </div>
      )}
    </div>
  );
};

export default WelcomeDashboard;
