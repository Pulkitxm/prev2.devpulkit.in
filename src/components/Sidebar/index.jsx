import "./index.scss";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/p.webp";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEnvelope,
  faEye,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { toggleTerminal } from "../../state/terminal";

const Index = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const navRef = useRef(null);
  const [highlight, setHighlight] = useState(false);
  const handleNavClick = () => {
    if (highlight) {
      setHighlight(false);
    } else {
      setHighlight(true);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 1000) {
      if (highlight) {
        navRef.current.style.top = "60px";
        navRef.current.style.opacity = "1";
      } else {
        navRef.current.style.top = "65px";
        navRef.current.style.opacity = "0";
      }
    }
  }, [highlight]);
  return (
    <div
      className="nav-bar"
      style={{
        backgroundColor: isDark ? "#181818" : "var(--light-bg)",
        color: isDark ? "#fff" : "#000",
        boxShadow: isDark ? null : "2px 2px 20px #00000017",
        width: window.innerWidth > 1000 ? "var(--sidebar-width)" : "100%",
        height: window.innerWidth > 1000 ? "100%" : "var(--sidebar-height)",
        display: window.innerWidth > 1000 ? "flex" : "flex",
        flexDirection: window.innerWidth > 1000 ? "column" : "row",
        justifyContent:
          window.innerWidth > 1000 ? "space-between" : "space-between",
        alignItems: window.innerWidth > 1000 ? "center" : "center",
        padding: window.innerWidth > 1000 ? null : "20px 0",
      }}
    >
      <Link className="logo" to={"/"}>
        <img src={LogoS} alt="" />
        <p
          style={{
            color: isDark ? "#fff" : "#000",
          }}
        >
          {window.innerWidth > 1000 ? "Pulkit" : ""}
        </p>
      </Link>

      {window.innerWidth < 1000 && (
        <div
          className={`burger ${highlight ? "highlight" : ""}`}
          onClick={() => handleNavClick()}
        >
          <div
            className="line-1 line"
            style={{
              backgroundColor: isDark ? "#fff" : "#000",
            }}
          ></div>
          <div
            className="line-2 line"
            style={{
              backgroundColor: isDark ? "#fff" : "#000",
            }}
          ></div>
        </div>
      )}

      <nav
        ref={navRef}
        style={{
          display: window.innerWidth > 1000 ? "flex" : "flex",
          flexDirection: window.innerWidth > 1000 ? "column" : "row",
          alignItems: window.innerWidth > 1000 ? "center" : "center",
          justifyContent: window.innerWidth > 1000 ? "center" : "space-around",
          textAlign: window.innerWidth > 1000 ? "center" : "center",
          position: window.innerWidth > 1000 ? "absolute" : "absolute",
          height: window.innerWidth > 1000 ? "210px" : "50px",
          width: window.innerWidth > 1000 ? null : "100%",
          top: window.innerWidth > 1000 ? "50%" : "63px",
          backgroundColor:
            window.innerWidth < 1000
              ? isDark
                ? "rgb(43 43 43)"
                : "rgb(255 255 255)"
              : null,
          marginTop: window.innerWidth > 1000 ? "-120px" : null,
        }}
      >
        <NavLink
          onClick={() => setHighlight(false)}
          exact="true"
          // eslint-disable-next-line quotes
          className={`home-link link ${isDark ? "dark" : "light"}`}
          to={"/"}
        >
          <FontAwesomeIcon icon={faHome} color={"#4d4d4e"} />
        </NavLink>
        <NavLink
          onClick={() => setHighlight(false)}
          exact="true"
          // eslint-disable-next-line quotes
          className={`about-link link ${isDark ? "dark" : "light"}`}
          to={"/about"}
        >
          <FontAwesomeIcon icon={faUser} color={"#4d4d4e"} />
        </NavLink>
        <NavLink
          onClick={() => setHighlight(false)}
          exact="true"
          // eslint-disable-next-line quotes
          className={`resume-link link ${isDark ? "dark" : "light"}`}
          to={"/resume"}
        >
          <FontAwesomeIcon icon={faBook} color={"#4d4d4e"} />
        </NavLink>
        <NavLink
          onClick={() => setHighlight(false)}
          exact="true"
          // eslint-disable-next-line quotes
          className={`work-link link ${isDark ? "dark" : "light"}`}
          to={"/work"}
        >
          <FontAwesomeIcon icon={faEye} color={"#4d4d4e"} />
        </NavLink>
        <NavLink
          onClick={() => setHighlight(false)}
          exact="true"
          // eslint-disable-next-line quotes
          className={`contact-link link ${isDark ? "dark" : "light"}`}
          to={"/contact"}
        >
          <FontAwesomeIcon icon={faEnvelope} color={"#4d4d4e"} />
        </NavLink>
        {window.innerWidth < 1000 && <DarkModeToggle />}
      </nav>

      {window.innerWidth > 1000 && (
        <div className="bottom">
          <ul>
          <li>
              <a>
                <svg
                  fill="#4d4d4e"
                  viewBox="0 0 16 16"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(toggleTerminal())}
                >
                  <path d="M0 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm9.5 5.5h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-6.354-.354a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L4.793 6.5 3.146 8.146z" />
                </svg>
              </a>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8"}
                target="_blank"
              >
                <svg fill={"#4d4d4e"} viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/Pulkitxm"} target="_blank">
                <svg fill={"#4d4d4e"} viewBox="0 0 448 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </Link>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
      )}
    </div>
  );
};

export default Index;
