import AnimatedText from "@/components/AnimatedText/AnimatedText";

import EarthComponent from "@/components/ball/EarthComponent";

const Home = () => {
  return (
    <main>
      {/* <Navbar/> */}
      <div className="flex flex-col  h-full   ">
        <div className=" w-full  ">
          <AnimatedText
            className=" text-slate-400 font-semibold text-3xl text-center glow-text md:text-6xl z-10 "
            text={" Hi, I am Medhashis, a web developer."}
          />{" "}
        </div>

        <EarthComponent />
      </div>
    </main>
  );
};
export default Home;
