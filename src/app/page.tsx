import { Pacifico } from "next/font/google";

import { About } from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Cube from "@/components/Cube";
import SunComp from "@/components/SunComp";
import Project from "@/components/sections/Project";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <main>
      <div className=" w-full h-48  bg-gradient-to-b from-yellow-200 to-transparent opacity-50 blur-2xl  " />
      {/* <Navbar/> */}
      <div className="flex flex-col justify-center  h-full min-w-full space-y-52 ">
        <div className="min-h-screen w-full sm:pl-10 flex flex-col md:flex-row items-center justify-center md:space-x-60">
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
        <SunComp/>
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
        <SunComp/>
        <div className="min-h-screen relative flex flex-col justify-center mt-10">
      {/* Adjusted margin-top */}
      <Project/>
      <Cube
        skill_1={"React"}
        skill_2={"JS"}
        skill_3={"CSS"}
        skill_4={"Git"}
        skill_5={"NodeJS"}
        skill_6={"NextJS"}
      />
    </div>
       
      </div>
    </main>
  );
};
export default Home;
