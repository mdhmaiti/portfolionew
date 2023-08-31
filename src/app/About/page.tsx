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
  const cardsData = [
    {
      title: "Card 1 Title",
      description: "Card 1 Description",
      content: "Card 1 Content",
      footer: "Card 1 Footer",
    },
    {
      title: "Card 2 Title",
      description: "Card 2 Description",
      content: "Card 2 Content",
      footer: "Card 2 Footer",
    },
    {
      title: "Card 3 Title",
      description: "Card 3 Description",
      content: "Card 3 Content",
      footer: "Card 3 Footer",
    },
  ];

  return (
    <div>
      <Head>
        <title>profile | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <div className="flex items-center justify-center w-full h-50 py-4 font-semibold text-3xl text-center text-slate-400 md:text-6xl z-10">
        <div className=" md:w-3/6 ">
          <AnimatedText text={" About Me ."} />
          <Button>Resume</Button>
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
              <p>{card.content}</p>
            </CardContent>
            <CardFooter>
              <p>{card.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div> 
    </div>
  );
};

export default page;
