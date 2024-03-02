import { useState } from "react";
import Transition from "../../../components/Layout/transition";
import "./index.scss";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

const Simple = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const projects = useSelector((state) => state.projects);
  const [show, setShow] = useState(false);
  const opts = {
    height: "300em",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Transition isDark={isDark}>
      <div
        className="projects"
        style={{
          backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
          color: isDark ? "#fff" : "#000",
        }}
      >

        <h1>Some of my projects</h1>
        
        <div className="project">
          <h2 className="project__title">1) {projects[0].title}</h2>
          <YouTube videoId={projects[0].vidCode} opts={opts} />
          <a href={projects[0].link} target="_blank" className="project__link">
            Link: {projects[0].link}
          </a>
          <p className="project__description">Skills: {projects[0].skills}</p>
          <p className="project__description">{projects[0].desc}</p>
        </div>

        <div className="project">
          <h2 className="project__title">2) {projects[1].title}</h2>
          <YouTube videoId={projects[1].vidCode} opts={opts} />
          <a href={projects[1].link} target="_blank" className="project__link">
            Link: {projects[1].link}
          </a>
          <p className="project__description">Skills: {projects[1].skills}</p>
          <p className="project__description">{projects[1].desc}</p>
        </div>

        <div className="project">
          <h2 className="project__title">3) {projects[2].title}</h2>
          <YouTube videoId={projects[2].vidCode} opts={opts} />
          <a href={projects[2].link} target="_blank" className="project__link">
            Link: {projects[2].link}
          </a>
          <p className="project__description">Skills: {projects[2].skills}</p>
          <p className="project__description">{projects[2].desc}</p>
        </div>

        <div className="project" style={{
          marginBottom:"20em"
        }}>
          <h2 className="project__title">4) {projects[3].title}</h2>
          <YouTube videoId={projects[3].vidCode} opts={opts} />
          <a href={projects[3].link} target="_blank" className="project__link">
            Link: {projects[3].link}
          </a>
          <p className="project__description">Skills: {projects[3].skills}</p>
          <p className="project__description">{projects[3].desc}</p>
        </div>

      </div>
    </Transition>
  );
};

export default Simple;
