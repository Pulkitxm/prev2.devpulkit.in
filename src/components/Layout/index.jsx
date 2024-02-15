import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/";
import "./index.scss";
import { useSelector } from "react-redux";

const Layout = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <div
     className="app"
     style={{
      display:"flex",
      flexDirection: window.innerWidth > 1000 ? "row" : "column",
     }}
     >
      <Sidebar />
      <div className="page"
        style={{
          backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <span style={{
          color:isDark?"#ffd700":"#000"
        }} className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span style={{
          color:isDark?"#ffd700":"#000"
        }} className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span style={{
            color:isDark?"#ffd700":"#000"
          }} className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;