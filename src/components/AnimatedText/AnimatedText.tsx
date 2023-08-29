"use client";
import { motion, transform, useAnimationControls } from "framer-motion";
import React from "react";

interface props {
  text: string;
}
// it just took the letter
const AnimatedText = (prop: props) => {
  const sentence = prop.text.split("");
  return (
    <div>
      {sentence.map((letter, index) => {
        return (
          <JumpingTextSpan key={index}>
            {letter === " " ? "\u00A0" : letter}
          </JumpingTextSpan>
        );
      })}
    </div>
  );
};
export default AnimatedText;

//animnations of the jumping text

const JumpingTextSpan = ({ children }: { children: React.ReactNode }) => {

const controls = useAnimationControls();

  const rubber = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,0.55,1)",
        "scale3d(0.75,1.25,1)",
        "scale3d(1.25,0.85,1)",
        "scale3d(0.9,1.05,1)",
        
        "scale3d(1,1,1)",
      ],
    });
  };

  return (
    <motion.span className="inline-block" 
    animate ={controls}
     onMouseOver={() => rubber()}>
      {children}
    </motion.span>
  );
};

//{/* <div className="flex items-center justify-center h-screen  font-semibold text-3xl text-center md:text-6xl z-10">
    //  <div className=" md:w-3/6 opacity-50 drop-shadow-md "><AnimatedText text={" Hi, I am Medhashis, a web developer."}/> </div>
      
   // </div> */}
