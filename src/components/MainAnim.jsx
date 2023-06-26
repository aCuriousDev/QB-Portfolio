import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/lottie/groovyWalk.json";
import workingAnimation from "../assets/lottie/working.json";
import { AspectRatio } from "@chakra-ui/react";

const MainAnim = () => {
  return (
    <AspectRatio maxH={"380px"}>
      <Lottie animationData={workingAnimation} />
    </AspectRatio>
  );
};
export default MainAnim;
