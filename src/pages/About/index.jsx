import "./index.scss";
import { useSelector } from "react-redux";
import AnimatedLetters from "../../components/AnimatedLetters";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  ReactNative,
  Nodejs,
  Mongodb,
  React,
  IconJava,
  IconJavascript,
} from "./Svgs";
import Loader from "react-loaders";

const Layout = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
      return true;
    }, 4000);
  }, []);
  const Tag = ({ name }) => {
    return (
      <span
        style={{
          color: isDark ? "rgb(255, 215, 0)" : "#000",
          opacity: "0.6",
          fontWeight: "bold",
          fontSize: "18px",
          fontFamily: "'La Belle Aurore', cursive",
          userSelect: "none",
        }}
      >
        &lt;{name}&gt;
      </span>
    );
  };
  Tag.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return (
    <div
      className="about"
      style={{
        backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <div
        className="left"
        style={{
          width: window.innerWidth > 1000 ? "50%" : "100%",
        }}
      >
        <div className="h1">
          <Tag name="h1" />
          <br />
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <Tag name="/h1" />
        </div>
        <p>
          {
            "Hi there! My name is Pulkit, and I'm a passionate and enthusiastic web developer. I love creating beautiful and interactive websites that provide a great user experience. Besides this I like content creation on youtube, Video Editing . I started my journey in web development a few years ago, and I have been continuously learning and improving my skills ever since. Besides coding, I enjoy exploring new technologies, attending tech meetups, and contributing to open-source projects. In my free time, you'll often find me reading tech blogs, playing video games, or spending quality time with friends and family. My ultimate goal is to leverage my skills to build innovative web applications that solve real-world problems and positively impact people's lives. I'm always open to new opportunities and collaborations, so feel free to reach out if you'd like to connect or work together on exciting projects."
          }
        </p>
      </div>
      {window.innerWidth > 1000 && (
        <div className="right stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <ReactNative color={"#DD0031"} />
            </div>
            <div className="face2">
              <Nodejs color={"#F06529"} />
            </div>
            <div className="face3">
              <Mongodb color={"#28A4D9"} />
            </div>
            <div className="face4">
              <React color={"#5ED4F4"} />
            </div>
            <div className="face5">
              <IconJava color={"#EFD81D"} />
            </div>
            <div className="face6">
              <IconJavascript color={"#EC4D28"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
