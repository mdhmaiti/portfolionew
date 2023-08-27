
import Ball from "@/components/ball/Ball";

export default function Home() {
  return (

  
  <main className="flex flex-col h-screen w-screen">
   <div className="absolute -z-20 h-full w-full">
  {/* messy ball structure */}
  <Ball image={"paper-texture.jpg"}color={"#736878"} size={2.8} light={1} distortion={0.5} distortionSpeed={2} divStyling={"h-screen w-full"} rotaion={[0.00, 0.00, 0.00]}   />
  </div>
  {/* <Navbar/>  */}
{/* react moon */}
<Ball divStyling={"flex h-20 w-full"} size={2.7} light={1} distortion={0} distortionSpeed={0} image={"react-2.svg"} rotaion={[0.005,0.005,0.005]}/>
{/* earth */}
<Ball divStyling={"flex h-screen w-full"} size={3} light={4} distortion={0} distortionSpeed={0} image={"earth.jpg"} rotaion={[0.003,0.003,0.003]}/>



</main>

);
}
  