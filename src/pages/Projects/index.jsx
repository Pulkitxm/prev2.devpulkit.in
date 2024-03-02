import Simple from "./Simple";
import Animated from "./Animated";

const Projects = () => {
  const userAgent = navigator.userAgent;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  if (isMobile) {
    return <Simple/>;
  } else {
    return <Animated/>;
  }
};
export default Projects;
