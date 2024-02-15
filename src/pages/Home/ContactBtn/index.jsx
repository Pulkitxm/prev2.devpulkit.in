import { Link } from "react-router-dom";
import "./style.scss";
const index = () => {
  return (
    <Link to={"/contact"} style={{
      animation: "fadeIn 1s 1.8s backwards"
    }}>
        <button>
          <span className="text">Contact me</span>
          <div className="icon-container">
            <div className="icon icon--left">
              <svg>
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </div>
            <div className="icon icon--right">
              <svg>
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </div>
          </div>
        </button>
      <svg style={{display:"none"}}>
        <symbol id="arrow-right" viewBox="0 0 20 10">
          <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z" ></path>
        </symbol>
      </svg>

    </Link>
  );
};

export default index;
