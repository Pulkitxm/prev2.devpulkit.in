import "./App.scss";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { set } from "./state/theme";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("isDark");
    if (theme === "true" || theme === "false")
      dispatch(set(theme === "true" ? true : false));

    try {
      const blurDivs = document.querySelectorAll(".blur-div");
      blurDivs.forEach((div) => {
        const img = div.querySelector("img");
        if (!img) return;
        const loaded = () => {
          setTimeout(() => {
            div.classList.add("loaded");
          }, 2000);
        };

        if (img.complete) {
          loaded();
        } else {
          img.addEventListener("load", () => {
            loaded();
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
