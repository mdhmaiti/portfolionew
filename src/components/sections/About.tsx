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
  const skillsName = [
    { id: 1, title: "React" },
    { id: 2, title: "Node.js" },
    { id: 3, title: "Express.js" },
    { id: 4, title: "MongoDB" },
    { id: 5, title: "JavaScript (ES6+)" },
    { id: 6, title: "HTML5" },
    { id: 7, title: "CSS3" },
    { id: 8, title: "Tailwind CSS" },
    { id: 9, title: "React Query" },
    { id: 10, title: "Recoil" },
    { id: 11, title: "Next JS" },
    { id: 12, title: "TypeScript" },
    { id: 13, title: "PostgreSQL" },
    { id: 14, title: "Prisma" },
    { id: 15, title: "Next Auth" },
    { id: 16, title: "Docker" },
    { id: 17, title: "Git" },
    { id: 18, title: "Github" },
    { id: 19, title: "Java" },
    { id: 20, title: "AWS" },
    { id: 21, title: "Adobe Photoshop" },
    { id: 22, title: "VS code" },
    { id: 23, title: "WSL" },
  ];
  //cards details

  // card components
  return (
    <div id="About" className=" ">
      <div className="flex flex-col justify-justify-center items-center my-5 space-y-10 mx-5 ">
        <AnimatedText
          className=" w-full py-4 glow-text font-semibold text-4xl text-center  text-lime-400 md:text-6xl  "
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
            <ul className="grid grid-cols-3 gap-2  list-none">
              {skillsName.map((item: any, index: any) => (
                <li className=" glow flex items-center justify-center   " key={index}> <p className= " text-white bg-gradient-to-r from-purple-400 rounded-md  border-double border-4 border-spacing-1 border-slate-100 whitespace-normal p-2">{item.title}</p> </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export { About };
