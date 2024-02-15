import Transition from "../../components/Layout/transition";
import "./index.scss";
import { useSelector } from "react-redux";

const Layout = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <Transition isDark={isDark}>
      <div
        className="layout"
        style={{
          backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <div className="layout__container">
          <h1 className="layout__title">Projects</h1>
          <div className="layout__content">
            <p>
              I am a full-stack developer with a passion for building web
              applications. I have experience in building web applications using
              React, Node.js, Express, and MongoDB. I am also familiar with
              other technologies such as TypeScript, GraphQL, and Docker. I am
              always looking for new opportunities to learn and grow as a
              developer.
            </p>
            <p>
              Here are some of the projects I have worked on. You can find more
              of my projects on my{" "}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Layout;
