import {PropTypes} from "prop-types"; 
import "./index.scss";
const Index = ({letterClass, strArray, idx}) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default Index;

Index.propTypes = {
  letterClass: PropTypes.string,
  strArray: PropTypes.array,
  idx: PropTypes.number,
};