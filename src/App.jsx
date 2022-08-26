import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAdmin from "./Auth/RequireAdmin/RequireAdmin";
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import RequireHr from "./Auth/RequireHr/RequireHr";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import useImage from "./Hooks/useImage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/Authentication/Login/Login";
import ResetPassword from "./Pages/Authentication/ResetPassword/ResetPassword";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import SignUpForHrManager from "./Pages/Authentication/SignUpForHrManager/SignUpForHrManager";
import Blog from "./Pages/Blog/Blog";
import BlogsDetail from "./Pages/Blog/BlogsDetail";
import Contact from "./Pages/ContactUs/Contact";
import ApplicantTracking from "./Pages/Features/ApplicantTracking/ApplicantTracking";
import Home from "./Pages/Home/Home/Home";
import AllJob from "./Pages/Jobs/AllJob/AllJob";
import JobDescription from "./Pages/Jobs/JobDescription/JobDescription";
import AppliedJobs from "./Pages/ManageDashboard/AppliedJobs/AppliedJobs";
import Candidates from "./Pages/ManageDashboard/Candidates/Candidates";

import CompanyDetails from "./Pages/ManageDashboard/CompanyDetails/CompanyDetails";
import Dashboard from "./Pages/ManageDashboard/Dashboard/Dashboard";
import EmployeeDetails from "./Pages/ManageDashboard/EmployeeRoot/EmployeeDetails";
import EmployeesRoot from "./Pages/ManageDashboard/EmployeeRoot/EmployeesRoot";
import HrJob from "./Pages/ManageDashboard/HrJob/HrJob";
import Inbox from "./Pages/ManageDashboard/Inbox/Inbox";
import AddNewJob from "./Pages/ManageDashboard/Jobs/AddNewJob";
import ManageAllJobs from "./Pages/ManageDashboard/ManageAllJobs/ManageAllJobs";
import AllHr from "./Pages/ManageDashboard/ManageHr/AllHr";
import Profile from "./Pages/ManageDashboard/Profile/Profile";
import Recruitment from "./Pages/ManageDashboard/Recruitment/Recruitment";
import SendMailCandidates from "./Pages/ManageDashboard/Recruitment/SendMailCandidates";
import WelcomeDashboard from "./Pages/ManageDashboard/WelcomeDashboard/WelcomeDashboard";
import Team from "./Pages/Team/Team";
import Navbar from "./Shared/Navbar/Navbar";
import NotFound from "./Shared/NotFound/NotFound";
import SupportAdmin from "./Shared/Support/SupportAdmin";

export const InitializeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);
  const [profileUrl] = useImage();

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "night"}>
      <InitializeContext.Provider
        value={{ handleThemeChange, theme, profileUrl }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Job Route Start */}

          <Route path="/jobs" element={<AllJob />} />
          <Route path="/job/:jobId" element={<JobDescription />} />

          {/* Job Route End  */}

          <Route
            path="applicant-tracking"
            element={<ApplicantTracking />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:blogId" element={<BlogsDetail />}></Route>
          <Route path="contact-us" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/hr" element={<SignUpForHrManager />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/support" element={<SupportAdmin />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<WelcomeDashboard />} />
            <Route
              path="job/addNew"
              element={
                <RequireHr>
                  <AddNewJob />
                </RequireHr>
              }
            />

            <Route
              path="hr-jobs"
              element={
                <RequireHr>
                  <HrJob />
                </RequireHr>
              }
            />

            <Route path="profile" element={<Profile />} />
            <Route
              path="employee"
              element={
                <RequireHr>
                  <EmployeesRoot />
                </RequireHr>
              }
            />

            <Route path="employee/:detailsId" element={<EmployeeDetails />} />

            <Route path="appliedJobs" element={<AppliedJobs />} />
            <Route path="jobs" element={<ManageAllJobs />} />
            <Route
              path="recruitment"
              element={
                <RequireHr>
                  <Recruitment />
                </RequireHr>
              }
            />
            <Route
              path="recruitment/:candidatesID"
              element={
                <RequireHr>
                  <SendMailCandidates />
                </RequireHr>
              }
            />
            <Route path="candidates" element={<Candidates />} />
            <Route path="candidates/:candidatesID" element={<Candidates />} />
            <Route path="mails" element={<Inbox />} />
            <Route path="company" element={<CompanyDetails />} />
            <Route
              path="allUsers"
              element={
                <RequireAdmin>
                  <AllHr />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ScrollButton />
        <Toaster />
      </InitializeContext.Provider>
    </div>
  );
}

export default App;
