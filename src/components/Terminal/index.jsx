import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  addCommand,
  clearCommand,
  closeTerminal,
  moveTerminal,
  toggleMaximize,
} from "../../state/terminal";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
const Index = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const terminal = useSelector((state) => state.terminal);
  const isDark = useSelector((state) => state.theme.isDark);
  const commandHistory = terminal.commandHistory;
  const { open, maximize } = terminal;
  const terminalRef = useRef(null);
  const outputRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    const nav = navRef.current;
    nav.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      terminalRef.current.style.top =
        terminalRef.current.offsetTop - pos2 + "px";
      terminalRef.current.style.left =
        terminalRef.current.offsetLeft - pos1 + "px";
      dispatch(
        moveTerminal({
          top: terminalRef.current.offsetTop - pos2 + "px",
          left: terminalRef.current.offsetLeft - pos1 + "px",
        })
      );
    }
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }, [navRef.current]);
  useEffect(() => {
    terminalRef.current.style.top = terminal.top;
    terminalRef.current.style.left = terminal.left;
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
    terminalRef.current.style.top = terminal.top;
    terminalRef.current.style.left = terminal.left;
    window.addEventListener("click", (e) => {
      if (terminalRef.current.contains(e.target)) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);
  useEffect(() => {
    if (active && open) {
      window.onkeydown = (e) => {
        if (
          [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ].includes(e.key)
        ) {
          document.querySelector("input[name='command']").focus();
        } else if (e.key === "Escape") {
          dispatch(closeTerminal());
        }
      };
    } else {
      window.onkeydown = null;
    }
  }, [active]);
  const getResult = (result) => {
    switch (result.toLowerCase()) {
      case "help":
        return(
          <div>
            Available commands:
            <ul>
              <li style={{color: isDark ? "#fff" : "#000",}} >help</li>
              <li style={{color: isDark ? "#fff" : "#000",}} >social</li>
              <li style={{color: isDark ? "#fff" : "#000",}} >about</li>
              <li style={{color: isDark ? "#fff" : "#000",}} >projects</li>
            </ul>
          </div>
        );
        break;
      case "social":
        return(
          <div>
            These are my Social Handles:
            <ul>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="https://github.com/Pulkitxm"
                  style={{color: isDark ? "#fff" : "#000",}}
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8"
                  style={{color: isDark ? "#fff" : "#000",}}
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="https://www.youtube.com/@CodeWithPulkit"
                  style={{color: isDark ? "#fff" : "#000",}}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="https://www.instagram.com/teckypulkit"
                  style={{color: isDark ? "#fff" : "#000",}}
                >
                  Instgram
                </a>
              </li>
            </ul>
          </div>
        );
      case "about":
        return(
          <div>
            A liitle bit about me:
            <p style={{color: isDark ? "#fff" : "#000",}}>
              {
                "Hi there! My name is Pulkit, and I'm a passionate and enthusiastic web developer. I love creating beautiful and interactive websites that provide a great user experience. Besides this I like content creation on youtube, Video Editing .  Besides coding, I enjoy exploring new technologies, attending tech meetups, and contributing to open-source projects. In my free time, you'll often find me reading tech blogs, playing video games, or spending quality time with friends and family."
              }
              <br />
              {"Well, I think that's enough introduction."}
            </p>
            <Link to={"/about"}>Read more</Link>
            <br />
          </div>
        );
      case "projects": 
        return(
          <div>
            These are some of my best projects:
            <ul>
              <li style={{color: isDark ? "#fff" : "#000",}}>Rate-Repository-App (React Native App)</li>
              <li style={{color: isDark ? "#fff" : "#000",}}>Wanderlust</li>
              <li style={{color: isDark ? "#fff" : "#000",}}>BlogKit - the Blogging Application</li>
              <li style={{color: isDark ? "#fff" : "#000",}}>Whatsapp Clone</li>
            </ul>
            <Link to={"/projects"}>Checkout more</Link>
            <br />
          </div>
        );
      default:
        return `Command '${result}' not recognized. Type 'help' for available commands.`;
    }
  };
  const executeCommand = (command) => {
    let result=command.toLowerCase();
    if (command === "clear" || command === "cls") {
      dispatch(clearCommand());
      return;
    } else if (command === "exit") {
      dispatch(closeTerminal());
      return;
    }
    dispatch(addCommand({ command, result }));
  };
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.command.value.trim();
    if (input !== "") {
      executeCommand(input);
      e.target.reset(); // Clear input
    }
  };
  return (
    <div
      className={`terminal ${open ? "open" : "close"} ${maximize && "max"}`}
      id="terminal"
      ref={terminalRef}
      style={{
        opacity: active ? 1 : 0.9,
        boxShadow:
          active && isDark
            ? "2px 2px 20px rgb(255 255 255 / 35%)"
            : "2px 2px 20px rgb(0 0 0 / 100%)",
        transition: "box-shadow .3s ease-in-out ,width .3s ease-in-out, height .3s ease-in-out, opacity .2s ease-in-out",
        backgroundColor: isDark ? "rgb(37 37 37)" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <nav ref={navRef}>
        <div className="controls" style={{
          display: "flex",
        }} >
          <div
            className="yellow"
            onClick={() => {
              dispatch(closeTerminal());
              setActive(false);
            }}
          ></div>
          <div
            className="green"
            onClick={() => {
              dispatch(toggleMaximize());
            }}
          ></div>
          <div
            className="red"
            onClick={() => {
              dispatch(closeTerminal());
              setActive(false);
              dispatch(clearCommand());
            }}
          ></div>
        </div>
      </nav>

      <div
        className="output-container"
        ref={outputRef}
        style={{
          height: "85%",
          width: "100%",
        }}
      >
        <div className="help-line line styled-p">Type help to get Started</div>
        {commandHistory.map(({ command, result }) => {
          return (
            <React.Fragment key={uuid()}>
              <div className="output-line line">
                <p>
                  $ &nbsp;{" "}
                  <span style={{ letterSpacing: ".1em" }}>root@visiter</span>{" "}
                  &nbsp; {">>"} &nbsp;
                </p>
                <p>{command}</p>
              </div>
              <div className="res">{getResult(result)}</div>
            </React.Fragment>
          );
        })}

        <form onSubmit={handleCommandSubmit} className="input-line line">
          <p>
            $ &nbsp; <span style={{ letterSpacing: ".1em" }}>root@visiter</span>{" "}
            &nbsp; {">>"} &nbsp;
          </p>
          <input placeholder="" title="Start typing commands here" type="text" id="text" name="command" autoComplete="off" style={{color: isDark ? "#fff" : "#000",}} />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Index;
