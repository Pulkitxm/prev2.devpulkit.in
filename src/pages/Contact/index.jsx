import "./index.scss";
import { useSelector } from "react-redux";
import AnimatedLetters from "../../components/AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import Map from "./Map";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const Layout = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
  const sendEmail = async(e) => {
    e.preventDefault();
    const message = `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\nMessage: ${values.message}`;
    const service_id = "service_d8jslwj";
    const template_id = "template_jhvj4zb";
    const publicKey = "vgn5g8Coo7AD1lJKP";
    await emailjs.send(service_id, template_id, {message},{publicKey});
  };

  return (
    <div
      className="contact"
      style={{
        backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <div className="left">
        <div className="contact-form">
          <h1>
            <Tag name="h1" />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact me".split("")}
              idx={15}
            />
            <br />
            <Tag name="/h1" />
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  required
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={(e) =>
                    setValues({ ...values, subject: e.target.value })
                  }
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={values.message}
                  onChange={(e) =>
                    setValues({ ...values, message: e.target.value })
                  }
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="SEND"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="right">
        <Map />
      </div>
    </div>
  );
};

export default Layout;
