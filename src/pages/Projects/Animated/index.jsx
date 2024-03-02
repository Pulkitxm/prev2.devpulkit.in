import { useEffect, useRef, useState } from "react";
import Transition from "../../../components/Layout/transition";
import "./index.scss";
import { useSelector } from "react-redux";

import Project1Img from "../../../assets/projects/rate-repo.png";
import Project2Img from "../../../assets/projects/wanderlust.png";
import Project3Img from "../../../assets/projects/blogkit.png";
import Project4Img from "../../../assets/projects/whatsapp.png";

const useMouse = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);
  return mouse;
};

const Projects = () => {
  const displayRef = useRef(null);
  const displayImgRef = useRef(null);
  const isDark = useSelector((state) => state.theme.isDark);
  const projects = useSelector((state) => state.projects);
  const [isInsideDisplay, setIsInsideDisplay] = useState(false);
  const [show, setShow] = useState(false);
  const mouse = useMouse();
  const [ImgToSHow, setImgToSHow] = useState(Project1Img);
  const imagesRef = useRef([]);
  const [link, setLink] = useState(null);
  const [maximize, setMaximize] = useState(0);
  const isMouseInside = (element) => {
    return (
      element.getBoundingClientRect().x < mouse.x &&
      element.getBoundingClientRect().x +
        element.getBoundingClientRect().width >
        mouse.x &&
      element.getBoundingClientRect().y < mouse.y &&
      element.getBoundingClientRect().y +
        element.getBoundingClientRect().height >
        mouse.y
    );
  };
  useEffect(() => {
    let xyz;
    const blurDivs = document.querySelectorAll(".blur-div-display");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");
      if (!img) return;
      const loaded = () => {
        if (div.classList.contains("loaded")) return;
        if (show) {
          xyz = setTimeout(() => {
            div.classList.add("loaded");
          }, 500);
        }
      };
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", () => {
          loaded();
        });
      }
    });
    return () => {
      if (xyz) clearTimeout(xyz);
    };
  }, [[], show, ImgToSHow]);
  useEffect(() => {
    if (displayRef.current) {
      setIsInsideDisplay(isMouseInside(displayRef.current));
    }
  }, [displayRef, isMouseInside, mouse]);
  useEffect(() => {
    imagesRef.current.forEach((ref, index) => {
      if (isMouseInside(ref) && !maximize) {
        switch (index) {
          case 0:
            setImgToSHow(Project1Img);
            break;
          case 1:
            setImgToSHow(Project2Img);
            break;
          case 2:
            setImgToSHow(Project3Img);
            break;
          case 3:
            setImgToSHow(Project4Img);
            break;
          default:
            break;
        }
      }
    });
  }, [isMouseInside, mouse]);
  useEffect(() => {
    setShow(isInsideDisplay);
  }, [isInsideDisplay]);
  useEffect(() => {
    if (show) {
      displayImgRef.current.style.top = `${mouse.y}px`;
      displayImgRef.current.style.left = `${mouse.x}px`;
      displayImgRef.current.style.transform = "translate(-50%, -50%)";

      imagesRef.current.forEach((ref, index) => {
        if (isMouseInside(ref)) {
          switch (index) {
            case 0:
              setLink(projects[0].link);
              break;
            case 1:
              setLink(projects[1].link);
              break;
            case 2:
              setLink(projects[2].link);
              break;
            case 3:
              setLink(projects[3].link);
              break;
            default:
              break;
          }
        }
      });
    }
  }, [show, mouse]);
  return (
    <Transition isDark={isDark}>
      <div
        className="projects"
        style={{
          backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <div className="display" ref={displayRef}>
          <div
            className={`${!show ? "hide-div" : ""} blur-div-display display-div
            ${
              ImgToSHow === Project1Img
                ? "project-1"
                : ImgToSHow === Project2Img
                ? "project-2"
                : ImgToSHow === Project3Img
                ? "project-3"
                : "project-4"
            }
            `}
            ref={displayImgRef}
          >
            <img
              src={ImgToSHow}
              draggable="false"
              className={`blur-load display-image ${show ? "show" : "hide"}`}
              alt=""
              onClick={() => {
                if (link) window.location = link;
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                setMaximize(!maximize);
              }}
              style={{
                height: `${!maximize ? "300px" : "500px"}`,
                width: `${!maximize ? "500px" : "900px"}`,
              }}
            />
          </div>
          <h1>Some of my Projects</h1>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project"
              ref={(element) => (imagesRef.current[index] = element)}
            >
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default Projects;
