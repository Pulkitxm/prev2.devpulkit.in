import Transition from "../../components/Layout/transition";
import "./index.scss";
import { useSelector } from "react-redux";

const Projects = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const projects = useSelector((state) => state.projects);
  return (
    <Transition isDark={isDark}>
      <div
        className="projects"
        style={{
          backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
          color: isDark ? "#fff" : "#000",
        }}
      >
        {
          projects.map((project, index) => (
            <div key={index} className="project">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))
        }
      </div>
    </Transition>
  );
};

export default Projects;
