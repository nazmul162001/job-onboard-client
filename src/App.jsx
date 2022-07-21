import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Team from "./pages/Team/Team";
import NotFound from "./components/Shared/NotFound/NotFound";
import { useEffect, useState } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton";

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
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ScrollButton />
    </div>
  );
}

export default App;
