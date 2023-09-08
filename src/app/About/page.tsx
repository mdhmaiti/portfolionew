

// about section 

import Head from "next/head";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import { Button } from "@/components/ui/button";

const page = () => {
  //cards details
  const cardsData = [
    {
      title: "Introduction",
      description: " A brief description. ",
      content: "I am a recent graduate in web development from India. I am passionate about learning new technologies and building innovative solutions. I am currently diving into the world of full stack development, but I am also open to exploring new tech domains. I am active on Hashnode and Twitter, where I occasionally write blogs to share my knowledge. I am available for onsite, remote, and hybrid jobs.",
      footer: "Mail: medhashis000@gmail.com.\n Linkdin: see in the contacts.",
    },
    {
      title: "Skills",
      description: "A brief description of what I know and what I am learnig.",
      content: "I am a full stack developer. I am capable of building both the front end and the back end.My tech stack MERN ( Mongo db ,Express ,React ,Node js ),NEXT JS ,Typescript,Javascript . I also use a state management Library RECOIL and capable of using the hooks. I use Git as a version control system . I use the VS Code with the WSL 2(Ubuntu).I am still learning the CI/CD and how to properly containerize an app and deploy both the front end and backend on AWS",
      footer: "... updating. check git hub in contact section for projects for now .",
    },
    {
      title: "Education",
      description: "history",
      content: " Bootcamps: \n1. Web development by Angela Yu. \n2. TypeScript ,Next Js , Recoil and others from Harkirat Singh course .\n Degree: \nElectonics and communication from Burdwan University. (2023 graduate).\nSchool: \nJogamaya Memorial Institute ( ICSE and ISC boards ) ",
      footer: "Card 3 Footer",
    },
  ];
    // card components
  return (
    <div>
      <Head>
        <title>profile | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <div className="flex items-center justify-center w-full h-50 py-4 font-semibold text-3xl text-center text-slate-400 md:text-6xl z-10">
        <div className=" md:w-3/6 drop-shadow-md shadow-slate-800 ">
          <AnimatedText text={" About Me ."} />
          <Button >Resume</Button>
        </div>
      </div>
       <div className="flex flex-col justify-justify-center items-center w-full my-5 space-y-10 ">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="drop-shadow-md shadow-slate-400 w-9/12 md:w-5/12 py-2 "
          >
            <CardHeader>
              <CardTitle>
                <AnimatedText text={card.title} />
              </CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="whitespace-pre-line">
                {/* Render content with \n for new lines */}
                {card.content.split('\n').map((item, itemIndex) => (
                  <p key={itemIndex} className="mb-2">
                    {item}
                  </p>
                ))}
              </div>
            </CardContent>
            <CardFooter>
            <div className="whitespace-pre-line">
                {/* Render content with \n for new lines */}
                {card.footer.split('\n').map((item, itemIndex) => (
                  <p key={itemIndex} className="mb-2">
                    {item}
                  </p>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div> 
    </div>
  );
};

export default page;
