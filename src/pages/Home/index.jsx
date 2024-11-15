import "./index.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ContactBtn from "./ContactBtn";
import AnimatedLetters from "../../components/AnimatedLetters";
import banner from "../../assets/images/banner.jpg";
import Transition from "../../components/Layout/transition";
import {
  IconGithub,
  IconLinkedin,
  IconYoutube,
  IconMail,
  IconInstagram,
  IconBxlDiscord,
} from "./Svgs";
import { Link } from "react-router-dom";

const Home = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [letterClass, setLetterClass] = useState("text-animate");
  const array = ["I'm Pulkit,".split(""), "a web Developer.".split("")];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
      return true;
    }, 4000);
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
  }, []);
  const Tag = ({ name }) => {
    return (
      <span
        style={{
          color: isDark ? "rgb(255, 215, 0)" : "red",
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
    <Transition isDark={isDark}>
      <div
        className="home"
        style={{
          backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <div className="left">
          <Tag name="h1" />
          <h1>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _9`}
            >
              H
            </span>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _10`}
            >
              e
            </span>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _11`}
            >
              y
            </span>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _12`}
            >
              !
            </span>{" "}
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _13`}
            >
              F
            </span>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _14`}
            >
              o
            </span>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _15`}
            >
              l
            </span>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _16`}
            >
              k
            </span>
            <span
              className={`${letterClass} ${
                isDark ? "dark-txt" : "light-txt"
              } _17`}
            >
              s
            </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={array[0]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={array[1]}
              idx={20}
            />{" "}
            <Tag name="/h1" />
          </h1>
          <h2
            style={{
              color: isDark ? "#ffffff80" : "#000",
            }}
          >
            Full Stack Web Developement / MERN / App Developement / React Native
            &nbsp;
          </h2>
          <div className="icons">
            <p style={{ display: "inline" }} title={"@Pulkitxm"}>
              <Link to={"https://github.com/Pulkitxm"} target="_blank" >
                <IconGithub color={isDark ? "#fff" : "000"} />
              </Link>
            </p>
            <p style={{ display: "inline" }} title={"@pulkit-dce"}>
              <Link to={"http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8"} target="_blank" >
                <IconLinkedin />
              </Link>
            </p>
            <p style={{ display: "inline" }} title={"@CodeWithPulkit"} >
              <Link to={"https://www.youtube.com/@CodeWithPulkit"} target="_blank">
                <IconYoutube />
              </Link>
            </p>
            <p style={{ display: "inline" }} title={"kpulkit15234@gmail.com"} >
              <Link to={"mailto:kpulkit15234@gmail.com"} target="_blank">
                <IconMail color={isDark ? "#fff" : "000"} />
              </Link>
            </p>
            <p style={{ display: "inline" }} title={"@teckypulkit"} >
              <Link to={"https://www.instagram.com/teckypulkit"} target="_blank">
                <IconInstagram />
              </Link>
            </p>
            <p style={{ display: "inline" }} title={"@pulkitxm"} >
              <IconBxlDiscord />
            </p>
          </div>
          <ContactBtn />
        </div>
        {window.innerWidth > 1000 && (
          <div
            className="right blur-div"
            style={{
              filter: isDark ? "brightness(80%)" : "brightness(100%)",
            }}
          >
            <img
              src={banner}
              className="blur-load"
              alt=""
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{
                userSelect: "none",
              }}
            />
          </div>
        )}
      </div>
    </Transition>
  );
};

export default Home;
