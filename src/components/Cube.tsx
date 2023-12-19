"use client"
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import AnimatedText from "./AnimatedText/AnimatedText";

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current!.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="containerCube z-10">
      <div className="cube" ref={ref}>
        <div className="side front flex items-center justify-center " > <AnimatedText className=" text-slate-100 font-semibold text-3xl text-center glow-text" text={" React"}/></div>
        <div className="side left flex items-center justify-center  " ><AnimatedText className=" text-slate-100 font-semibold text-3xl text-center glow-text" text={" Next JS"}/></div>
        <div className="side right flex items-center justify-center " ><AnimatedText className=" text-slate-100 font-semibold text-3xl text-center glow-text" text={" Node Js"}/></div>
        <div className="side top flex items-center justify-center" ><AnimatedText className=" text-slate-100 font-semibold text-3xl text-center glow-text" text={" JavaScript"}/></div>
        <div className="side bottom flex items-center justify-center" ><AnimatedText className=" text-slate-100 font-semibold text-3xl text-center glow-text" text={" Git"}/></div>
        <div className="side back flex items-center justify-center" ><AnimatedText className=" text-slate-100 font-semibold text-3xl text-center glow-text" text={" CSS"}/></div>
      </div>
    </div>
  );
}