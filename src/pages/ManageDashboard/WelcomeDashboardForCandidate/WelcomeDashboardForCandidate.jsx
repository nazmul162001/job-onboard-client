import React from "react";
import auth from "../../../Auth/Firebase/Firebase.init";

const WelcomeDashboardForCandidate = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <h2 className="text-4xl">Welcome, {auth?.currentUser?.displayName}</h2>
    </div>
  );
};

export default WelcomeDashboardForCandidate;
