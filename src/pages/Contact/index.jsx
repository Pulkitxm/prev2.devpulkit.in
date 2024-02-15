import "./index.scss";
import { useSelector } from "react-redux";

const Layout = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <div
      className="layout"
      style={{
        backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
        color: isDark ? "#fff" : "#000",
      }}
    >
    </div>
  );
};

export default Layout;
