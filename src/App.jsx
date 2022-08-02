import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AboutUs from "./pages/AboutUs/AboutUs";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Employers from "./pages/Dashboard/Employers/Employers";
import WelcomeDashboard from "./pages/Dashboard/WelcomeDashboard/WelcomeDashboard";
import Home from "./pages/Home/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import ResetPassword from "./pages/Login/ResetPassword/ResetPassword";
import SignUp from "./pages/Login/SignUp/SignUp";
import Team from "./pages/Team/Team";
export const InitializeContext = createContext(null)

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
      <InitializeContext.Provider value={{handleThemeChange, theme}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
          }
        >
          <Route index element={<WelcomeDashboard />} />
          <Route path="/dashboard/employers" element={<Employers/>}/>
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
