import React from "react";
import AnimatedText from "../AnimatedText/AnimatedText";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Icons from "../Icons";
import Image from "next/image";
const Project = () => {
  const myprojects = [
    {
      id: 1,
      title: "Grocery online",
      imgSrc: "/groceryonlineprofile.jpg",
      footerDesc:
        " Ecommerce app build with next js, tailwind css react js, postgreSQL, docker, Prisma, Node js, react query, Shadcn UI, react hook forms etc.",
      liveLink: "https://groceryonline.vercel.app",
    },
    {
      id: 2,
      title: " Threads",
      imgSrc: "/gmail-linkdin-twitter.jpg",
      footerDesc:
        " Built with next js server actions and clerk authentication.",
      liveLink: "https://github.com/mdhmaiti",
    },
    {
      id: 3,
      title: "Qr code generator",
      imgSrc: "/gmail-linkdin-twitter.jpg",
      footerDesc: " A simple qr code generator",
      liveLink: "https://github.com/mdhmaiti",
    },
    {
      id: 4,
      title: " TODO",
      imgSrc: "/todo.jpg",
      footerDesc: "Todo app with typescript, vite, shadcn UI , tailwind css.",
      liveLink: "https://glittery-torte-487d9f.netlify.app",
    },
    {
      id: 5,
      title: "search and tag",
      imgSrc: "/addTag.jpg",
      footerDesc:
        " Adding and deleting tags in the input section and filtering the suggestions from the given list of data.",
      liveLink: "https://zepto-assignment-navy.vercel.app/",
    },
    {
      id:6,
      title: "text to speech",
      imgSrc:"/txp1.jpg",
      footerDesc:"fetching the data from the api and using ssml to convert text to speech.",
      liveLink:"https://texttospeech-kappa.vercel.app/", 
    }
  ];

  return (
    <div id="Projects">
      <AnimatedText
        className=" w-full py-10 glow-text font-semibold text-4xl text-center  text-slate-400 md:text-6xl"
        text={" Projects ."}
      />
      <div className="flex items-center justify-center mx-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
          {/* Card 1 */}
          {myprojects.map((item: any, index: any) => (
            <Card
              key={index}
              className="p-5 sm:w-40 md:w-96 flex flex-col justify-center bg-transparent backdrop-blur-sm shadow-lg shadow-slate-400"
            >
              <CardTitle className="flex flex-row justify-center p-4">
                <AnimatedText text={item.title} />
              </CardTitle>

              <CardContent className="flex flex-row justify-center">
                <Image
                  src={item.imgSrc}
                  width={200}
                  height={200}
                  alt="my pic"
                  className="rounded-md aspect-square object-contain "
                />
              </CardContent>
              <CardFooter className=" flex flex-col gap-2">
                <p className="font-semibold text-cyan-500">{item.footerDesc}</p>
                <p className="font-semibold text-red-500">
                  {" "}
                  <a href={item.liveLink} target="_blank">
                    click for live demo
                  </a>
                </p>
              </CardFooter>
              <Icons />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
