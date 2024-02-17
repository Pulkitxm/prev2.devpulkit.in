import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { addCommand, clearCommand, closeTerminal, moveTerminal } from "../../state/terminal";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
const Index = () => {
  const dispatch = useDispatch();
  const terminal = useSelector((state) => state.terminal);
  const commandHistory = terminal.commandHistory;
  const open = terminal.open;
  const terminalRef = useRef(null);
  const outputRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    terminalRef.current.style.top = terminal.top;
    terminalRef.current.style.left = terminal.left;
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, []);
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
  }, []);

  const executeCommand = (command) => {
    let result;
    if(command === "clear" || command === "cls") {
      dispatch(clearCommand());
      return;
    }else if(command === "exit") {
      dispatch(closeTerminal());
      return;
    }
    switch (command.toLowerCase()) {
      case "help":
        result = (
          <div>
            Available commands:
            <ul>
              <li>help</li>
              <li>social</li>
              <li>about</li>
              <li>projects</li>
            </ul>
          </div>
        );
        break;
      case "social":
        result = (
          <div>
            These are my Social Handles:
            <ul>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="https://github.com/Pulkitxm"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="https://www.youtube.com/@CodeWithPulkit"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  draggable="false"
                  target="_blank"
                  href="https://www.instagram.com/teckypulkit"
                >
                  Instgram
                </a>
              </li>
            </ul>
          </div>
        );
        break;
      case "about":
        result = (
          <div>
            A liitle bit about me:
            <p>
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
        break;
      case "projects":
        result = (
          <div>
            These are some of my best projects:
            <ul>
              <li>Rate-Repository-App (React Native App)</li>
              <li>Wanderlust</li>
              <li>BlogKit - the Blogging Application</li>
              <li>Whatsapp Clone</li>
            </ul>
            <Link to={"/projects"}>Checkout more</Link>
            <br />
          </div>
        );
        break;
      default:
        result = `Command '${command}' not recognized. Type 'help' for available commands.`;
        break;
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
      className={`terminal ${open ? "open" : "close"}`}
      id="terminal"
      ref={terminalRef}
    >
      <nav ref={navRef}>
        <h2>Terminal</h2>
        <div className="red" onClick={() => dispatch(closeTerminal())}></div>
      </nav>


      <div className="output-container" ref={outputRef}>
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
              <div className="res">{result}</div>
            </React.Fragment>
          );
        })}

      <form onSubmit={handleCommandSubmit} className="input-line line">
        <p>
          $ &nbsp; <span style={{ letterSpacing: ".1em" }}>root@visiter</span>{" "}
          &nbsp; {">>"} &nbsp;
        </p>
        <input type="text" name="command" autoComplete="off" />
        <br />
      </form>
      </div>
    </div>
  );
};

export default Index;
