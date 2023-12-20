import AnimatedText from "../AnimatedText/AnimatedText";
import Cube from "../Cube";
import Icons from "../Icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="Home" className="pt-20 ">
      <Card className=" p-5 sm:w-40  md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400 ">
        
          {" "}
          <CardTitle className="flex flex-col justify-center items-center space-y-2 p-4">
            <AnimatedText text={" Job: Web Developer"} />
            <CardDescription>medhashis000@gmail.com</CardDescription>
          </CardTitle>
         
        

        <CardContent>
          <Image
            src="/gmail-linkdin-twitter.jpg"
            width={500}
            height={500}
            alt="my pic"
            className="rounded-full"
          />
        </CardContent>
        <CardFooter>
          <p className="font-semibold">
            Experienced Developer Capable of building both front-end and
            backend. I am also a team player always ready to colaborate
          </p>
        </CardFooter>
        <Icons />
      </Card>
    </div>
  );
};

export default Hero;
