import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Team from "./pages/Team/Team";
import NotFound from "./components/Shared/NotFound/NotFound";
import { useEffect, useState } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Login from "./pages/Login/Login/Login";
import SignUp from "./pages/Login/SignUp/SignUp";
import ResetPassword from "./pages/Login/ResetPassword/ResetPassword";
import AboutUs from "./pages/AboutUs/AboutUs";
import Jobs from "./pages/Jobs/Jobs";

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
      <Navbar handleThemeChange={handleThemeChange} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ScrollButton />
    </div>
  );
}

export default App;
