import React from "react";
import AnimatedText from "../AnimatedText/AnimatedText";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Icons from "../Icons";
import Image from "next/image";
const Project = () => {
  return (
    <div id="Projects">
      <AnimatedText
        className=" w-full py-10 glow-text font-semibold text-4xl text-center  text-slate-400 md:text-6xl"
        text={" Projects ."}
      />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
          {/* Card 1 */}
          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
            <CardTitle className="flex flex-row justify-center p-4">
              <AnimatedText text={" Grocery online"} />
            </CardTitle>

            <CardContent className="flex flex-row justify-center">
              <Image
                src="/gmail-linkdin-twitter.jpg"
                width={100}
                height={100}
                alt="my pic"
                className="rounded-full"
              />
            </CardContent>
            <CardFooter>
              <p className="font-semibold">
                Ecommerce app build with latest tech stack. The documentation is also included on how to build this in the readme section.
              </p>
            </CardFooter>
            <Icons />
          </Card>

          {/* Card 2 */}
          {/* Repeat the Card structure for the remaining cards */}
          {/* ... */}

          {/* Card 3 */}
          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
            {/* ... */}
            <CardTitle className="flex flex-row justify-center p-4">
              <AnimatedText text={" Threads"} />
            </CardTitle>

            <CardContent className="flex flex-row justify-center">
              <Image
                src="/gmail-linkdin-twitter.jpg"
                width={100}
                height={100}
                alt="my pic"
                className="rounded-full"
              />
            </CardContent>
            <CardFooter>
              <p className="font-semibold">
                Built with  next js server actions, clerk authentication etc.
              </p>
            </CardFooter>
            <Icons />
          </Card>

          {/* Card 4 */}
          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
            {/* ... */}
            <CardTitle className="flex flex-row justify-center p-4">
              <AnimatedText text={" Qr code generator"} />
            </CardTitle>

            <CardContent className="flex flex-row justify-center">
              <Image
                src="/gmail-linkdin-twitter.jpg"
                width={100}
                height={100}
                alt="my pic"
                className="rounded-full"
              />
            </CardContent>
            <CardFooter>
              <p className="font-semibold">
                A simple web app that makes qr code 
              </p>
            </CardFooter>
            <Icons />
          </Card>

          {/* Card 5 */}
          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
            {/* ... */}
            <CardTitle className="flex flex-row justify-center p-4">
              <AnimatedText text={" TODO"} />
            </CardTitle>

            <CardContent className="flex flex-row justify-center">
              <Image
                src="/gmail-linkdin-twitter.jpg"
                width={100}
                height={100}
                alt="my pic"
                className="rounded-full"
              />
            </CardContent>
            <CardFooter>
              <p className="font-semibold">
               A Todo app tutorial built with vite and type script which expains why do we need state management library.
              </p>
            </CardFooter>
            <Icons />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;
