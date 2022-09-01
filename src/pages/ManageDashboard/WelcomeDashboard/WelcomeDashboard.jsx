import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import useAdmin from "../../../Hooks/useAdmin";
import useCandidate from "../../../Hooks/useCandidate";
import useEmployeeInfo from "../../../Hooks/useEmployeeInfo";
import useHrJob from "../../../Hooks/useHrJob";
import useHrManager from "../../../Hooks/useHrManager";
import useTitle from "../../../Hooks/useTitle";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import CandidateDashboard from "./CandidateDashboard/CandidateDashboard";
import HrDashboard from "./HrDashboard/HrDashboard";


const WelcomeDashboard = () => {
  useTitle("Dashboard");
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [hr, hrLoading] = useHrManager(user);
  // console.log(hr);



  const { data } = useEmployeeInfo();
  const allEmployeDetails = data?.data;

  const [hrJobs] = useHrJob();
  let revMyJob = [].concat(hrJobs).reverse().slice(0, 3);
  // console.log(revMyJob);

  const { getApplicants } = useCandidate();
  const revGetApplicants = [].concat(getApplicants).reverse().slice(0, 4);
  const allRecentApplicants = [].concat(getApplicants).reverse();
  // console.log(revGetApplicants);

  if (adminLoading || hrLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-base-300 ">
      {/* Hr Dashboard  */}
      {hr && (
        <HrDashboard
          getApplicants={getApplicants}
          hrJobs={hrJobs}
          hrLoading={hrLoading}
          allEmployeDetails={allEmployeDetails}
          revGetApplicants={revGetApplicants}
          revMyJob={revMyJob}
          allRecentApplicants={allRecentApplicants}
        />
      )}

      {/* Candidate Dashboard  */}
      {!admin && !hr && user && <CandidateDashboard />}

      {/* Admin Dashboard  */}
      {admin && <AdminDashboard />}
    </div>
  );
};

export default WelcomeDashboard;
