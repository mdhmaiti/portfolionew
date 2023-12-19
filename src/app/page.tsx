import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Cube from "@/components/Cube";
import SunComp from "@/components/SunComp";
import { Pacifico } from "next/font/google";
import EarthComponent from "@/components/ball/EarthComponent";
import { Album, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

const Home = () => {
  return (
    <main>
      {/* <Navbar/> */}
      <div className="flex flex-col  h-full min-w-full relative ">
        <div className=" w-full  ">
          <AnimatedText
            className={`  text-slate-400 text-3xl text-center glow-text md:text-6xl  ${pacifico.className} `}
            text={" Hi, I am Medhashis, a web developer."}
          />{" "}
        </div>
        <div className=" flex flex-col lg:flex-row w-min lg:space-x-52 lg:px-52 ">
          <div className=" flex  items-center justify-center w-full">
            <Cube />
          </div>

          <div className=" -z-10">
            <SunComp />
          </div>
        </div>
        <div className="flex flex-row justify-center item-center space-x-5  ">
       <Link className="glow hover:text-cyan-400" href=" https://github.com/mdhmaiti"><Github /></Link> 
       <Link className="glow hover:text-cyan-400" href="https://www.linkedin.com/in/medhashis-maiti-3197881a8/"><Linkedin /></Link>
       <Link  className="glow hover:text-cyan-400" href="/mail"><Mail /></Link>
       <Link  className="glow hover:text-cyan-400" href="https://medhashis.hashnode.dev"><Album /></Link>


        </div>

        <div className=" w-full -z-20">
          <EarthComponent />
        </div>
      </div>
    </main>
  );
};
export default Home;
