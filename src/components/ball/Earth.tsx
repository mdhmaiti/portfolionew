import AnimatedText from "@/components/AnimatedText/AnimatedText"
"use client"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Ball from '@/components/ball/Ball';
import Navbar from '@/components/navbar/navbar';

const Earth = () => {
  const [image, setImage] = useState<string>('8k_earth_daymap.jpg');
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      setImage('8k_earth_nightmap.jpg');
    } else {
      setImage('8k_earth_daymap.jpg');
    }
  }, [theme]);

  return (
    <div >
     
      <Ball
        divStyling="h-screen w-full "
        size={2.4}
        light={1.8}
        color={"#ebebb7"}
        image={image} // Use the dynamically updated image URL
        rotation={[0.0005, 0.0001, 0.0008]}
      />
    </div>
  );
};

export default Earth ;

//<Ball divStyling={"h-full w-screen -z-1"} size={2.4} light={3} distortion={0} distortionSpeed={0} image={"8k_earth_nightmap.jpg"} rotaion={[0, 0 ,0.01]}/>