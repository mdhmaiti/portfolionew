"use client"
import * as React from "react";
import { motion, useAnimationControls, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";


// perfect way to use the reusable react components
interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  ({ text, className, ...props }, ref) => {
    const sentence = text.split("");

    return (
      <div
        ref={ref}
        className={cn("", className)} 
        {...props}
      >
        {sentence.map((letter, index) => (
          <JumpingText key={index} className=" hover:text-cyan-300 glow-text" >
            {letter === " " ? "\u00A0" : letter}
          </JumpingText>
        ))}
      </div>
    );
  }
);
AnimatedText.displayName = "AnimatedText"

export default AnimatedText;

interface JumpingTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
}

const JumpingText = React.forwardRef<HTMLSpanElement, JumpingTextProps>(
  ({ children, className, ...props }, ref) => {
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
      <motion.span
        ref={ref}
        className={cn("inline-block ", className)}
        animate={controls}
        onMouseOver={rubber}
        {...props}
      >
        {children}
      </motion.span>
    );
  }
);
JumpingText.displayName = "JumpingText"

