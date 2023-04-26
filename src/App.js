import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MarketPage from "./components/MarketPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom";
import ItemComponent from "./components/ItemComponent";

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
      <Routes>
        <Route path="/market-place" element={<MarketPage />} />
        <Route path="/item/:id" element={<ItemComponent />} />
      </Routes>
    </>
  );
}

export default App;
