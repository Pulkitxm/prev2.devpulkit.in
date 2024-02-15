import {PropTypes} from "prop-types"; 
import "./index.scss";
const Index = ({letterClass, strArray, idx}) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`blast ${letterClass} _${i + idx}`}>
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