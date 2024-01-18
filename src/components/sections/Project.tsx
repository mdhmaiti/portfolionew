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
      <div className="flex items-center justify-center mx-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
          {/* Card 1 */}
          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
            <CardTitle className="flex flex-row justify-center p-4">
              <AnimatedText text={" Grocery online"} />
            </CardTitle>

            <CardContent className="flex flex-row justify-center">
              <Image
                src="/groceryonlineprofile.jpg"
                width={200}
                height={200}
                alt="my pic"
                className="rounded-md aspect-square object-contain "
              />
            </CardContent>
            <CardFooter className = " flex flex-col gap-2">
              <p className="font-semibold text-cyan-500">
                Ecommerce app build with next js, tailwind css react js, postgreSQL, docker, Prisma, Node js, react query, Shadcn UI, react hook forms etc.
              </p>
              <p className="font-semibold text-red-500"> <a href="https://groceryonline.vercel.app" target="_blank">click for live demo</a></p>
            </CardFooter>
            <Icons />
          </Card>

        
          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
            {/* ... */}
            <CardTitle className="flex flex-row justify-center p-4">
              <AnimatedText text={" Threads"} />
            </CardTitle>

            <CardContent className="flex flex-row justify-center">
              <Image
                src="/gmail-linkdin-twitter.jpg"
                width={200}
                height={200}
                alt="my pic"
                className="rounded-md"
              />
            </CardContent>
            <CardFooter className = " flex flex-col gap-2">
              <p className="font-semibold text-cyan-500">
                Built with next js server actions and clerk authentication.
              </p>
              <p className="font-semibold text-red-500"> click for live demo</p>
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
                width={200}
                height={200}
                alt="my pic"
                className="rounded-full"
              />
            </CardContent>
            <CardFooter className = " flex flex-col gap-2">
              <p className="font-semibold text-cyan-500">
                A simple qr code generator
              </p>
              <p className="font-semibold text-red-500"> click for live demo</p>
            </CardFooter>
            <Icons />
          </Card>

 
          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
        
            <CardTitle className="flex flex-row justify-center p-4">
              <AnimatedText text={" TODO"} />
            </CardTitle>

            <CardContent className="flex flex-row justify-center">
              <Image
                src="/todo.jpg"
                width={200}
                height={200}
                alt="my pic"
                className="rounded-md"
              />
            </CardContent>
            <CardFooter className = " flex flex-col gap-2">
              <p className="font-semibold text-cyan-500">
                Todo app with typescript, vite, shadcn UI , tailwind css.
              </p>
              <p className="font-semibold text-red-500"> <a href="https://glittery-torte-487d9f.netlify.app" target="_blank">click for live demo</a></p>
            </CardFooter>
            <Icons />
          </Card>

          <Card className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400">
        
        <CardTitle className="flex flex-row justify-center p-4">
          <AnimatedText text={" search and tag"} />
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/tagAdd.png"
            width={200}
            height={200}
            alt="my pic"
            className="rounded-md"
          />
        </CardContent>
        <CardFooter className = " flex flex-col gap-2">
          <p className="font-semibold text-cyan-500">
           Adding and deleting tags in the input section and filtering the suggestions from the given list of data.
          </p>
          <p className="font-semibold text-red-500"> <a href="https://zepto-assignment-navy.vercel.app/" target="_blank">click for live demo</a></p>
        </CardFooter>
        <Icons />
      </Card>


        </div>
      </div>
    </div>
  );
};

export default Project;