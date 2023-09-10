import AnimatedText from "@/components/AnimatedText/AnimatedText"
//import Earth from "@/components/ball/Earth"
import Navbar from "@/components/navbar/navbar"
import { Suspense } from "react"
import Loading from "./Loading"
import dynamic from 'next/dynamic'

// Server Component:
const ServerComponent = dynamic(() => import('../components/ball/Earth'))

const Home = ()=>{
   return (
    <main>
      {/* <Navbar/> */}
   <div className="flex items-center justify-center h-50  font-semibold text-3xl text-center text-slate-400 md:text-6xl z-10 ">
     <div className=" md:w-3/6  "><AnimatedText text={" Hi, I am Medhashis, a web developer."}/> </div>
      
   </div> 
 
       <ServerComponent/>

      
    
    
   </main>
  )
}
export default Home