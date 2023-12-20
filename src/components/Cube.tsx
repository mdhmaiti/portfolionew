"use client"
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import AnimatedText from "./AnimatedText/AnimatedText";

interface SkillProps{
  skill_1:string;
  skill_2:string;
  skill_3:string;
  skill_4:string;
  skill_5:string;
  skill_6:string;
}

export default function Cube({skill_1,skill_2,skill_3,skill_4,skill_5,skill_6}:SkillProps) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current!.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="containerCube z-10">
      <div className="cube" ref={ref}>
        <div className="side front flex items-center justify-center " > <AnimatedText className=" text-white font-semibold text-3xl text-center glow-text" text={`${skill_1}`}/></div>
        <div className="side left flex items-center justify-center  " ><AnimatedText className=" text-white font-semibold text-3xl text-center glow-text" text={`${skill_2}`}/></div>
        <div className="side right flex items-center justify-center " ><AnimatedText className=" text-white font-semibold text-3xl text-center glow-text" text={`${skill_3}`}/></div>
        <div className="side top flex items-center justify-center" ><AnimatedText className=" text-white font-semibold text-3xl text-center glow-text" text={`${skill_4}`}/></div>
        <div className="side bottom flex items-center justify-center" ><AnimatedText className=" text-white font-semibold text-3xl text-center glow-text" text={`${skill_5}`}/></div>
        <div className="side back flex items-center justify-center" ><AnimatedText className=" text-white font-semibold text-3xl text-center glow-text" text={`${skill_6}`}/></div>
      </div>
    </div>
  );
}