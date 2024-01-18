import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedText from "@/components/AnimatedText/AnimatedText";

const metadata: Metadata = {
  title: "About page",
  description: "Medhashis",
};

const About = () => {
  //cards details

  // card components
  return (
    <div id="About" className=" ">
      <div className="flex flex-col justify-justify-center items-center my-5 space-y-10 mx-5 ">
        <AnimatedText
          className=" w-full py-4 glow-text font-semibold text-4xl text-center  text-slate-400 md:text-6xl"
          text={" About Me ."}
        />
        <Card className=" p-5 sm:w-40  md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400 ">
          <CardTitle className="flex flex-row justify-center p-4">
            <AnimatedText text={"Details"} />
          </CardTitle>

          <CardContent>
            <p className="font-semibold text-cyan-500">
              {" "}
              I am a developer from India. I can communicate in English, Hindi,
              and Bengali. I graduated in ECE from Burdwan University and
              attended a bootcamp by Harkirat Singh and Angela Yu. I have
              knowledge of both hardware and software. Initially, I started with
              Arduino, but due to my love for programming, I ended up choosing
              the software industry.
            </p>
          </CardContent>
        </Card>
        <Card className=" mt-10 sm:w-40  md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400 ">
          <CardTitle className="flex flex-row justify-center p-4">
            <AnimatedText text={"Skills"} />
          </CardTitle>

          <CardContent>
            <ul className="skill-list">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind CSS</li>
              <li>React Query</li>
              <li>Recoil</li>
              <li>Next JS</li>
              <li>TypeScript</li>
              <li>PostgreSQL</li>
              <li>Prisma</li>
              <li>Next Auth</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Github</li>
              <li>Java</li>
              <li>AWS</li>
              <li>Adobe Photoshop</li>
              <li>VS code</li>
              <li>WSL</li>
              {/* Add more skills as needed */}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export { About };
