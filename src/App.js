import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MarketPage from "./components/MarketPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <MarketPage />
    </>
  );
}

export default App;
