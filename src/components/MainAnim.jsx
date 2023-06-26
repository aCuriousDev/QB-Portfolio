import Lottie from "lottie-react";
// import groovyWalkAnimation from "../assets/lottie/groovyWalk.json";
import workingAnimation from "../assets/lottie/working.json";
import { Box } from "@chakra-ui/react";

const style = {
  height: 300,
};

const MainAnim = () => {
  return <Lottie style={style} animationData={workingAnimation} />;
};
export default MainAnim;
