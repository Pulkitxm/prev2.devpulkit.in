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
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("isDark");
    if (theme === "true" || theme === "false")
      dispatch(set(theme === "true" ? true : false));
    
    const fetchData = async () => {
      let res={};
      try{
        res = await axios.get("https://geolocation-db.com/json/");
      }catch(err){
        console.log(err);
      }
      const queryParams = new URLSearchParams(location.search);
      const visitValue = queryParams.get("visit");
      let referringUrl;
      referringUrl = queryParams.get("redirect");

      const dateTime ={
        dateTime: new Date(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        timezon:Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      const userInformation = {
        isOnline: navigator.onLine,
        connectionType: navigator.connection
          ? navigator.connection.effectiveType
          : "unknown",
        language: navigator.language,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        referringUrl,
        currentUrl: window.location.href,
        dateTime,
        ...res.data,
      };
      userInformation.ip = userInformation["IPv4"];
      delete userInformation.IPv4;
      if (visitValue == "developement") {
        console.log("Admin device detected");
        console.log(userInformation);
      } else {
        axios.post("https://portfolio-backend-ecru-one.vercel.app/api/users", userInformation)
          .then(res=>{
            console.log(res.data);
          })
          .catch(err=>{
            console.log(err);
          });
      }
    };
    fetchData();
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
          {/* <Route path="/work" element={<Projects />} /> */}
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default App;
