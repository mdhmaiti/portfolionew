import Head from "next/head";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AnimatedText from "@/components/AnimatedText/AnimatedText";


const page = () => {
  return (
    <div>
      <Head>
        <title>profile | About page</title>
        <meta name ="description" content="any description"/>
      </Head>
      <div className="flex items-center justify-center h-50  font-semibold text-3xl text-center md:text-6xl z-10">
     <div className=" md:w-3/6 opacity-50 drop-shadow-md "><AnimatedText text={" About Me ."}/> </div>
      
    </div> 
      <Card className="drop-shadow-md">
  <CardHeader>
    <CardTitle className=" "> <AnimatedText text={"Card Title"}/></CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </div>
  );
};

export default page;
