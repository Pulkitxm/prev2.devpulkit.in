import "./App.scss";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { set } from "./state/theme";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("isDark");
    if (theme === "true" || theme === "false")
      dispatch(set(theme === "true" ? true : false));
  }, []);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default App;
