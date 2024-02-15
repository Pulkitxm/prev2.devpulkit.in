import { PropTypes } from "prop-types";
import "./index.scss";
import { useSelector } from "react-redux";
const Index = ({ letterClass, strArray, idx }) => {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`blast ${letterClass} _${i + idx} ${letterClass.includes("text-animate-hover") ? isDark ? "dark-txt" : "light-txt" : ""}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default Index;

Index.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.array.isRequired,
  idx: PropTypes.number.isRequired,
};

Index.defaultProps = {
  letterClass: "",
  strArray: [],
  idx: 0,
};
