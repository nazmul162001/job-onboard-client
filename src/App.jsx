import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAdmin from "./Auth/RequireAdmin/RequireAdmin";
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/Authentication/Login/Login";
import ResetPassword from "./Pages/Authentication/ResetPassword/ResetPassword";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import Home from "./Pages/Home/Home/Home";
import JobDescription from "./Pages/Jobs/JobDescription/JobDescription";
import Jobs from "./Pages/Jobs/Jobs";
import Dashboard from "./Pages/ManageDashboard/Dashboard/Dashboard";
import EmployeeDetails from "./Pages/ManageDashboard/EmployeeRoot/EmployeeDetails";
import EmployeesRoot from "./Pages/ManageDashboard/EmployeeRoot/EmployeesRoot";
import Inbox from "./Pages/ManageDashboard/Inbox/Inbox";
import AddNewJob from "./Pages/ManageDashboard/Jobs/AddNewJob";
import AllHr from "./Pages/ManageDashboard/ManageHr/AllHr";
import Profile from "./Pages/ManageDashboard/Profile/Profile";
import Recruitment from "./Pages/ManageDashboard/Recruitment/Recruitment";
import WelcomeDashboard from "./Pages/ManageDashboard/WelcomeDashboard/WelcomeDashboard";
import Team from "./Pages/Team/Team";
import Navbar from "./Shared/Navbar/Navbar";
import NotFound from "./Shared/NotFound/NotFound";
export const InitializeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "night"}>
      <InitializeContext.Provider value={{ handleThemeChange, theme }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Job Route Start */}

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:jobId" element={<JobDescription />} />

          {/* Job Route End  */}

          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<WelcomeDashboard />} />
            <Route path="job/addNew" element={<AddNewJob />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="employers" element={<Employers />} /> */}
            <Route path="employee" element={<EmployeesRoot />} />
            <Route path="employee/:Id" element={<EmployeeDetails />} />
            <Route path="recruitment" element={<Recruitment />} />
            <Route path="mails" element={<Inbox />} />
            <Route
              path="allHr"
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
