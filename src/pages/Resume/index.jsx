import Transition from "../../components/Layout/transition";
import "./index.scss";
import { useSelector } from "react-redux";

const Resume = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <Transition isDark={isDark}>
      <div
        className="resume"
        style={{
          backgroundColor: isDark ? "var(--dark-bg)" : "var(--light-bg)",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <iframe src="https://drive.google.com/file/d/1a-shI3EqA-RXObFPPe28tnyMakwqlhRR/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>
    </Transition>
  );
};

export default Resume;
