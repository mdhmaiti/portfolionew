import { Press_Start_2P } from "next/font/google";
const psp= Press_Start_2P({
    display:"swap",
    subsets: ["latin-ext"],
    weight: "400",
    variable:"--pixel-sans",
    
  });

  export const pspfont = psp.variable;