import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useTitle from "../../../hooks/useTitle";
import auth from "../../../components/Firebase/Firebase.init";
import './WelcomeDashboard.css'

const WelcomeDashboard = () => {
  useTitle("Welcome Dashboard");
  const [user] = useAuthState(auth);
  return (
    <div className="">
      {user && (
        <div className="">
          <section className="h-screen main_dashboard static z-10 ">
            <div className="dashboard_route h-72 bg-white m-5">
              <h2 className="p-5 text-xl font-bold">Interview for me</h2>
            </div>
            <aside className="bg-white">
              <h2 className="text-center p-5">My sidebar</h2>
            </aside>
          </section>
        </div>
      )}
    </div>
  );
};

export default WelcomeDashboard;
