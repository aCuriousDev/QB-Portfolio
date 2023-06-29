import Lottie from "lottie-react";
// import groovyWalkAnimation from "../assets/lottie/groovyWalk.json";
import workingAnimation from "../assets/lottie/working.json";

const style = {
  height: 300,
};

const MainAnim = () => {
  return <Lottie style={style} animationData={workingAnimation} />;
};
export default MainAnim;
