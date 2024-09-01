import { Press_Start_2P } from "next/font/google";

import Cube from "@/components/Cube";
import SunComp from "@/components/SunComp";
import { About } from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import { LucideRocket } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

//correct way of using fonts in next js
const psp = Press_Start_2P({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const Home = () => {
  return (
    <main>
      <div className=" w-full h-48 z-30  bg-gradient-to-b from-yellow-200 to-transparent opacity-50 blur-2xl  " />

      <div className="flex flex-col justify-center  h-full min-w-full space-y-52 overflow-clip ">
        <div className="flex flex-col items-center gap-0 py-3">
          <LucideRocket className="glow animate-bounce text-purple-200" />
          <div className="relative">
            <AnimatedText
              className={` absolute inset-0 z-10 text-2xl lg:text-7xl text-center my-2 py-2 px-4 mx-auto rounded-sm text-purple-400 animate-pulse   ${psp.className}`}
              text={"welcome,"}
            />
            <AnimatedText
              className={`  text-2xl lg:text-7xl text-center my-2 py-2 px-4 mx-auto rounded-sm text-fuchsia-500 blur-xl animate-pulse ${psp.className}`}
              text={"Welcome,"}
            />
          </div>
        </div>

        <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:space-x-60 ">
          <Cube
            skill_1={"React"}
            skill_2={"JS"}
            skill_3={"CSS"}
            skill_4={"Git"}
            skill_5={"NodeJS"}
            skill_6={"NextJS"}
          />
          <Hero />
        </div>
        <SunComp />
        <div className="min-h-screen flex flex-col md:flex-row  items-center justify-center md:space-x-60 ">
          <About />
          <Cube
            skill_1={"React"}
            skill_2={"JS"}
            skill_3={"CSS"}
            skill_4={"Git"}
            skill_5={"NodeJS"}
            skill_6={"NextJS"}
          />
        </div>
        <SunComp />
        <div className="min-h-screen relative flex flex-col justify-center mt-10">
          {/* Adjusted margin-top */}
          <Project />
          <Cube
            skill_1={"React"}
            skill_2={"JS"}
            skill_3={"CSS"}
            skill_4={"Git"}
            skill_5={"NodeJS"}
            skill_6={"NextJS"}
          />
          {/* contact form  */}
          <MaxWidthWrapper className="">
            <div className="mb-20 px-32 py-20 border-double border-4 border-sky-500  rounded-md">
              <ContactForm />
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </main>
  );
};
export default Home;
