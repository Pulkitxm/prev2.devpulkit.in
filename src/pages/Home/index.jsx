import "./index.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ContactBtn from "./ContactBtn";
import AnimatedLetters from "../../components/AnimatedLetters";
import banner from "../../assets/images/banner.png";

const Home = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [letterClass, setLetterClass] = useState("text-animate");
  const array = ["I'm Pulkit".split(""), "a web Developer.".split("")];
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
      className="home"
      style={{
        backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <div className="left">
        <Tag name="h1" />
        <h1>
          <span className={`${letterClass} _9`}>H</span>
          <span className={`${letterClass} _10`}>e</span>
          <span className={`${letterClass} _11`}>y</span> &nbsp;
          <span className={`${letterClass} _12`}>F</span>
          <span className={`${letterClass} _13`}>o</span>
          <span className={`${letterClass} _14`}>l</span>
          <span className={`${letterClass} _15`}>k</span>
          <span className={`${letterClass} _16`}>s</span>
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
          &nbsp;
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
        <ContactBtn />
      </div>
      {
        window.innerWidth > 1000 && (
          <div className="right blur-div" style={{
            filter: isDark ? "brightness(80%)" : "brightness(100%)"
          }}>
              <img src={banner} className="blur-load" alt="" />
          </div>)
      }
    </div>
  );
};

export default Home;