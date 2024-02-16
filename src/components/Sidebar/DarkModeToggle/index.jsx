import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { toggle } from "../../../state/theme";
const Index = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <div
      style={{
        transform: "scale(.5)",
      }}
      onClick={() => dispatch(toggle())}
    >
      <label className="switch">
        <input
          name="darkmode"
          type="checkbox"
          checked={isDark}
          onChange={() => dispatch(toggle())}
          style={{}}
        />
        <span
          className={"slider" + (isDark ? " dark" : " light")}
          style={{
            boxShadow: isDark
              ? "2px 2px 20px #fff"
              : "0 0 0 2px red, 0 0 8px red",
          }}
        ></span>
      </label>{" "}
    </div>
  );
};

export default Index;
