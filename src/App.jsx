import "./App.css";
import { createContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Team from "./pages/Team/Team";
import NotFound from "./components/Shared/NotFound/NotFound";
import { useState } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Login from "./pages/Login/Login/Login";
import SignUp from "./pages/Login/SignUp/SignUp";
import ResetPassword from "./pages/Login/ResetPassword/ResetPassword";
import AboutUs from "./pages/AboutUs/AboutUs";
import Jobs from "./pages/Jobs/Jobs";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import WelcomeDashboard from "./pages/Dashboard/WelcomeDashboard/WelcomeDashboard";
import JobDescription from "./pages/Jobs/JobDescription/JobDescription";
import AddNewJob from "./pages/Dashboard/Jobs/AddNewJob";
import Employers from "./pages/Dashboard/Employers/Employers";
import Profile from "./pages/Dashboard/Profile/Profile";
import Recruitment from "./pages/Dashboard/Recruitment/Recruitment";
import Inbox from "./pages/Dashboard/Inbox/Inbox";
import AllHr from "./pages/Dashboard/ManageHr/AllHr";
import RequireAdmin from "./pages/Login/RequireAdmin/RequireAdmin";
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
            <Route path="employers" element={<Employers />} />
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
